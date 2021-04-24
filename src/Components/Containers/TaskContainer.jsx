import "./TaskContainer.scss";
import Card from "Components/Task/Card";

export default function TaskContainer({
  tasks,
  headerName,
  headerColor,
  backgroundColor,
  id,
  handleTask
}) {
  let toBeVisible = false;
  const allowDrop =(ev)=>{
    ev.preventDefault();
   }

   const drop=(ev)=> {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   // ev.target.appendChild(document.getElementById(data));
   const newTaskArray= tasks.map((curentData)=>{
         if(curentData.id==data){
          curentData.taskStage=id;
         }
         return curentData;
    })
    handleTask(newTaskArray);
  }
  
  return (
    <div className="taskDiv" onDrop={drop} onDragOver={allowDrop} style={{ backgroundColor: backgroundColor }}>
      <div className="task-header" style={{ backgroundColor: headerColor }}>
        {headerName}
      </div>
      {headerName==="Pending" ?toBeVisible = true: toBeVisible = false}
      {tasks
        .filter((current) => current.taskStage === id)
        .map((task) => {
          return (
            <Card
              id={task.id}
              key={task.id}
              createdOn={task.creationDate}
              desc={task.taskDesc}
              headerColor={headerColor}
            />
          );
        })
        }
      { toBeVisible == true ? (
        <div className="addATaskDiv">
          <input />
          <button>Add A Task</button>
        </div>
      ) : null }
    </div>
  );
}
