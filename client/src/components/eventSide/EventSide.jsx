import "./eventSide.css";

export default function EventSide({event}) {
  const url = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarEvent">
      <img className="sidebarEventImg" src={url + event.picture} alt="" />
      <span className="sidebarEventName">{event.name}</span>
    </li>
  );
}