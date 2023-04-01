import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./video.css";

function Video({likes, messages, shares, name, description, music, clip}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={clip}
      ></video>
      <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      />
    </div>
  );
}

export default Video;
