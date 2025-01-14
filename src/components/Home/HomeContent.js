import React from "react";
import "../../styles/HomeContent.css";
import video1 from "../../assets/videos/1.mp4";
import video2 from "../../assets/videos/2.mp4";
import video3 from "../../assets/videos/3.mp4";
import video4 from "../../assets/videos/4.mp4";
import video5 from "../../assets/videos/5.mp4";

export default function HomeContent() {
  return (
    <div className="container-home-content">
        <video autoPlay loop muted playsInline className="video-container" src={video1}></video>
        <video autoPlay loop muted playsInline className="video-container" src={video2}></video>
        <video autoPlay loop muted playsInline className="video-container" src={video3}></video>
        <video autoPlay loop muted playsInline className="video-container" src={video4}></video>
        <video autoPlay loop muted playsInline className="video-container" src={video5}></video>
    </div>
  );
}