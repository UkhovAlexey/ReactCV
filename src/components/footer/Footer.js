import "./footer.css";

import telegram from "./../../img/icons/telegram.png";
import email from "./../../img/icons/email.png";
import gitHub from "./../../img/icons/github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/Alx_uk"
                aria-label="Telegram"
              >
                <img src={telegram} alt="Telegram" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="mailto:ukhovalexd@gmail.com"
                aria-label="Email"
              >
                <img src={email} alt="Email" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/UkhovAlexey"
                aria-label="GitHub"
              >
                <img src={gitHub} alt="GitHub" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 ukhovalexd.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
