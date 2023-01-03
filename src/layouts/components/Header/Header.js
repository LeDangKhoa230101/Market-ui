import styles from './Header.module.scss';
import images from '~/assets/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

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
                    <div className={cx('search')}>
                        <input
                            className={cx('search-input')}
                            type="text"
                            placeholder="Searching for..."
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <button className={cx('cate-btn')}>
                            All Categorys
                            <FontAwesomeIcon
                                className={cx('down-icon')}
                                icon={faAngleDown}
                            />
                        </button>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('user')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
