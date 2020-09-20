/* eslint-disable react/jsx-no-undef */
import React, { Component,useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";

function Video({ url, channel, description, song, likes, messages, shares }) {
	const [playing, setPlay] = useState(false);
	const videoRef = useRef(null);

	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlay(false);
		} else {
			videoRef.current.play();
			setPlay(true);
		}
	};

	return (
		<div className="video">
			<video
				className="video__player"
				loop
				onClick={onVideoPress}
				ref={videoRef}
				src={url}
			/>

			<VideoFooter
				channel={channel}
				description={description}
				song={song}
			/>
			<VideoSidebar likes={likes} messages={messages} shares={shares} />
		</div>
	);
}

export default Video;
