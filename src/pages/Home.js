import "../styles/home.css";

const Home = () => {
  return (
    <header className="home">
      <div className="welcome">
        <div className="welcome-text">
          <p className="text-header">Welcome !</p>
          <p className="text-normal">
            Hi! My name is Ukhov Alex.<br/> I'm a web developer. Here you can download
my summary, or to see some examples of my work, as well as find my contacts. This page is constantly updated both in design and content, as inspiration comes. The github version is not final, but changes as new ideas appear and are implemented. I will be glad to cooperate with you and have interesting dialogues. <br/>Thank you for visiting my
            page!
          </p>

          <a
            href="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1M2KumiEJQsp-65QPyBVZ6aCbuiLXF3l9"
            download
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            Download summary
          </a>
        </div>
      </div>

      <div className="stack">
        <ul className="list">
          <li className="list-item typing-effect">
            <h2 className="text-header">&#123; my tech stack &#125;</h2>
            <p className="text-normal">
              ReactJS
              <br />
              TypeScript
              <br />
              Javascript ES6
              <br />
              Axios
              <br />
              NodeJS / npm
              <br />
              HTML
              <br />
              CSS3
              <br />
              Sass / Scss / Less
              <br />
              Tailwind
              <br />
              Bootstrap
              <br />
              Jest
              <br />
              Git / Github <span className="blinking-rectangle"></span>
              <br />
            </p>
          </li>
          <li className="list-item">
            <h2 className="text-header">.. and also CMS</h2>
            <p className="text-normal">
              Wordpress
              <br />
              Tilda
              <br />
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Home;
