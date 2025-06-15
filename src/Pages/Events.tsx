import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { EventsArray } from "./Events";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const Events = () => {
  const { events } = useContext(UserContext);
  const filterarray = [...EventsArray, ...events].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });
  return (
    <div>
      <header className="form-header">
        <div className="header-logo">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <h1>University Calendar</h1>
        </div>
        <form action="" className="search-form">
          <input type="text" placeholder="Search Event" />
        </form>
        <div className="event-nav">
          <ul className="form-links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/MyEvents"}>My Events</NavLink>
            <button className="register-btn">Create Event</button>
          </ul>
        </div>
      </header>
      <main className="event-body">
        <h2>Events</h2>
        <div className="filter-btns">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Academic</button>
          <button className="filter-btn">Social</button>
          <button className="filter-btn">Career</button>
        </div>
        <div className="events">
          {filterarray.map((event) => {
            return (
              <div className="event" key={event.id}>
                <div className="event-date">
                  <time dateTime={event.date}>{event.date}</time>
                  <span className="event-cat">{event.type}</span>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-content-desc">{event.description}</p>
                  <p className="event-content-location">
                    Location: {event.location}
                  </p>
                </div>

                <div className="event-btn">
                  <button>Join</button>
                  <span>
                    {event.attendees.length}/{event.capacity} slots
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Events;
