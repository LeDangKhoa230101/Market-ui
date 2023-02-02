import styles from './SearchHeader.module.scss';

import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';

const cx = classNames.bind(styles);

function Header() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={cx('header')}>
            <div className={cx('header-left')}>
                <span>Searching for “mobile phone”</span>
                <p>48 results found</p>
            </div>
            <div className={cx('header-right')}>
                <div className={cx('select')}>
                    <span>Short by:</span>
                    <FormControl
                        size="small"
                        sx={{
                            minWidth: 150,
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'var(--primary-color) !important',
                            },
                        }}
                    >
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            sx={{
                                minWidth: '150px',
                                fontSize: '1.4rem',
                                '& .MuiSvgIcon-root': {
                                    width: '24px',
                                    height: '24px',
                                    top: '7px',
                                },
                            }}
                        >
                            <MenuItem
                                value=""
                                sx={{
                                    fontSize: '1.4rem',
                                }}
                            >
                                Relevance
                            </MenuItem>
                            <MenuItem
                                value={10}
                                sx={{
                                    fontSize: '1.4rem',
                                }}
                            >
                                Date
                            </MenuItem>
                            <MenuItem
                                value={20}
                                sx={{
                                    fontSize: '1.4rem',
                                }}
                            >
                                Price Low to High
                            </MenuItem>
                            <MenuItem
                                value={30}
                                sx={{
                                    fontSize: '1.4rem',
                                }}
                            >
                                Price High to Low
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={cx('view')}>
                    <span>View:</span>
                    <Button
                        sx={{
                            minWidth: '36px',
                            height: '36px',
                            borderRadius: '999px',
                            color: 'var(--primary-color)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        }}
                    >
                        <AppsIcon
                            sx={{
                                width: '20px',
                                height: '20px',
                            }}
                        />
                    </Button>
                    <Button
                        sx={{
                            minWidth: '36px',
                            height: '36px',
                            borderRadius: '999px',
                            color: 'rgba(0, 0, 0, 0.54)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        }}
                    >
                        <ListIcon
                            sx={{
                                width: '20px',
                                height: '20px',
                            }}
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
