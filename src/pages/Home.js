import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend knowledge stack</h2>
              <p>
                HTML, CSS , Sass / Scss / Less <br />
                JavaScript, BootStrap <br />
                ReactJS <br />
                Git / GitHub <br />
                CMS Tilda, CMS Wordpress
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
