import "./footer.css";

import telegram from "./../../img/icons/telegram.png";
import email from "./../../img/icons/email.png";
import gitHub from "./../../img/icons/github.png";
// import linkedIn from "./../../img/icons/linkedin.png";
// import behance from "./../../img/icons/behance.png";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a target="_blank" href=" https://t.me/Alx_uk">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="mailto:ukhovalexd@gmail.com">
                <img src={email} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/UkhovAlexey"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            {/* <li className="social__item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/alexfrontend"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.net/alex-web-design"
              >
                <img src={behance} alt="Link" />
              </a>
            </li> */}
          </ul>
          <div className="copyright">
            <p>© 2023 ukhovalexd.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
