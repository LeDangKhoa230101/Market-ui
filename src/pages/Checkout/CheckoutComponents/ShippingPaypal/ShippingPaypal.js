import styles from './ShippingPaypal.module.scss';

import classNames from 'classnames/bind';

import { Grid, TextField } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function ShippingPaypal() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const [showPayCard, setShowPayCard] = useState('none');
    const [showPaypal, setShowPaypal] = useState('none');

    const handleShowPayCard = () => {
        setShowPayCard('flex');
        setShowPaypal('none');
    };

    const handleShowPaypal = () => {
        setShowPaypal('flex');
        setShowPayCard('none');
    };

    const handleHide = () => {
        setShowPayCard('none');
        setShowPaypal('none');
    };

    return (
        <>
            <div className={cx('content')}>
                <h3>Shipping Address</h3>
                <Grid
                    container
                    spacing={isDesktop ? 6 : isTabletAndMobile ? 0 : null}
                >
                    <Grid item xs={isDesktop ? 6 : isMobile ? 12 : null}>
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                marginBottom: '16px',

                                '& .MuiFormLabel-root': {
                                    fontSize: '1.4rem',
                                },
                                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                    {
                                        top: '-7px',
                                    },
                                '& .MuiInputBase-root': {
                                    fontSize: '1.4rem',
                                },

                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                    {
                                        color: 'var(--primary-color)',
                                    },

                                '& .MuiInputBase-root .MuiInputBase-input': {
                                    padding: '8.5px 14px',
                                },
                                '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: 'var(--primary-color)',
                                    },
                            }}
                        />
                        <TextField
                            label="Email Address"
                            type="email"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                marginBottom: '16px',

                                '& .MuiFormLabel-root': {
                                    fontSize: '1.4rem',
                                },
                                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                    {
                                        top: '-7px',
                                    },

                                '& .MuiInputBase-root': {
                                    fontSize: '1.4rem',
                                },
                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                    {
                                        color: 'var(--primary-color)',
                                    },

                                '& .MuiInputBase-root .MuiInputBase-input': {
                                    padding: '8.5px 14px',
                                },
                                '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: 'var(--primary-color)',
                                    },
                            }}
                        />
                    </Grid>
                    <Grid item xs={isDesktop ? 6 : isMobile ? 12 : null}>
                        <TextField
                            label="Phone Number"
                            type="tel"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                marginBottom: '16px',

                                '& .MuiFormLabel-root': {
                                    fontSize: '1.4rem',
                                },
                                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                    {
                                        top: '-7px',
                                    },

                                '& .MuiInputBase-root': {
                                    fontSize: '1.4rem',
                                },

                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                    {
                                        color: 'var(--primary-color)',
                                    },

                                '& .MuiInputBase-root .MuiInputBase-input': {
                                    padding: '8.5px 14px',
                                },
                                '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: 'var(--primary-color)',
                                    },
                            }}
                        />
                        <TextField
                            label="Delivery Address"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                marginBottom: '16px',

                                '& .MuiFormLabel-root': {
                                    fontSize: '1.4rem',
                                },
                                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                    {
                                        top: '-7px',
                                    },

                                '& .MuiInputBase-root': {
                                    fontSize: '1.4rem',
                                },

                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                    {
                                        color: 'var(--primary-color)',
                                    },

                                '& .MuiInputBase-root .MuiInputBase-input': {
                                    padding: '8.5px 14px',
                                },
                                '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: 'var(--primary-color)',
                                    },
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className={cx('content')}>
                <h3>Payment Methods</h3>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <RadioGroup>
                            <FormControlLabel
                                onClick={handleShowPayCard}
                                value="pay card"
                                control={<Radio />}
                                label="Pay with credit card"
                                sx={{
                                    '& .MuiButtonBase-root': {
                                        width: '38px',
                                        height: '38px',
                                        color: 'var(--primary-color) !important',

                                        '& .css-hyxlzm .MuiSvgIcon-root': {
                                            width: '20px',
                                            height: '20px',
                                        },
                                    },

                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                            <hr className={cx('hr')}></hr>
                            <Grid
                                sx={{
                                    display: showPayCard,
                                    marginTop: '-34px',
                                }}
                                container
                                spacing={
                                    isDesktop ? 6 : isTabletAndMobile ? 2 : null
                                }
                            >
                                <Grid
                                    item
                                    xs={
                                        isDesktop
                                            ? 6
                                            : isTabletAndMobile
                                            ? 12
                                            : null
                                    }
                                    sx={{
                                        marginTop: isDesktop
                                            ? ''
                                            : isTabletAndMobile
                                            ? '20px'
                                            : null,
                                    }}
                                >
                                    <TextField
                                        label="Card Number"
                                        variant="outlined"
                                        sx={{
                                            width: '100%',
                                            marginBottom: isDesktop
                                                ? '16px'
                                                : isTabletAndMobile
                                                ? ''
                                                : null,

                                            '& .MuiFormLabel-root': {
                                                fontSize: '1.4rem',
                                            },
                                            '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                                {
                                                    top: '-7px',
                                                },

                                            '& .MuiInputBase-root': {
                                                fontSize: '1.4rem',
                                            },

                                            '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                                {
                                                    color: 'var(--primary-color)',
                                                },

                                            '& .MuiInputBase-root .MuiInputBase-input':
                                                {
                                                    padding: '8.5px 14px',
                                                },
                                            '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                                {
                                                    borderColor:
                                                        'var(--primary-color)',
                                                },
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={
                                        isDesktop
                                            ? 6
                                            : isTabletAndMobile
                                            ? 12
                                            : null
                                    }
                                >
                                    <TextField
                                        label="Exp Date"
                                        variant="outlined"
                                        sx={{
                                            width: '100%',
                                            marginBottom: isDesktop
                                                ? '16px'
                                                : isTabletAndMobile
                                                ? ''
                                                : null,

                                            '& .MuiFormLabel-root': {
                                                fontSize: '1.4rem',
                                            },
                                            '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                                {
                                                    top: '-7px',
                                                },

                                            '& .MuiInputBase-root': {
                                                fontSize: '1.4rem',
                                            },

                                            '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                                {
                                                    color: 'var(--primary-color)',
                                                },

                                            '& .MuiInputBase-root .MuiInputBase-input':
                                                {
                                                    padding: '8.5px 14px',
                                                },
                                            '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                                {
                                                    borderColor:
                                                        'var(--primary-color)',
                                                },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <hr
                                className={cx('hr')}
                                style={{ display: showPayCard }}
                            ></hr>
                            <FormControlLabel
                                onClick={handleShowPaypal}
                                value="paypal"
                                control={<Radio />}
                                label="Pay with Paypal"
                                sx={{
                                    '& .MuiButtonBase-root': {
                                        width: '38px',
                                        height: '38px',
                                        color: 'var(--primary-color) !important',

                                        '& .css-hyxlzm .MuiSvgIcon-root': {
                                            width: '20px',
                                            height: '20px',
                                        },
                                    },

                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                            <hr className={cx('hr')}></hr>
                            <TextField
                                label="Paypal Email"
                                variant="outlined"
                                sx={{
                                    display: showPaypal,
                                    width: '100%',
                                    marginBottom: isDesktop
                                        ? '16px'
                                        : isTabletAndMobile
                                        ? ''
                                        : null,
                                    marginTop: isDesktop
                                        ? '14px'
                                        : isTabletAndMobile
                                        ? ''
                                        : null,

                                    '& .MuiFormLabel-root': {
                                        fontSize: '1.4rem',
                                    },
                                    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                        {
                                            top: '-7px',
                                        },

                                    '& .MuiInputBase-root': {
                                        fontSize: '1.4rem',
                                    },

                                    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                        {
                                            color: 'var(--primary-color)',
                                        },

                                    '& .MuiInputBase-root .MuiInputBase-input':
                                        {
                                            padding: '8.5px 14px',
                                        },
                                    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                        {
                                            borderColor: 'var(--primary-color)',
                                        },
                                }}
                            />
                            <hr
                                className={cx('hr')}
                                style={{ display: showPaypal }}
                            ></hr>
                            <FormControlLabel
                                onClick={handleHide}
                                value="delivery"
                                control={<Radio />}
                                label="Cash On Delivery"
                                sx={{
                                    '& .MuiButtonBase-root': {
                                        width: '38px',
                                        height: '38px',
                                        color: 'var(--primary-color) !important',

                                        '& .css-hyxlzm .MuiSvgIcon-root': {
                                            width: '20px',
                                            height: '20px',
                                        },
                                    },

                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                        </RadioGroup>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default ShippingPaypal;
