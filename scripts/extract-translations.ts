import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');
const outputFile = path.resolve('messages/en.json');

type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = {
  [namespace: string]: {
    [key: string]: TranslationValue;
  };
};

const translations: Translations = {};

// Recursively walks through all files in the src directory
function walk(dirPath: string): void {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (/\.(js|ts|jsx|tsx)$/.test(file)) {
      extractFromFile(fullPath);
    }
  }
}

// Extract translation keys and fallbacks from a single file
function extractFromFile(filePath: string): void {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Match the namespace: useTranslations('header')
  const namespaceMatch = content.match(
    /(?:useTranslations|getTranslations)\(\s*["'`]([\w-]+)["'`]\s*\)/
  );
  if (!namespaceMatch) return;

  const namespace = namespaceMatch[1];
  if (!translations[namespace]) translations[namespace] = {};

  // Match t('key', { fallback: 'Fallback' })
  const regex =
    /t\(\s*['"`]([\w.-]+)['"`]\s*,\s*{[^}]*fallback:\s*['"`]([\s\S]*?)['"`][^}]*}\s*\)/g;

  let match;
  while ((match = regex.exec(content))) {
    const fullKey = match[1];
    const fallback = match[2];
    if (fullKey && fallback) {
      setNestedKey(translations[namespace], fullKey, fallback);
    }
  }
}

// Builds nested translation keys (e.g., 'menu.title' becomes { menu: { title: "..." } })
function setNestedKey(
  obj: { [key: string]: TranslationValue },
  keyPath: string,
  value: string
): void {
  const keys = keyPath.split('.');
  let current = obj;

  keys.forEach((key: string, index: number) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key] || typeof current[key] === 'string') {
        current[key] = {};
      }
      current = current[key] as { [key: string]: TranslationValue };
    }
  });
}

// Execute the extraction process
walk(srcDir);

// Ensure the messages folder exists and write the output
fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(translations, null, 2), 'utf8');
console.log(`✅ Translations written to ${outputFile}`);
