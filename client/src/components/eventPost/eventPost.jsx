import "./eventPost.css";
import { MoreVert } from "@material-ui/icons";
import { Events, Users } from "../../dummyData";
import { useState } from "react";

export default function Event({ eventItem }) {
  const [signedUp,setSignedUp] = useState(eventItem.signedUp)
  const [isSignedUp,setIsSignedUp] = useState(false)
  const url = process.env.REACT_APP_PUBLIC_FOLDER;
  const signedUpHandler =()=>{
    setSignedUp(isSignedUp ? signedUp-1 : signedUp+1)
    setIsSignedUp(!isSignedUp)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={url + Users.filter((u) => u.id === eventItem?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === eventItem?.userId)[0].username}
            </span>
            <span className="postDate">{eventItem.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{eventItem?.desc}</span>
          <img className="postImg" src={url + eventItem.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">         
            <img className="likeIcon" src="assets/group-icon.png" onClick={signedUpHandler} alt="" />
            <span className="postLikeCounter">{signedUp} people signed up</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{eventItem.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}