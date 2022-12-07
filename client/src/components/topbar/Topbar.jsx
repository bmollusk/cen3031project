import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import {Link} from "react-router-dom";
export default function Topbar() {
  let user = false;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}><span className="logo">WeClean</span></Link>
        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for a community, event, or person"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link className={"topbarLink"} to="/" style={{textDecoration:"none"}}><span className="topbarLink">Home</span></Link>
          <Link className={"topbarLink"} to="/event" style={{textDecoration:"none"}}><span className="topbarLink">Events</span></Link>      
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div>
          {
            user?
            (<Link to="/profile/12345"style={{textDecoration:"none"}}><img src="/assets/person/1.jpeg" alt="" className="topbarImg"/></Link>):
            (<Link to="/login"style={{textDecoration:"none"}}><img src="/assets/person/1.jpeg" alt="" className="topbarImg"/></Link>)
          }
        </div>
        
        
      </div>
    </div>
  );
}