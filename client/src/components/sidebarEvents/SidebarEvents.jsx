import "./sidebarEvents.css";
import {
  Person,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  RssFeed,
  Event,
} from "@material-ui/icons";
import { EventsSide } from "../../dummyData";
import EventSide from "../eventSide/EventSide";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <h1>Events</h1>
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
        </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <h3>Events you may be interested in</h3>
        <ul className="sidebarEventList">
          {EventsSide.map((e) => (
            <EventSide key={e.id} event={e} />
          ))}
        </ul>
      </div>
    </div>
  );
}