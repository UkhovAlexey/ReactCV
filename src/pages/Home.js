import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Knowledge stack</h2>
              <p>
                HTML<br />
                CSS3<br />
                Sass / Scss / Less<br />
                Responsive and adaptive design<br />
                Javascript ES6<br />
                Bootstrap<br />
                ReactJS<br />
                npm<br />
                Git / Github<br />
                Terminal <br />
                Figma
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">CMS</h2>
              <p>CMS Tilda, CMS Wordpress</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
