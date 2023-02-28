import styles from './Header.module.scss';

import classNames from 'classnames/bind';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Image from '~/components/Image/Image';

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
                    </div>
                    <div className={cx('header-right')}>
                        {/* Search */}
                        <div className={cx('header-search')}>
                            <SearchIcon
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                    color: '#AEB4BE',
                                }}
                            />
                            <input
                                className={cx('header-search-input')}
                                type="text"
                                placeholder="Search anything..."
                            />
                        </div>
                        {/* Search */}
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
                                                className={cx('menu-list-item')}
                                            >
                                                <Link
                                                    className={cx(
                                                        'menu-list-link',
                                                    )}
                                                >
                                                    <Button
                                                        sx={{
                                                            minWidth: '100%',
                                                            height: '100%',
                                                            padding: '8px 16px',
                                                            fontSize: '1.4rem',
                                                            textTransform:
                                                                'capitalize',
                                                            color: 'var(--text-color)',
                                                            justifyContent:
                                                                'flex-start',
                                                            borderRadius: '0',
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
