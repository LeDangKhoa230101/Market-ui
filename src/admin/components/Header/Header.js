import styles from './Header.module.scss';

import classNames from 'classnames/bind';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [anchorEl, setAnchorEl] = useState(false);

    const open = Boolean(anchorEl);

    const handleShowMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={cx('header')}>
            <div className={cx('header-left')}>
                <h3>ADMIN</h3>
            </div>
            <div className={cx('header-right')}>
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
                <Avatar
                    onClick={handleShowMenu}
                    alt="Remy Sharp"
                    sx={{
                        cursor: 'pointer',
                    }}
                    src="https://i.pinimg.com/564x/54/15/f0/5415f07a18442ae788afbb6a74dabfa6.jpg"
                />
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{
                        '& .MuiPaper-root': {
                            width: '200px',
                        },
                    }}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5, //margin-top
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                            },

                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 24,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                >
                    <div className={cx('modal-header')}>
                        <span>Gage Paquette</span>
                        <p>Admin</p>
                    </div>
                    <div className={cx('hr')}></div>
                    <MenuItem
                        sx={{
                            height: '37px',
                            fontSize: '1.5rem',
                        }}
                        onClick={handleClose}
                    >
                        Profile
                    </MenuItem>
                    <MenuItem
                        sx={{
                            height: '37px',
                            fontSize: '1.5rem',
                        }}
                        onClick={handleClose}
                    >
                        Settings
                    </MenuItem>
                    <div className={cx('hr')}></div>
                    <MenuItem
                        sx={{
                            height: '37px',
                            fontSize: '1.5rem',
                        }}
                        onClick={handleClose}
                    >
                        Logout
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Header;
