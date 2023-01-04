import styles from './Header.module.scss';
import images from '~/assets/image';

import classNames from 'classnames/bind';
import { Search } from '../Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('wrapper')}>
                <div className={cx('top-header')}>
                    <img
                        className={cx('logo')}
                        src={images.logo}
                        alt="bazaar"
                    />
                    <Search />
                    <div className={cx('body')}>
                        <div className={cx('user')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
