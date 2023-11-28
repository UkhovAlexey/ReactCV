import CurrentTime from "./../components/CurrentTime/CurrentTime";
import "../styles/contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <div>
      <h1 className="text-title">Contacts</h1>
          <div className="contacts-locations">
            <h2>Locations</h2>
            <div>
            <ul>
              <li>     {
                <CurrentTime
                  city="Yekaterinburg, Russia"
                  timeZone="Asia/Yekaterinburg"
                />
              }</li>
              <li> {<CurrentTime city="Moscow, Russia" timeZone="Europe/Moscow" />}</li>
              </ul>
              </div>
          </div>
          <div className="contacts-contacts">
            <h2>Contacts</h2>
              <h3>
                Telegram calls and messages:&nbsp; 
                <a href="https://t.me/Alx_Uk" target="_blank" rel="noreferrer">
                  @Alx_Uk
                </a>
              </h3>
              <h3>
                Email:&nbsp;
                <a href="mailto:webdev@protonmail.com">ukhovalexd@gmail.com</a>
              </h3>
          </div>
          </div>
 </div>
  );
};

export default Contacts;
