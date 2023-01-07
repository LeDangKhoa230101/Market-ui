import images from '~/assets/image';
import Button from '~/components/Button/Button';
import ModalUser from '~/components/ModalUser/ModalUser';

import classNames from 'classnames/bind';
import { Search } from '../Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

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
                    <div className={cx('action')}>
                        <ModalUser />
                        <Button className={cx('action-btn')}>
                            <FontAwesomeIcon
                                icon={faBagShopping}
                                className={cx('action-icon')}
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
