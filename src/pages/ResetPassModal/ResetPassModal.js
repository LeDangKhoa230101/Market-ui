import styles from './ResetPassModal.module.scss';

import classNames from 'classnames/bind';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ResetPassModal() {
    return (
        <Box className={cx('wrapper')}>
            <div className={cx('modal_user')}>
                <Box className={cx('modal_user-container')}>
                    <h1 className={cx('modal_user-heading')}>
                        Reset your password
                    </h1>
                    <Form>
                        {/* Email */}
                        <Form.Group
                            controlId="validationCustomEmail"
                            className={cx('modal_user-body')}
                        >
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                variant="outlined"
                                sx={{
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
                                    '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                        {
                                            borderColor: 'var(--primary-color)',
                                        },
                                    '& .MuiInputBase-root .MuiInputBase-input':
                                        {
                                            padding: '8.5px 14px',
                                        },
                                }}
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            sx={{
                                width: '100%',
                                backgroundColor: 'var(--primary-color)',
                                color: 'var(--white)',
                                fontSize: '1.4rem',
                                fontWeight: '600',
                                marginTop: '16px',
                                textTransform: 'capitalize',

                                '&:hover': {
                                    backgroundColor: 'var(--primary-color)',
                                    opacity: '0.9',
                                },
                            }}
                        >
                            Reset
                        </Button>
                    </Form>

                    <div className={cx('footer')}>
                        Don't have account?
                        <Link to={'/login'} className={cx('link')}>
                            Sign Up
                        </Link>
                    </div>
                </Box>
            </div>
        </Box>
    );
}

export default ResetPassModal;
