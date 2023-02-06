import styles from './UserPayment.module.scss';

import classNames from 'classnames/bind';
import PaymentIcon from '@mui/icons-material/Payment';
import { Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { useState } from 'react';

const cx = classNames.bind(styles);

function UserPayment() {
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);

    const handleShowModalAdd = () => {
        setShowModalAdd(true);
    };

    const handleHideModalAdd = () => {
        setShowModalAdd(false);
    };

    const handleShowModalEdit = () => {
        setShowModalEdit(true);
    };

    const handleHideModalEdit = () => {
        setShowModalEdit(false);
    };

    return (
        <div className={cx('container')}>
            {/* Header */}
            <div className={cx('header')}>
                <div>
                    <PaymentIcon className={cx('icon')} />
                    <span className={cx('title')}>Payment Methods</span>
                </div>
                <Button
                    onClick={handleShowModalAdd}
                    sx={{
                        minWidth: '138px',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        padding: '6px 32px',
                        color: 'var(--primary-color)',
                        backgroundColor: 'rgb(252, 233, 236)',
                        textTransform: 'capitalize',

                        '&:hover': {
                            backgroundColor: 'rgba(210, 63, 87, 0.04)',
                        },
                    }}
                >
                    Add New Payment Method
                </Button>
            </div>
            {/* Header */}

            {/* Modal Add Payment Methods */}
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
                                                borderColor:
                                                    'var(--primary-color)',
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
                                                borderColor:
                                                    'var(--primary-color)',
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
                                                borderColor:
                                                    'var(--primary-color)',
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
            {/* Modal Add Payment Methods */}

            {/* Modal Edit Payment Methods */}
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
                            <Grid item xs={6}>
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
                                                borderColor:
                                                    'var(--primary-color)',
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
                                                borderColor:
                                                    'var(--primary-color)',
                                            },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
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
                                                borderColor:
                                                    'var(--primary-color)',
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
            {/* Modal Edit Payment Methods */}

            {/* content */}
            <Grid
                container
                sx={{
                    marginTop: '20px',
                }}
            >
                <Grid item xs={12}>
                    <div className={cx('payment-item')}>
                        <div className={cx('name')}>
                            <span>Ralf Edward</span>
                        </div>
                        <div>
                            <span>123829374638273</span>
                        </div>
                        <div className={cx('day-exp')}>
                            <span>08 / 2022</span>
                        </div>
                        <div className={cx('action')}>
                            <Link
                                onClick={handleShowModalEdit}
                                className={cx('action-btn')}
                            >
                                <CreateIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#0000008a',
                                        marginBottom: '4px',
                                    }}
                                />
                            </Link>
                            <Link className={cx('action-btn')}>
                                <DeleteForeverIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#0000008a',
                                        marginBottom: '4px',
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
            {/* content */}
        </div>
    );
}

export default UserPayment;
