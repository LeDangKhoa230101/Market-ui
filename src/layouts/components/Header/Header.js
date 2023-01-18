/* eslint-disable react-hooks/exhaustive-deps */
import styles from './Header.module.scss';
import images from '~/assets/image';
import ModalUser from '~/layouts/components/ModalUser/ModalUser';
import Cart from '~/layouts/components/Cart/Cart';
import { Search } from '../Search';
import Category from '~/layouts/components/Category';

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import PopoverCate from '~/layouts/components/Category/PopoverCate/PopoverCate';

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
    const [anchorEl, setAnchorEl] = useState(null);

    const [classHeader, setClassHeader] = useState('');
    const [showSubCate, setShowSubCate] = useState('none');

    // custom color btn category
    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) =>
        augmentColor({ color: { main: mainColor } });

    const theme = createTheme({
        palette: {
            main: createColor('#7d879c'),
        },
    });

    let scroll = 280;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= scroll) {
                setClassHeader('sticky');
                setShowSubCate('block');
            } else {
                setClassHeader('');
                setShowSubCate('none');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleShowMenuCate = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleHideMenuCate = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = anchorEl ? 'simple-popover' : undefined;

    return (
        <div className={cx('header', classHeader)}>
            <div className={cx('wrapper')}>
                <div className={cx('top-header')}>
                    <Link to="/">
                        <Image
                            className={cx('logo')}
                            src={images.logo}
                            alt="bazaar"
                        />
                    </Link>
                    {/* Sub menu */}
                    <ThemeProvider theme={theme}>
                        <Button
                            aria-describedby={id}
                            onClick={handleShowMenuCate}
                            sx={{
                                height: '32px',
                                color: '#7d879c',
                                marginLeft: '16px',
                                display: showSubCate,

                                '&:hover': {
                                    backgroundColor: 'rgba(43, 52, 69, 0.04)',
                                },
                            }}
                        >
                            <WidgetsRoundedIcon
                                sx={{
                                    width: '20px',
                                    height: '20px',
                                    rotate: '90deg',
                                }}
                            />
                            <ExpandMoreIcon
                                sx={{
                                    width: '20px',
                                    height: '20px',
                                }}
                            />
                        </Button>
                    </ThemeProvider>
                    <PopoverCate
                        data={CATE_LIST}
                        handleHideMenuCate={handleHideMenuCate}
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                    />
                    {/* Sub menu */}
                    <Search />
                    <div className={cx('action')}>
                        <ModalUser />
                        <Cart />
                    </div>
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
    );
}

export default Header;
