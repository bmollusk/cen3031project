import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Button } from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "../../pages/home/Home";
import Event from "../../pages/event/Event";


export default function Topbar() {
 // const navigate = useNavigate();
  //const navigateHome = () => {
    // 👇️ navigate to /
  //  navigate('/');
 // };
  return (
    <Router>
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">WeClean</span>
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
        
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Event" element={<Event />} />
        </Routes>
        <Link color="inherit" className="topbarLink" to="/Home">
          <Button>Home</Button>
        </Link>
        <Link color="inherit" className="topbarLink" to="/Event">
          <Button>Events</Button> 
        </Link>      
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
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
    </Router>
  );
}