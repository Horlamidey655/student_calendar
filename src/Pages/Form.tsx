import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "../App.css";
import { useForm } from "react-hook-form";
import type { EventData } from "./UserContext";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data: EventData) => {
    console.log(data);
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
            <NavLink to={"/Events"}>Event</NavLink>
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
          <input type="text" placeholder="Location" {...register("location")} />
          <select id="" required {...register("type")}>
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
          ></textarea>
          <div className="form-dates">
            <div className="form-date">
              <label htmlFor="start-date">Start Date: </label>
              <input type="date" id="start-date" {...register("date")} />
            </div>
            <div className="form-date">
              <label htmlFor="end-date">End Date: </label>
              <input type="date" name="" id="start-date" />
            </div>
            <div className="form-date">
              <label htmlFor="start-time">Start Time: </label>
              <input type="time" name="" id="start-time" />
            </div>
            <div className="form-date">
              <label htmlFor="end-time">End Time: </label>
              <input type="time" name="" id="end-time" />
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
