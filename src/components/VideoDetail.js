import React, { Fragment } from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  console.log(videoSrc);
  return (
    <Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h5">
          {video.snippet.title} • {video.snippet.publishedAt}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </Fragment>
  );
};

export default VideoDetail;
