import CurrentTime from "./../components/CurrentTime/CurrentTime";

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Podgorica, Montenegro (MSK -1h) </p>
            <p>Yekaterinburg, Russia (MSK +2h)</p>
            {<CurrentTime />}
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="https://t.me/Alx_Uk" target="_blank" rel="noreferrer">
                @Alx_Uk
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">ukhovalexd@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
