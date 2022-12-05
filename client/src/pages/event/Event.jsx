import Topbar from "../../components/topbar/Topbar";
import SidebarEvents from "../../components/sidebarEvents/SidebarEvents";
import EventFeed from "../../components/eventFeed/EventFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./event.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SidebarEvents />
        <EventFeed/>
        <Rightbar/>
      </div>
    </>
  );
}