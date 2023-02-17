import styles from './UserPayment.module.scss';

import classNames from 'classnames/bind';

import { Button, Fade, Grid, Modal, TextField } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

const cx = classNames.bind(styles);

function UserPaymentAdd({ showModalAdd, handleHideModalAdd }) {
    return (
        <Modal open={showModalAdd} onClose={handleHideModalAdd}>
            <Fade in={showModalAdd}>
                <div className={cx('modal-container')}>
                    <div className={cx('modal-body')}>
                        <PaymentIcon className={cx('icon')} />
                        <span className={cx('heading')}>
                            Add New Payment Methods
                        </span>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Name on Card"
                                sx={{
                                    marginBottom: '20px',
                                    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                        {
                                            color: 'var(--primary-color)',
                                        },
                                    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                        {
                                            top: '-7px',
                                        },
                                    '& .MuiFormLabel-root': {
                                        fontSize: '1.4rem',
                                    },
                                    '& .MuiInputBase-root': {
                                        fontSize: '1.4rem',
                                    },
                                    '& .MuiInputBase-root .MuiInputBase-input':
                                        {
                                            padding: '8.5px 14px',
                                        },
                                    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                        {
                                            borderColor: 'var(--primary-color)',
                                        },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Exp. Date"
                                sx={{
                                    marginBottom: '20px',
                                    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                        {
                                            color: 'var(--primary-color)',
                                        },
                                    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                        {
                                            top: '-7px',
                                        },
                                    '& .MuiFormLabel-root': {
                                        fontSize: '1.4rem',
                                    },
                                    '& .MuiInputBase-root': {
                                        fontSize: '1.4rem',
                                    },
                                    '& .MuiInputBase-root .MuiInputBase-input':
                                        {
                                            padding: '8.5px 14px',
                                        },
                                    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                        {
                                            borderColor: 'var(--primary-color)',
                                        },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Card Number"
                                sx={{
                                    marginBottom: '20px',
                                    '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                        {
                                            color: 'var(--primary-color)',
                                        },
                                    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':
                                        {
                                            top: '-7px',
                                        },
                                    '& .MuiFormLabel-root': {
                                        fontSize: '1.4rem',
                                    },
                                    '& .MuiInputBase-root': {
                                        fontSize: '1.4rem',
                                    },
                                    '& .MuiInputBase-root .MuiInputBase-input':
                                        {
                                            padding: '8.5px 14px',
                                        },
                                    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                        {
                                            borderColor: 'var(--primary-color)',
                                        },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        sx={{
                            minWidth: '60px',
                            color: 'var(--white)',
                            fontSize: '1.4rem',
                            fontWeight: '600',
                            padding: '6px 24px',
                            marginTop: '10px',
                            backgroundColor: 'var(--primary-color)',
                            textTransform: 'capitalize',

                            '&:hover': {
                                backgroundColor: 'var(--primary-color)',
                                opacity: '0.9',
                            },
                        }}
                    >
                        Add New
                    </Button>
                </div>
            </Fade>
        </Modal>
    );
}

export default UserPaymentAdd;
