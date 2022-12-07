import EventPost from "../eventPost/eventPost";
import EventShare from "../eventShare/EventShare";
import "./eventFeed.css";
import { Events } from "../../dummyData";

export default function EventFeed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <EventShare />
        {Events.map((p) => (
          <EventPost key={p.id} eventItem={p} />
        ))}
      </div>
    </div>
  );
}