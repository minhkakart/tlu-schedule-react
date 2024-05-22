import className from "classnames/bind";

import { useSubject } from "../subject";
import style from "./AllSemester.module.scss";

const cx = className.bind(style);

function AllSemester() {
  const state = useSubject()[0];
  // console.log(state.subjects);
  // const today = new Date();
  return (
   <div className={cx('container')}>
      <div className={cx('content')}>
        <h2>All semester</h2>
        {state.subjects.map((element, index) => {
          return (
            <div key={index}>
              <h2>{element.subjectCode}</h2>
              {element.courseSubject.timetables.map((tb, index) => {
                const startDate = new Date(tb.startDate);
                const endDate = new Date(tb.endDate);
                return (
                  <div key={index}>
                    <p>Start date: {startDate.toLocaleDateString()}</p>
                    <p>End date: {endDate.toLocaleDateString()}</p>
                    <p>Thứ {tb.weekIndex}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
   </div>
  );
}

export default AllSemester;
