import styles from './SidebarCart.module.scss';

import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarCart() {
    return (
        <section className={cx('sidebar')}>
            <div className={cx('header')}>
                <span>Total:</span>
                <p>460,00 US$</p>
            </div>
            <hr className={cx('hr')}></hr>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& > :not(style)': { width: '100' },
                }}
                noValidate
            >
                <TextField
                    id="outlined-basic"
                    label="Voucher"
                    variant="outlined"
                    sx={{
                        '& .MuiFormLabel-root': {
                            fontSize: '1.4rem',
                            top: '-7px',
                        },

                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                            {
                                color: 'var(--primary-color)',
                            },

                        '& .MuiInputBase-root .MuiInputBase-input': {
                            fontSize: '1.4rem',
                            padding: '8.5px 14px',
                        },
                        '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: 'var(--primary-color)',
                            },
                    }}
                />
                <Button
                    sx={{
                        height: '37px',
                        border: '1px solid var(--primary-color)',
                        backgroundColor: 'transparent',
                        color: 'var(--primary-color)',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        marginTop: '16px',

                        '&:hover': {
                            backgroundColor: 'rgba(210, 63, 87, 0.04)',
                            border: '1px solid #D23F57',
                        },
                    }}
                >
                    Apply Voucher
                </Button>
            </Box>
            <hr className={cx('hr')}></hr>
            <Link to={'/checkout'}>
                <Button
                    sx={{
                        minWidth: '100%',
                        height: '37px',
                        backgroundColor: 'var(--primary-color)',
                        color: 'var(--white)',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        marginTop: '16px',

                        '&:hover': {
                            backgroundColor: 'var(--primary-color)',
                            opacity: '0.9',
                        },
                    }}
                >
                    Checkout Now
                </Button>
            </Link>
        </section>
    );
}

export default SidebarCart;
