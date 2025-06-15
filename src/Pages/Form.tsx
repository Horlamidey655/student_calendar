import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "../App.css";
import { useForm } from "react-hook-form";
import type { EventData } from "./UserContext";
import { EventsArray } from "./Events";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data: EventData) => {
    EventsArray.push({
      ...data,
      capacity: 50,
      id: Date.now().toString(),
      attendees: [],
    });
    console.log(EventsArray.length);
    reset();
  };

  return (
    <>
      <header className="form-header">
        <div className="header-logo">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <h1>University Calendar</h1>
        </div>
        <div className="form-nav">
          <ul className="form-links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/MyEvents"}>My Events</NavLink>
          </ul>
        </div>
      </header>

      <main className="form-body">
        <h2>Add an Event</h2>
        <form
          action=""
          className="form-content"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
            type="text"
            placeholder="Event Title"
            {...register("title")}
            required
          />
          <input
            type="text"
            placeholder="Location"
            {...register("location")}
            required
          />
          <select id="" required {...register("type")} aria-required="true">
            <option>Select a category</option>
            <option value="Academic">Academic</option>
            <option value="Social">Social</option>
            <option value="Career">Career</option>
          </select>
          <textarea
            id=""
            cols={7}
            rows={7}
            {...register("description")}
            required
          ></textarea>
          <div className="form-dates">
            <div className="form-date">
              <label htmlFor="start-date">Start Date: </label>
              <input
                type="date"
                id="start-date"
                {...register("StartDate")}
                required
              />
            </div>
            <div className="form-date">
              <label htmlFor="end-date">End Date: </label>
              <input
                type="date"
                id="start-date"
                {...register("endDate")}
                required
              />
            </div>
            <div className="form-date">
              <label htmlFor="start-time">Start Time: </label>
              <input
                type="time"
                id="start-time"
                {...register("StartTime")}
                required
              />
            </div>
            <div className="form-date">
              <label htmlFor="end-time">End Time: </label>
              <input
                type="time"
                id="end-time"
                {...register("endTime")}
                required
              />
            </div>
          </div>
          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Form;
