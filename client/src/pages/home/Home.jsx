import Feed from "../../components/feed/Feed";
import CleanupMap from "../../components/map/CleanupMap";
import Topbar from "../../components/topbar/Topbar";

import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <CleanupMap />
      <Feed />
      <div className="homeContainer">  
      </div>
    </>
  );
}