import { VideoObj } from "../../models/general.models";
import classes from "./Video.module.scss";
const Video = (props: VideoObj) => {
  return (
    <div className={classes["video"]}>
      <img src={props.image_url} alt={props.title} loading="lazy" />
      <div className={classes["video-info"]}>
        <p>{props.title}</p>
        <p>{props.artist}</p>
        <p>{props.release_year}</p>
      </div>
    </div>
  );
};

export default Video;
