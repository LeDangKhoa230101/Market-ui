import styles from './PopoverCate.module.scss';

import classNames from 'classnames/bind';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const cx = classNames.bind(styles);

function PopoverCate({ data, handleHideMenuCate, id, open, anchorEl }) {
    return (
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
                        <span className={cx('cate-item-icon')}>
                            {item.icon}
                        </span>
                        <span className={cx('title')}>{item.title}</span>
                    </Button>
                ))}
            </Box>
        </Popover>
    );
}

export default PopoverCate;
