import "./style.css";

import fileCV from "./../../files/CV - Ukhov Alexey - Front-end.pdf"

const Header = () => {
  return (
    <header className="header">
      
      <div className="header__wrapper">
        <h1 className="header__title">
         
          <strong>
            Hi, my name is <em>ALEX</em>
          </strong>
          <br />I'm a web developer
     
        </h1>
        <h2 className="header__text">Thank you for visiting my page !</h2>
        
        <a href={fileCV} download target="_blank" rel="noreferrer noopener" className="btn" >
          Download CV
          
          
        </a>
      </div>
    </header>
  );
};

export default Header;




