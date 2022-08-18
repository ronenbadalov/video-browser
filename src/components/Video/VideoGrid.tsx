import React from "react";
import { VideoObj } from "../../models/general.models";
import Video from "./Video";
import classes from "./VideoGrid.module.scss";
type Props = {
  videosData: VideoObj[];
};

const VideoGrid = (props: Props) => {
  return (
    <div className={classes["grid"]}>
      {props.videosData.map((video) => (
        <Video key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;
