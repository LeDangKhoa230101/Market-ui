import styles from './Menu.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import PopperWrapper from '~/components/Popper/Popper';

const cx = classNames.bind(styles);

function Menu({ children, data }) {
    return (
        <span>
            <HeadlessTippy
                interactive
                offset={[2, 8]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('menu-user')} {...attrs}>
                        <PopperWrapper>
                            {data.map((item, index) => (
                                <Link key={index} className={cx('menu-item')}>
                                    {item.title}
                                </Link>
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </span>
    );
}

export default Menu;
