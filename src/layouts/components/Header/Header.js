/* eslint-disable react-hooks/exhaustive-deps */
import styles from './Header.module.scss';
import images from '~/assets/image';
import ModalUser from '~/layouts/components/ModalUser/ModalUser';
import Cart from '~/layouts/components/Cart/Cart';
import { Search } from '../Search';
import Category from '~/layouts/components/Category';
import {
    laptop,
    mobile,
    camera,
    headphone,
    accessories,
    speaker,
} from '~/assets/icons/icons';

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '~/components/Image/Image';
import { Link } from 'react-router-dom';
import PopoverCate from '~/layouts/components/Category/PopoverCate/PopoverCate';

const cx = classNames.bind(styles);

const CATE_LIST = [
    {
        title: 'Laptop',
        to: '/',
        icon: laptop,
    },
    {
        title: 'Mobile Phone',
        to: '/',
        icon: mobile,
    },
    {
        title: 'Camera',
        to: '/',
        icon: camera,
    },
    {
        title: 'Headphone',
        to: '/',
        icon: headphone,
    },
    {
        title: 'Accessories',
        to: '/',
        icon: accessories,
    },
    {
        title: 'Music Speaker',
        to: '/',
        icon: speaker,
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

    // header scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 280) {
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
                    <div className={cx('top-header-right')}>
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
                                        backgroundColor:
                                            'rgba(43, 52, 69, 0.04)',
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
                        {/* Sub menu */}
                        <PopoverCate
                            data={CATE_LIST}
                            handleHideMenuCate={handleHideMenuCate}
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                        />
                        {/* Sub menu */}
                    </div>

                    {/* Search input */}
                    <Search />
                    {/* Search input */}

                    {/* action */}
                    <div className={cx('action')}>
                        <ModalUser />
                        <Cart />
                    </div>
                    {/* action */}
                </div>
            </div>
            {/* sub header */}
            <div className={cx('sub-header')}>
                <Category data={CATE_LIST} />
                <div className={cx('sub-header-right')}>
                    <Link to={'/'}>
                        <Button
                            sx={{
                                minWidth: '80px',
                                height: '36px',
                                border: 'none',
                                color: '#7d879c',
                                fontSize: '1.4rem',
                                textTransform: 'capitalize',
                                marginLeft: '12px',
                            }}
                            className={cx('all-shop-btn')}
                        >
                            Home
                        </Button>
                    </Link>
                    <Button
                        sx={{
                            minWidth: '80px',
                            height: '36px',
                            border: 'none',
                            color: '#7d879c',
                            fontSize: '1.4rem',
                            textTransform: 'capitalize',
                            marginLeft: '12px',
                        }}
                        className={cx('all-shop-btn')}
                    >
                        Phones
                    </Button>
                    <Button
                        sx={{
                            minWidth: '80px',
                            height: '36px',
                            border: 'none',
                            color: '#7d879c',
                            fontSize: '1.4rem',
                            textTransform: 'capitalize',
                            marginLeft: '12px',
                        }}
                        className={cx('all-shop-btn')}
                    >
                        Laptops
                    </Button>
                    <Link to={'/all-shops'}>
                        <Button
                            sx={{
                                minWidth: '80px',
                                height: '36px',
                                border: 'none',
                                color: '#7d879c',
                                fontSize: '1.4rem',
                                textTransform: 'capitalize',
                                marginLeft: '12px',
                            }}
                            className={cx('all-shop-btn')}
                        >
                            All Shops
                        </Button>
                    </Link>
                </div>
            </div>
            {/* sub header */}
        </div>
    );
}

export default Header;
