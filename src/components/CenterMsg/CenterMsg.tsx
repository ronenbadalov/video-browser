import classes from "./CenterMsg.module.scss";
import Lottie from "lottie-react";

type Props = {
  animationData: any;
  text: string;
};

const CenterMsg = (props: Props) => {
  return (
    <div className={classes["msg"]}>
      <Lottie animationData={props.animationData} loop={true} />
      <p>{props.text}</p>
    </div>
  );
};

export default CenterMsg;
