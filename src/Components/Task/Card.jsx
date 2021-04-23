import "./Card.scss";
export default function Card({ desc, createdOn, headerColor }) {
  return (
    <div className="card" style={{ borderTop: `4px solid ${headerColor}` }}>
      {desc}
      <div className="footer">{createdOn}</div>
    </div>
  );
}
