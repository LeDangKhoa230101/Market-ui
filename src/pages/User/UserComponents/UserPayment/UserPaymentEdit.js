import styles from './UserPayment.module.scss';

import classNames from 'classnames/bind';

import { Button, Fade, Grid, Modal, TextField } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function UserPaymentEdit({ showModalEdit, handleHideModalEdit }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    return (
        <Modal open={showModalEdit} onClose={handleHideModalEdit}>
            <Fade in={showModalEdit}>
                <div className={cx('modal-container')}>
                    <div className={cx('modal-body')}>
                        <PaymentIcon className={cx('icon')} />
                        <span className={cx('heading')}>
                            Edit Payment Methods
                        </span>
                    </div>
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 6
                                    : isTablet
                                    ? 6
                                    : isMobile
                                    ? 12
                                    : null
                            }
                        >
                            <TextField
                                fullWidth
                                label="Name on Card"
                                defaultValue="Office"
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
                                defaultValue="2/2000"
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
                        <Grid
                            sx={{
                                marginTop: isMobile && '-14px',
                            }}
                            item
                            xs={
                                isDesktop
                                    ? 6
                                    : isTablet
                                    ? 6
                                    : isMobile
                                    ? 12
                                    : null
                            }
                        >
                            <TextField
                                fullWidth
                                label="Card Numver"
                                defaultValue="887209237638472"
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
                        Save Changes
                    </Button>
                </div>
            </Fade>
        </Modal>
    );
}

export default UserPaymentEdit;
