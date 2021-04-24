import "./TaskContainer.scss";
import Card from "Components/Task/Card";

export default function TaskContainer({
  tasks,
  headerName,
  headerColor,
  backgroundColor,
  id,
}) {
  let toBeVisible = false;
  const allowDrop =(ev)=>{
    ev.preventDefault();
   }

   const drop=(ev)=> {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  
  return (
    <div className="taskDiv"  onDrop={drop} onDragOver={allowDrop} style={{ backgroundColor: backgroundColor }}>
      <div className="task-header" style={{ backgroundColor: headerColor }}>
        {headerName}
      </div>

      {tasks
        .filter((current) => current.taskStage === id)
        .map((task) => {
          return (
            <Card
              id={task.id}
              createdOn={task.creationDate}
              desc={task.taskDesc}
              headerColor={headerColor}
            />
          );
        })}
      {toBeVisible == true ? (
        <>
          <input />
          <button>Add A Task</button>
        </>
      ) : null}
    </div>
  );
}
