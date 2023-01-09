import styles from './Category.scss';

import { useState } from 'react';
import classNames from 'classnames/bind';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Category({ data }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const [rotateIcon, setRotateIcon] = useState('');

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

    const handleShowMenuCate = (e) => {
        setAnchorEl(e.currentTarget);
        setRotateIcon('90deg');
    };

    const handleHideMenuCate = () => {
        setAnchorEl(null);
        setRotateIcon('');
    };

    const open = Boolean(anchorEl);
    const id = anchorEl ? 'simple-popover' : undefined;
    return (
        <div className={cx('category')}>
            <ThemeProvider theme={theme}>
                <Button
                    aria-describedby={id}
                    onClick={handleShowMenuCate}
                    sx={{
                        alignItems: 'center',
                        textTransform: 'none',
                        justifyContent: 'flex-start',
                        backgroundColor: '#f6f9fc',
                    }}
                    color="main"
                    className={cx('sub-cate-btn')}
                >
                    <WidgetsRoundedIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                        }}
                        className={cx('cate-icon')}
                    />
                    <span className={cx('cate-title')}>Categorys</span>
                    <ChevronRightRoundedIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                            transition: 'all 250ms ease-in-out 0s',
                            transform: `rotate(${rotateIcon})`,
                        }}
                        className={cx('cate-icon')}
                    />
                </Button>
            </ThemeProvider>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleHideMenuCate}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{ marginTop: '10px' }}
            >
                <Box
                    sx={{
                        width: '278px',
                        padding: '8px 0',
                    }}
                >
                    {data.map((item, index) => (
                        <Button
                            key={index}
                            className={cx('cate-item')}
                            sx={{
                                padding: '0 16px',
                                fontSize: '1.5rem',
                                color: '#2b3445',
                                textTransform: 'capitalize',
                                justifyContent: 'flex-start',
                            }}
                            onClick={handleHideMenuCate}
                        >
                            <FontAwesomeIcon
                                className={cx('cate-item-icon')}
                                icon={item.icon}
                            />
                            <span>{item.title}</span>
                        </Button>
                    ))}
                </Box>
            </Popover>
        </div>
    );
}

export default Category;
