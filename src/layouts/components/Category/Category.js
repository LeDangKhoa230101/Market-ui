import styles from './Category.scss';

import { useState } from 'react';
import classNames from 'classnames/bind';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import PopoverCate from './PopoverCate/PopoverCate';

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
                            rotate: '90deg',
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
            <PopoverCate
                data={data}
                handleHideMenuCate={handleHideMenuCate}
                id={id}
                open={open}
                anchorEl={anchorEl}
            />
        </div>
    );
}

export default Category;
