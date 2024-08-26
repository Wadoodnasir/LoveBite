import React from "react";
import v1 from "../assest/v1.mp4";
import vid1 from "../assest/vid1.mp4";
import v2 from "../assest/v2.mp4";
import vid2 from "../assest/vid2.mp4";
import v3 from "../assest/v3.mp4";
import vid3 from "../assest/vid3.mp4";

// Array of video objects
const videos = [
  { src: v1, detail: "Fayaz Love", title: "Fayaz" },
  { src: vid1, detail: "Asma Love", title: "Asma" },
  { src: v2, detail: "Asma Love", title: "Fayaz" },
  { src: vid2, detail: "Fayaz Love", title: "Asma" },
  { src: vid3, detail: "Fayaz Love", title: "Asma" },
  { src: v3, detail: "Asma Love", title: "Fayaz" },
];

const Video = () => {
  return (
    <div className="container">
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-12 mb-3" key={index}>
            <h5 className="text-center">{video.title}</h5>
            <p className="text-center">{video.detail}</p>
            <video controls width="100%">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="text-center mt-2">
              <a href={video.src}>Download Video</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
