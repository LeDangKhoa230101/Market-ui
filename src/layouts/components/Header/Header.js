import styles from './Header.module.scss';
import images from '~/assets/image';
import ModalUser from '~/layouts/components/ModalUser/ModalUser';
import Cart from '~/layouts/components/Cart/Cart';
import { Search } from '../Search';
import Category from '~/layouts/components/Category';

import classNames from 'classnames/bind';
import Button from '@mui/material/Button';

import {
    faShirt,
    faLaptop,
    faMobileScreenButton,
    faCamera,
    faMotorcycle,
    faCar,
} from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CATE_LIST = [
    {
        title: 'Fashion',
        to: '/',
        icon: faShirt,
    },
    {
        title: 'Laptop',
        to: '/',
        icon: faLaptop,
    },
    {
        title: 'Mobile',
        to: '/',
        icon: faMobileScreenButton,
    },
    {
        title: 'Camera',
        to: '/',
        icon: faCamera,
    },
    {
        title: 'Bikes',
        to: '/',
        icon: faMotorcycle,
    },
    {
        title: 'Automotive',
        to: '/',
        icon: faCar,
    },
];

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('wrapper')}>
                <div className={cx('top-header')}>
                    <Link to="/">
                        <Image
                            className={cx('logo')}
                            src={images.logo}
                            alt="bazaar"
                        />
                    </Link>
                    <Search />
                    <div className={cx('action')}>
                        <ModalUser />
                        <Cart />
                    </div>
                </div>
                <div className={cx('sub-header')}>
                    <Category data={CATE_LIST} />
                    <div className={cx('sub-header-right')}>
                        <Button
                            sx={{
                                minWidth: '120px',
                                height: '36px',
                                backgroundColor: '#f6f9fc',
                                border: 'none',
                                color: '#7d879c',
                                fontSize: '1.4rem',
                                textTransform: 'capitalize',
                            }}
                            className={cx('all-shop-btn')}
                        >
                            All Shops
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
