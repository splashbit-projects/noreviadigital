'use client';

import st from './ReachOut.module.scss';

export const ReachOut = () => {
  return (
    <div className="_container">
      <section className={st.layout}>
        <h2>Reach Out Anytime</h2>
        <section className={st.content}>
          <div className={st.info}>
            <div className={st.info__item}>
              <span>Email:</span>
              <a href="mailto:info@noreviadigital.com">info@noreviadigital.com</a>
            </div>
            <div className={st.info__item}>
              <span>Social Media:</span>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                >
                  <path
                    d="M6.63825 25.9686V8.68035H0.897002V25.9686H6.63885H6.63825ZM3.76882 6.32034C5.77049 6.32034 7.01667 4.9928 7.01667 3.33376C6.9792 1.63692 5.77049 0.346436 3.80689 0.346436C1.84194 0.346436 0.558594 1.63692 0.558594 3.33361C0.558594 4.99265 1.80432 6.32019 3.7312 6.32019H3.76837L3.76882 6.32034ZM9.8161 25.9686H15.5569V16.3151C15.5569 15.7991 15.5944 15.2817 15.746 14.9132C16.1609 13.8804 17.1055 12.8113 18.6919 12.8113C20.7688 12.8113 21.6001 14.3965 21.6001 16.7209V25.9686H27.3408V16.056C27.3408 10.7461 24.5088 8.27504 20.7316 8.27504C17.6349 8.27504 16.2748 10.0074 15.5191 11.1874H15.5573V8.68095H9.8164C9.89134 10.3028 9.81595 25.9692 9.81595 25.9692L9.8161 25.9686Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className={st.mapsInfo}>
            <div className={st.mapsInfo__item}>
              <div className={st.mapsHeading}>
                <span>Registered Address:</span>
                <h4>Harju maakond, Tallinn, Kesklinna linnaosa, Liivamäe tn 8-7, 10113</h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.1781313626793!2d24.764677699999996!3d59.430103599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294a73990630b%3A0xcc7182dd74f6226f!2sLiivam%C3%A4e%20tn%208%2C%2010113%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2sua!4v1751369803386!5m2!1sen!2sua"
                width="600"
                height="250"
                style={{ border: 0, width: '100%', height: '250px', borderRadius: '24px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* <div className={st.mapsInfo__item}>
              <div className={st.mapsHeading}>
                <span>Office Address:</span>
                <h4>Harju maakond, Tallinn, Kesklinna linnaosa, Liivamäe tn 8-7, 10113</h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.1781313626793!2d24.764677699999996!3d59.430103599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294a73990630b%3A0xcc7182dd74f6226f!2sLiivam%C3%A4e%20tn%208%2C%2010113%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2sua!4v1751369803386!5m2!1sen!2sua"
                width="600"
                height="250"
                style={{ border: 0, width: '100%', height: '250px', borderRadius: '24px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div> */}
          </div>
        </section>
      </section>
    </div>
  );
};
