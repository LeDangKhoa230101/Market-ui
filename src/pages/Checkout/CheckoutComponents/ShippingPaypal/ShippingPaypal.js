import styles from './ShippingPaypal.module.scss';

import classNames from 'classnames/bind';

import { Grid, TextField } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { useState } from 'react';

const cx = classNames.bind(styles);

function ShippingPaypal() {
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
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            label="Full Name"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                marginBottom: '16px',

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
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                marginBottom: '16px',

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
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                marginBottom: '16px',

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
                        <TextField
                            id="outlined-basic"
                            label="Delivery Address"
                            variant="outlined"
                            sx={{
                                width: '100%',
                                marginBottom: '16px',

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
                                spacing={6}
                            >
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Card Number"
                                        variant="outlined"
                                        sx={{
                                            width: '100%',
                                            marginBottom: '16px',

                                            '& .MuiFormLabel-root': {
                                                fontSize: '1.4rem',
                                                top: '-7px',
                                            },

                                            '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                                {
                                                    color: 'var(--primary-color)',
                                                },

                                            '& .MuiInputBase-root .MuiInputBase-input':
                                                {
                                                    fontSize: '1.4rem',
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
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Exp Date"
                                        variant="outlined"
                                        sx={{
                                            width: '100%',
                                            marginBottom: '16px',

                                            '& .MuiFormLabel-root': {
                                                fontSize: '1.4rem',
                                                top: '-7px',
                                            },

                                            '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                                {
                                                    color: 'var(--primary-color)',
                                                },

                                            '& .MuiInputBase-root .MuiInputBase-input':
                                                {
                                                    fontSize: '1.4rem',
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
                                id="outlined-basic"
                                label="Paypal Email"
                                variant="outlined"
                                sx={{
                                    display: showPaypal,
                                    width: '100%',
                                    marginBottom: '16px',
                                    marginTop: '14px',

                                    '& .MuiFormLabel-root': {
                                        fontSize: '1.4rem',
                                        top: '-7px',
                                    },

                                    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                        {
                                            color: 'var(--primary-color)',
                                        },

                                    '& .MuiInputBase-root .MuiInputBase-input':
                                        {
                                            fontSize: '1.4rem',
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
