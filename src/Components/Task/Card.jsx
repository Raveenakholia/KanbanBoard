import "./Card.scss";
export default function Card({id, desc, createdOn, headerColor }) {
   const drag= (ev)=>{
    ev.dataTransfer.setData("text", ev.target.id);
   }
  
    return (
    
    <div className="card" id={id} draggable="true" onDragStart={drag}   style={{ borderTop: `4px solid ${headerColor}` }}>
      {desc}
      <div className="footer">{createdOn}</div>
    </div>
  );
}
