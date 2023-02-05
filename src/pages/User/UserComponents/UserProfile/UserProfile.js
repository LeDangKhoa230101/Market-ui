import styles from './UserProfile.module.scss';

import classNames from 'classnames/bind';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Button, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserProfile() {
    const [showView, setShowView] = useState('block');
    const [showEdit, setShowEdit] = useState('none');

    const handleShowEdit = () => {
        setShowView('none');
        setShowEdit('block');
    };

    const handleShowView = () => {
        setShowEdit('none');
        setShowView('block');
    };

    return (
        <div className={cx('container')}>
            {/* Header */}
            <div className={cx('header')}>
                <div>
                    <PersonRoundedIcon className={cx('icon')} />
                    <span className={cx('title')}>My Profile</span>
                </div>
                <Button
                    onClick={handleShowEdit}
                    sx={{
                        display: showView,
                        minWidth: '138px',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        color: 'var(--primary-color)',
                        backgroundColor: 'rgb(252, 233, 236)',
                        textTransform: 'capitalize',

                        '&:hover': {
                            backgroundColor: 'rgba(210, 63, 87, 0.04)',
                        },
                    }}
                >
                    Edit Profile
                </Button>
                <Button
                    onClick={handleShowView}
                    sx={{
                        display: showEdit,
                        minWidth: '138px',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        color: 'var(--primary-color)',
                        backgroundColor: 'rgb(252, 233, 236)',
                        textTransform: 'capitalize',

                        '&:hover': {
                            backgroundColor: 'rgba(210, 63, 87, 0.04)',
                        },
                    }}
                >
                    Back To Profile
                </Button>
            </div>
            {/* Header */}

            {/* My Profile */}
            <div
                style={{
                    display: showView,
                }}
            >
                {/* infomation */}
                <Grid
                    container
                    spacing={3}
                    sx={{
                        padding: '20px 0',
                    }}
                >
                    <Grid item xs={6}>
                        <div className={cx('info-body')}>
                            <div>
                                <Avatar
                                    className={cx('avatar')}
                                    alt="Remy Sharp"
                                    src="https://i.pinimg.com/564x/6d/9e/11/6d9e111198f14ca72c0fd88c07988696.jpg"
                                />
                                <div className={cx('body')}>
                                    <span>Nick Dubuque</span>
                                    <p>1/23/2001</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} container spacing={3}>
                        <Grid item xs={3}>
                            <div className={cx('box')}>
                                <span>16</span>
                                <p>All Orders</p>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={cx('box')}>
                                <span>02</span>
                                <p>Awaiting Payments</p>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={cx('box')}>
                                <span>00</span>
                                <p>Awaiting Shipment</p>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={cx('box')}>
                                <span>01</span>
                                <p>Awaiting Delivery</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                {/* infomation */}
                {/* view info */}
                <Grid container className={cx('view-info')}>
                    <Grid item xs={2}>
                        <div className={cx('view-body')}>
                            <span>First Name</span>
                            <p>Nick</p>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={cx('view-body')}>
                            <span>Last Name</span>
                            <p>DuBuque</p>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={cx('view-body')}>
                            <span>Email</span>
                            <p>Jayden.Gislason78@gmail.com</p>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={cx('view-body')}>
                            <span>Phone</span>
                            <p>0359118433</p>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={cx('view-body')}>
                            <span>Birth date</span>
                            <p>26 Apr, 1996</p>
                        </div>
                    </Grid>
                </Grid>
                {/* view info */}
            </div>
            {/* My Profile */}

            {/* Edit Profile */}
            <Grid
                container
                sx={{
                    display: showEdit,
                }}
            >
                <Grid item xs={12}>
                    <div className={cx('edit-section')}>
                        <Avatar
                            className={cx('avatar')}
                            alt="Remy Sharp"
                            src="https://i.pinimg.com/564x/0b/f5/67/0bf5677bb1b80faeeb8d288f5f7b5b24.jpg"
                        />
                        <label
                            className={cx('camera-icon')}
                            htmlFor="profile-image"
                        >
                            <CameraEnhanceIcon
                                sx={{
                                    width: '36px',
                                    height: '36px',
                                    padding: '8px',
                                    borderRadius: '999px',
                                    backgroundColor: '#e3e9ef',
                                }}
                            />
                        </label>
                        <input
                            className={cx('profile-image')}
                            id="profile-image"
                            type="file"
                            accept=".jpg,.jpeg,.png"
                        />
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                marginTop: '-6px',
                            }}
                        >
                            <Grid item xs={6}>
                                <TextField
                                    label="First Name"
                                    defaultValue="Nick"
                                    fullWidth
                                    margin="normal"
                                    sx={{
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                            {
                                                color: 'var(--primary-color)',
                                            },
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':
                                            {
                                                fontSize: '1.4rem',
                                                color: '#373f50',
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
                                    label="Email"
                                    defaultValue="Jayden.Gislason78@gmail.com"
                                    fullWidth
                                    margin="normal"
                                    sx={{
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                            {
                                                color: 'var(--primary-color)',
                                            },
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':
                                            {
                                                fontSize: '1.4rem',
                                                color: '#373f50',
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
                                    label="Birth Date"
                                    fullWidth
                                    margin="normal"
                                    defaultValue="23/1/2001"
                                    sx={{
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                            {
                                                color: 'var(--primary-color)',
                                            },
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':
                                            {
                                                fontSize: '1.4rem',
                                                color: '#373f50',
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
                                    label="Last Name"
                                    defaultValue="DuBuque"
                                    fullWidth
                                    margin="normal"
                                    sx={{
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                            {
                                                color: 'var(--primary-color)',
                                            },
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':
                                            {
                                                fontSize: '1.4rem',
                                                color: '#373f50',
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
                                    label="Phone"
                                    defaultValue="0359118433"
                                    fullWidth
                                    margin="normal"
                                    sx={{
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                            {
                                                color: 'var(--primary-color)',
                                            },
                                        '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root':
                                            {
                                                fontSize: '1.4rem',
                                                color: '#373f50',
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

                            <Button
                                sx={{
                                    fontSize: '1.4rem',
                                    color: 'var(--white)',
                                    padding: '6px 16px',
                                    margin: '30px 0 0 24px',
                                    textTransform: 'capitalize',
                                    backgroundColor: 'var(--primary-color)',

                                    '&:hover': {
                                        backgroundColor: 'var(--primary-color)',
                                        opacity: '0.9',
                                    },
                                }}
                            >
                                Save Changes
                            </Button>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            {/* Edit Profile */}
        </div>
    );
}

export default UserProfile;
