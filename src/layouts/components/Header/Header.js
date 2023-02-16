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
import PopoverCate from '~/layouts/components/Category/PopoverCate/PopoverCate';

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '~/components/Image/Image';
import { Link } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

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
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const [anchorEl, setAnchorEl] = useState(null);

    const [classHeader, setClassHeader] = useState('');
    const [showSubCate, setShowSubCate] = useState('none');

    // handle drawer menu tablet mobile
    const [showDrawerMenu, setShowDrawerMenu] = useState(false);

    // handle drawer search tablet mobile
    const [showDrawerSearch, setShowDrawerSearch] = useState(false);

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
    }, [classHeader, showSubCate]);

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
                    {/* Drawer menu responsive */}
                    <Drawer
                        open={showDrawerMenu}
                        onClose={() => setShowDrawerMenu(false)}
                    >
                        <div className={cx('drawer-menu')}>
                            <div className={cx('drawer-close-btn')}>
                                <Button
                                    onClick={() => setShowDrawerMenu(false)}
                                    sx={{
                                        minWidth: '40px',
                                        height: '40px',
                                        color: '#7d879c',
                                    }}
                                >
                                    <CloseIcon
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                </Button>
                            </div>
                            <ul className={cx('drawer-menu-list')}>
                                <li>
                                    <Link>
                                        <Button className={cx('drawer-item')}>
                                            Laptop
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <Button className={cx('drawer-item')}>
                                            Mobile
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/all-shops'}
                                        onClick={() => setShowDrawerMenu(false)}
                                    >
                                        <Button className={cx('drawer-item')}>
                                            All shops
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Drawer>
                    {/* Drawer menu responsive */}

                    {/* Menu reponsive */}
                    {isTabletAndMobile && (
                        <div className={cx('menu-res')}>
                            <button
                                onClick={() => setShowDrawerMenu(true)}
                                className={cx('menu-res-btn')}
                            >
                                <MenuIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#7d879c',
                                    }}
                                />
                            </button>
                        </div>
                    )}
                    {/* Menu reponsive */}

                    <div className={cx('top-header-right')}>
                        {isMobile ? null : (
                            <Link to="/">
                                <Image
                                    className={cx('logo')}
                                    src={images.logo}
                                    alt="bazaar"
                                />
                            </Link>
                        )}
                        {isMobile && (
                            <Link to="/">
                                <Image
                                    className={cx('logo')}
                                    src={images.logotabletmobile}
                                    alt="bazaar"
                                />
                            </Link>
                        )}
                        {/* Sub menu */}
                        {isDesktop && (
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
                        )}

                        {isDesktop && (
                            <PopoverCate
                                data={CATE_LIST}
                                handleHideMenuCate={handleHideMenuCate}
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                            />
                        )}
                        {/* Sub menu */}
                    </div>

                    {/* Search input */}
                    <Search className={cx('search-respon')} />
                    {/* Search input */}

                    {/* Drawer search */}
                    <Drawer open={showDrawerSearch} anchor="top">
                        <div className={cx('drawer-search')}>
                            <div className={cx('drawer-close-btn')}>
                                <Button
                                    onClick={() => setShowDrawerSearch(false)}
                                    sx={{
                                        minWidth: '40px',
                                        height: '40px',
                                        color: '#7d879c',
                                    }}
                                >
                                    <CloseIcon
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                </Button>
                            </div>
                            <Search className={cx('search-container-res')} />
                        </div>
                    </Drawer>
                    {/* Drawer search */}

                    {/* action */}
                    <div className={cx('action')}>
                        {isTablet && (
                            <Button
                                onClick={() => setShowDrawerSearch(true)}
                                sx={{
                                    minWidth: '38px',
                                    height: '38px',
                                    color: '#7d879c',
                                    borderRadius: '999px',
                                    marginRight: '10px',
                                    backgroundColor: '#f3f5f9',
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                />
                            </Button>
                        )}
                        {isMobile && (
                            <Button
                                onClick={() => setShowDrawerSearch(true)}
                                sx={{
                                    minWidth: '36px',
                                    height: '36px',
                                    color: '#7d879c',
                                    borderRadius: '999px',
                                    marginRight: '10px',
                                    backgroundColor: '#f3f5f9',
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                />
                            </Button>
                        )}
                        <ModalUser />
                        <Cart />
                    </div>
                    {/* action */}
                </div>
            </div>
            {/* sub header */}
            {isDesktop && (
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
            )}
            {/* sub header */}
        </div>
    );
}

export default Header;
