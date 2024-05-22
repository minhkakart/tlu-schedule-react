import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import style from "./Navigator.module.scss";

const cx = classnames.bind(style);

function Navigator() {
    return ( 
        <div className={cx('nav')}>
            <NavLink className={(nav)=>cx('nav-link', {active: nav.isActive})} to={'/allsemester'}>Tất cả</NavLink>
            <NavLink className={(nav)=>cx('nav-link', {active: nav.isActive})} to={'/'}>Hôm nay</NavLink>
            <NavLink className={(nav)=>cx('nav-link', {active: nav.isActive})} to={'/login'}>Tải lịch</NavLink>
        </div>
     );
}

export default Navigator;