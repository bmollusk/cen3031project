import "./eventSide.css";

export default function EventSide({event}) {
  return (
    <li className="sidebarEvent">
      <img className="sidebarEventImg" src={event.picture} alt="" />
      <span className="sidebarEventName">{event.name}</span>
    </li>
  );
}