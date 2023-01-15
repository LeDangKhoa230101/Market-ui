import styles from './PopoverCate.scss';

import classNames from 'classnames/bind';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <FontAwesomeIcon
                            className={cx('cate-item-icon')}
                            icon={item.icon}
                        />
                        <span>{item.title}</span>
                    </Button>
                ))}
            </Box>
        </Popover>
    );
}

export default PopoverCate;
