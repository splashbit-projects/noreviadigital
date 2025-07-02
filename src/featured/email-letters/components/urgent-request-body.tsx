import { htmlTemplate } from './html-template';

export const urgentRequestBody = ({ name }: { name: string }) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header style="height: 89px;">
          <img style="width: 696px; height: 89px" src="https://images2.imgbox.com/9d/13/udZV7xll_o.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p style="font-size: 24px; font-weight: 700; color: #0D0D0D;"> Hi ${name},</p>
          <p class="text">Your urgent request has been received. We understand the importance and urgency of your situation.</p>
          <p class="text">Our team is already reviewing the issue you described and will respond <strong class="strong">as quickly as possible — typically within a few business hours.</strong></p>
          <p class="text">If you need to add anything or reach us directly, feel free to reply to this email.</p>
          <p class="text">We’re here to help you stabilise and take control — fast.</p>
          <p style="font-size: 24px; color: #0D0D0D;">Best regards,<br/><strong class="strong">The Norevia Digital Team</strong></p>
        </div>
        <footer class="footer">
          <img src="https://images2.imgbox.com/58/3d/vy9GB4fY_o.png" alt="norevia-logo" style="width: 40px; height: 40px;" />
          <div class="footer-item" style="margin-left: 32px;">
            <p class="label">Email</p>
            <a href="mailto:info@noreviadigital.com" style="text-decoration: none; color: #FFF; border: none; outline: none;" class="footer-text">info@noreviadigital.com</a>
          </div>
          <div class="footer-item" style="margin-left: 20px;">
            <p class="label">Registered Address:</p>
            <p class="footer-text">Harju maakond, Tallinn, Kesklinna <br /> linnaosa, Liivamäe tn 8-7, 10113</p>
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
        background: #0D0D0D;
        display: flex;
        padding: 16px 22px;
      }
    `,
  });
};
