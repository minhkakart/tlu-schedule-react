import className from 'classnames/bind';

import { useSubject } from "../subject";
import style from './TodaySubjects.module.scss';
import DisplaySubject from '../DisplaySubject';

const cx = className.bind(style)

function TodaySubjects() {
  const state = useSubject()[0];
  // console.log(state.subjects);
  const today = new Date();
  const dayOfWeek = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7']
  const todaySubject = state.subjects.filter((subject)=>{
    const a = subject.courseSubject.timetables.filter(tb => {
      return (tb.startDate < today.getTime() && today.getTime() < tb.endDate && (today.getDay()+1) === tb.weekIndex)
    })
    // console.log('a:',a);
    return a.length !== 0;
  })
  console.log('today subjects:',todaySubject);
  return (
    <div className={cx('container')}>
      <div className={cx('content')}>
        <h2>Today subjects</h2>
        <h3>{dayOfWeek[today.getDay()]}</h3>
        {
          todaySubject.map((subject) => {
            return (<DisplaySubject key={subject.id} subject={subject} />)
          })
        }
      </div>
    </div>
  );
}

export default TodaySubjects;
