import classnames from "classnames/bind";
import style from "./Loading.module.scss";

const cx = classnames.bind(style);
function Loading() {
  return (
    <div className={cx("loading")}>
      <div className={cx("load-circle")}></div>
    </div>
  );
}

export default Loading;
