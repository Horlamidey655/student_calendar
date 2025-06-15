import { NavLink } from "react-router-dom";

const MyEvents = () => {
  return (
    <div className="myEvents">
      <aside className="myEvents-aside">
        <div className="myEvents-header">
          <h3>Events Dashboard</h3>
        </div>
        <ul className="myEvents-links">
          <NavLink to={"/"} className="event-link">
            Home
          </NavLink>
          <NavLink to={"/MyEvents"} className="event-link active">
            My Events
          </NavLink>
        </ul>
        <button className="register-btn">Create Event</button>
      </aside>
      <main className="event-body">
        <h2>My Events</h2>
        <div className="filter-btns">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Academic</button>
          <button className="filter-btn">Social</button>
          <button className="filter-btn">Career</button>
        </div>
        <div className="events-container">
          <div className="event">
            <div className="event-date">
              <time dateTime="23/05/2027">September 15, 2025</time>
              <span className="event-cat">Social</span>
            </div>
            <div className="event-content">
              <h3>IAS 3.0. learn the basis of accounting</h3>
              <p className="event-content-desc">
                Let the count down begin its going to be loud and clear when i
                become the best guy in react. I can't wait to be there. Trust
                me, you are going to enjoy me
              </p>
              <p className="event-content-location">
                Location: university avenue, old bodija road
              </p>
            </div>

            <div className="event-btn">
              <p>Thursday, May 5, 2022. 4: 00pm</p>
            </div>
          </div>
          <div className="event">
            <div className="event-date">
              <time dateTime="23/05/2027">September 15, 2025</time>
              <span className="event-cat">Social</span>
            </div>
            <div className="event-content">
              <h3>IAS 3.0. learn the basis of accounting</h3>
              <p className="event-content-desc">
                Let the count down begin its going to be loud and clear when i
                become the best guy in react. I can't wait to be there. Trust
                me, you are going to enjoy me
              </p>
              <p className="event-content-location">
                Location: university avenue, old bodija road
              </p>
            </div>

            <div className="event-btn">
              <p>Thursday, May 5, 2022. 4: 00pm</p>
            </div>
          </div>
          <div className="event">
            <div className="event-date">
              <time dateTime="23/05/2027">September 15, 2025</time>
              <span className="event-cat">Social</span>
            </div>
            <div className="event-content">
              <h3>IAS 3.0. learn the basis of accounting</h3>
              <p className="event-content-desc">
                Let the count down begin its going to be loud and clear when i
                become the best guy in react. I can't wait to be there. Trust
                me, you are going to enjoy me
              </p>
              <p className="event-content-location">
                Location: university avenue, old bodija road
              </p>
            </div>

            <div className="event-btn">
              <p>Thursday, May 5, 2022. 4: 00pm</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyEvents;
