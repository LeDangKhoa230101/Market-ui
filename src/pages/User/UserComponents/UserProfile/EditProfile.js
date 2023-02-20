import styles from './UserProfile.module.scss';

import classNames from 'classnames/bind';

import { Avatar, Button, Grid, TextField } from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function EditProfile({ showEdit }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    return (
        <Grid
            container
            sx={{
                display: showEdit,
            }}
        >
            <Grid item xs={12}>
                <div className={cx('edit-section')}>
                    {/* Avatar */}
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
                    {/* Avatar */}

                    {/* Content */}
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            marginTop: '-6px',
                        }}
                    >
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
                                            borderColor: 'var(--primary-color)',
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
                                            borderColor: 'var(--primary-color)',
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
                                            borderColor: 'var(--primary-color)',
                                        },
                                }}
                            />
                        </Grid>
                        <Grid
                            sx={{
                                marginTop: isMobile && '-20px',
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
                                            borderColor: 'var(--primary-color)',
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
                                            borderColor: 'var(--primary-color)',
                                        },
                                }}
                            />
                        </Grid>

                        <Button
                            sx={{
                                fontSize: '1.4rem',
                                color: 'var(--white)',
                                padding: '6px 16px',
                                margin: isDesktop
                                    ? '30px 0 0 24px'
                                    : isTablet
                                    ? '30px 0 0 24px'
                                    : isMobile
                                    ? '30px 0 0 24px'
                                    : null,
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
                    {/* Content */}
                </div>
            </Grid>
        </Grid>
    );
}

export default EditProfile;
