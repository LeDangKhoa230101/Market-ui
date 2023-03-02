import styles from './Header.module.scss';
import Image from '~/components/Image/Image';
import Sidebar from '~/admin/components/Sidebar';
import Search from '~/admin/components/Search';

import classNames from 'classnames/bind';
import { Button, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

const MENU = [
    {
        title: 'Profile',
    },
    {
        title: 'Settings',
    },
    {
        title: 'Logout',
    },
];

function Header({ leftHeader }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const currentUser = false;

    const [showSidebar, setShowSidebar] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleHideSidebar = () => {
        setShowSidebar(false);
    };

    const handleHideSearch = () => {
        setShowSearch(false);
    };

    return (
        <div
            className={cx('header')}
            style={{
                left: leftHeader,
            }}
        >
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header-left')}>
                        <h3>ADMIN</h3>
                        {/* Menu response */}
                        {isTabletAndMobile && (
                            <Button
                                onClick={() => setShowSidebar(true)}
                                sx={{
                                    minWidth: '40px',
                                    height: '40px',
                                    color: '#4e97fd',
                                }}
                            >
                                <MenuIcon
                                    sx={{
                                        minWidth: '24px',
                                        height: '24px',
                                    }}
                                />
                            </Button>
                        )}
                        <Drawer open={showSidebar} onClose={handleHideSidebar}>
                            <Sidebar handleHideSidebar={handleHideSidebar} />
                        </Drawer>
                    </div>

                    <div className={cx('header-right')}>
                        {/* Search */}
                        {isDesktop ? (
                            <Search />
                        ) : isTabletAndMobile ? (
                            <Button
                                onClick={() => setShowSearch(true)}
                                sx={{
                                    minWidth: '40px',
                                    height: '40px',
                                    borderRadius: '999px',
                                    color: '#7d879c',
                                    backgroundColor: '#f6f9fc',
                                    marginRight: '8px',

                                    '&:hover': {
                                        backgroundColor: '#f6f9fc',
                                    },
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                            </Button>
                        ) : null}
                        <Drawer
                            open={showSearch}
                            onClose={handleHideSearch}
                            anchor="top"
                            sx={{
                                '& .MuiPaper-root': {
                                    height: '100%',
                                    padding: '24px',
                                    alignItems: 'flex-end',
                                },
                            }}
                        >
                            <Button
                                onClick={handleHideSearch}
                                sx={{
                                    minWidth: '40px',
                                    height: '40px',
                                    color: '#7d879c',
                                    backgroundColor: 'transparent',
                                    marginBottom: '10px',

                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                <CloseIcon
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                            </Button>
                            <Search />
                        </Drawer>
                        {/* Search */}

                        {/* User */}
                        {currentUser ? (
                            <div className={cx('header-right-body')}>
                                <Image
                                    className={cx('header-avatar')}
                                    src="https://i.pinimg.com/564x/54/15/f0/5415f07a18442ae788afbb6a74dabfa6.jpg"
                                />
                                <div className={cx('menu')}>
                                    <div className={cx('modal-header')}>
                                        <span>Gage Paquette</span>
                                        <p>Admin</p>
                                    </div>
                                    <div className={cx('hr')}></div>
                                    <ul className={cx('menu-list')}>
                                        {MENU.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className={cx(
                                                        'menu-list-item',
                                                    )}
                                                >
                                                    <Link
                                                        className={cx(
                                                            'menu-list-link',
                                                        )}
                                                    >
                                                        <Button
                                                            sx={{
                                                                minWidth:
                                                                    '100%',
                                                                height: '100%',
                                                                padding:
                                                                    '8px 16px',
                                                                fontSize:
                                                                    '1.4rem',
                                                                textTransform:
                                                                    'capitalize',
                                                                color: 'var(--text-color)',
                                                                justifyContent:
                                                                    'flex-start',
                                                                borderRadius:
                                                                    '0',
                                                                '&:hover': {
                                                                    backgroundColor:
                                                                        'rgb(243, 245, 249)',
                                                                },
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Button>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <Link to="/admin/signin">
                                <Button
                                    sx={{
                                        minWidth: '40px',
                                        height: '40px',
                                        borderRadius: '999px',
                                        color: '#7d879c',
                                        backgroundColor: '#f6f9fc',

                                        '&:hover': {
                                            backgroundColor: '#f6f9fc',
                                        },
                                    }}
                                >
                                    <PersonIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                        }}
                                    />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
