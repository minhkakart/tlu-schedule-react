import classNames from "classnames/bind";
import style from "./DisplaySubject.module.scss";
const cx = classNames.bind(style);

function DisplaySubject(data) {
  console.log("Display subject: ", data);
  const today = new Date();
  const todayTimeTable = data.subject.courseSubject.timetables.filter(
    (t) => t.weekIndex === today.getDay() + 1
  )[0];
  console.log("Display subject todayTimeTable: ", todayTimeTable);
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("subject-name")}>{data.subject.subjectName}</h2>
      <div className={cx('detail')}>
        <p className={cx("room")}>{todayTimeTable.room.name}</p>
        <p className={cx("time")}>
          {todayTimeTable.startHour.name} - {todayTimeTable.endHour.name}
        </p>
        <p className={cx("time-detail")}>
          {todayTimeTable.startHour.startString} -{" "}
          {todayTimeTable.endHour.endString}
        </p>
      </div>
    </div>
  );
}

export default DisplaySubject;
