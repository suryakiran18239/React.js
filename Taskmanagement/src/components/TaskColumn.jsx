import "./TaskColumn.css";
import TaskCard from "./TaskCard";

function TaskColumn({ title, icon }) {
  // Destructure props for better readability

  return (
    <section className="task_column">
      <h1 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h1>
      <TaskCard />
    </section>
  );
}

export default TaskColumn;
