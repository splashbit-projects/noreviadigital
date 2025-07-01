import { htmlTemplate } from './html-template';

export const contactFormBody = ({ name }: { name: string }) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header style="height: 89px;">
          <img style="width: 696px; height: 89px" src="https://images2.imgbox.com/9d/13/udZV7xll_o.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p style="font-size: 24px; font-weight: 700; text-transform: uppercase; color: #0D0D0D;"> Hi ${name},</p>
          <p class="text>Thanks for reaching out to Norevia Digital. We’ve received your request and our team is already reviewing the details you shared. Based on your business goals and challenges, we’ll match you with the most relevant marketing solution.</p>
          <p class="text>You can expect to hear from us within <strong class="strong>48 business hours</strong>. If your request is urgent, we’ll prioritize it accordingly.</p>
          <p class="text>We appreciate your interest and look forward to helping you move forward.</p>
          <p style="font-size: 24px; text-transform: uppercase; color: #0D0D0D;">Best regards,<br/><strong class="strong>The Norevia Digital Team</strong></p>
        </div>
        <footer class="footer>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" fill="#0D0D0D"/>
            <path d="M20.9806 35.9255C18.716 34.0987 16.4542 32.2697 14.1862 30.447C14.0459 30.3342 14 30.2214 14 30.0446C14.0082 26.0724 14.0103 22.1002 14.0089 18.1287C14.0089 17.9547 14.0493 17.8398 14.1903 17.7236C17.2627 15.1903 20.3303 12.6509 23.3985 10.1128C23.4396 10.0791 23.4855 10.0509 23.5587 10V38" fill="white"/>
            <path d="M25.381 36.6367C25.3181 35.6738 25.405 34.7115 25.3797 33.7465C25.3338 31.9905 25.3817 30.2324 25.3612 28.4757C25.3496 27.4508 25.442 26.4266 25.3708 25.4011C25.3194 24.6596 25.3995 23.9181 25.4358 23.1774C25.4481 22.9236 25.3098 22.6821 25.379 22.4311C25.5337 21.8691 25.4331 21.2941 25.4057 20.7383C25.3557 19.7135 25.3975 18.6927 25.3934 17.6706C25.392 17.3859 25.3735 17.0812 25.1572 16.8473C27.8496 14.6318 30.5421 12.4156 33.2345 10.1995C33.3413 10.2462 33.2913 10.3398 33.2913 10.4072C33.2954 16.9635 33.2954 23.5199 33.3009 30.0763C33.3009 30.242 33.2509 30.3466 33.1243 30.4497C30.8111 32.3413 28.502 34.2383 26.1909 36.1319" fill="white"/>
            <path d="M23.9469 37.5914C23.9455 31.0915 23.9448 24.5908 23.9386 18.0909C23.9386 17.899 23.9955 17.7786 24.1488 17.6631C24.4938 17.4031 24.8224 17.1211 25.1572 16.8473C25.3735 17.0812 25.392 17.3859 25.3934 17.6706C25.3975 18.6927 25.3557 19.7135 25.4057 20.7383C25.4331 21.2941 25.5337 21.8691 25.379 22.4311C25.3098 22.6821 25.4481 22.9236 25.4358 23.1774C25.3995 23.9181 25.3194 24.6596 25.3708 25.4011C25.442 26.4266 25.3496 27.4508 25.3612 28.4757C25.3817 30.2324 25.3338 31.9905 25.3797 33.7465C25.405 34.7115 25.3181 35.6738 25.381 36.6367" fill="white"/>
          </svg>
          <div class="footer-item">
            <p class="label">Email</p>
            <a href="mailto:info@noreviadigital.com" style="text-decoration: none;" class="footer-text">info@noreviadigital.com</a>
          </div>
          <div class="footer-item">
            <p class="label">Registered Address:</p>
            <p>Harju maakond, Tallinn, Kesklinna linnaosa, Liivamäe tn 8-7, 10113</p>
          </div>
        </footer>
      </div>
    `,
    style: `
      .wrapper {
        width: 696px;
        margin: 0 auto;
        background: #0D0D0D;
      }
      
      .main {
        background: #fff;
        padding: 70px 22px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
      }
      
      .strong {
        font-weight: 700;
      }
       
      .text {
        margin-top: 24px;
        color: #0D0D0D;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
      }

      .label {
        color: #FFF;
        font-size: 6px;
        font-weight: 400;
        line-height: 140%;
        text-transform: uppercase;
        opacity: 0.5;
        margin-bottom: 4px;
      }

      .footer-text {
        color: #FFF;
        font-size: 8px;
        font-weight: 700;
        line-height: 140%;
        text-transform: uppercase;
      }
      
      .footer {
        display: flex;
        padding: 10px 22px;
      }
    `,
  });
};
