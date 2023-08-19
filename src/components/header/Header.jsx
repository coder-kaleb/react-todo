import { taskNum } from "../todo/Todo";
import "./header.css";

const Header = () => {
  const now = new Date();
  const currentMonth = now.toLocaleDateString("default", { month: "long" });
  const currentDayInMonth = now.getDate();
  const currentDay = now.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDayName = dayNames[currentDay];
  return (
    <header className="header">
      <div className="date">
        <p className="day">
          {currentDayName},{" "}
          <span className="date-num">{currentDayInMonth}th</span>
        </p>
        <p className="month">{currentMonth}</p>
      </div>
      <div className="task-num">
        <span className="task-num-num">{taskNum ? taskNum : 0}</span> Tasks
      </div>
    </header>
  );
};

export default Header;
