import styles from './Header.module.scss';
import images from '~/assets/image';
import ModalUser from '~/components/ModalUser/ModalUser';
import Cart from '~/components/Cart/Cart';
import { Search } from '../Search';

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
                    <Search />
                    <div className={cx('action')}>
                        <ModalUser />
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
