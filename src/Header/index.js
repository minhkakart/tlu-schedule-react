
import className from "classnames/bind";

import style from "./Header.module.scss";

const cx = className.bind(style);

function Header({children}) {
    return ( <div className={cx('header')}>
        <div className={cx('title')}></div>
        {children}
    </div> );
}

export default Header;