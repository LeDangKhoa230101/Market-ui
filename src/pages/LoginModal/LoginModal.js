import styles from './LoginModal.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import LoginForm from '~/layouts/components/LoginForm';

import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LoginModal() {
    return (
        <div className={cx('modal_user')}>
            <Box className={cx('modal_user-container')}>
                <div className={cx('modal_user-header')}>
                    <Image
                        src="https://bazaar.ui-lib.com/assets/images/bazaar-black-sm.svg"
                        alt="logo-user"
                    />
                    <span className={cx('modal_user-heading')}>
                        Welcome To Bazaar
                    </span>
                </div>
                <div>
                    <LoginForm />
                    <span className={cx('modal_user-seperate')}>or</span>
                    <div>
                        <Button className={cx('modal_user-face-btn')}>
                            <Image
                                className={cx('modal_user-face-icon')}
                                src="https://bazaar.ui-lib.com/assets/images/icons/facebook-filled-white.svg"
                                alt="facebook"
                            />
                            Continue With Facebook
                        </Button>
                    </div>
                    <div>
                        <Button className={cx('modal_user-google-btn')}>
                            <Image
                                className={cx('modal_user-google-icon')}
                                src="https://bazaar.ui-lib.com/assets/images/icons/google-1.svg"
                                alt="google"
                            />
                            Continue With Google
                        </Button>
                    </div>
                </div>
                <div>
                    <div className={cx('modal_user-footer')}>
                        Don't have account?
                        <Link to={'/signup'}>
                            <Button
                                className={cx(
                                    'modal_user-footer-link',
                                    'modal_user-footer-link--avtive',
                                )}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                    <div
                        className={cx(
                            'modal_user-footer',
                            'modal_user-footer-active',
                        )}
                    >
                        Forgot your password?
                        <Link to={'/reset-password'}>
                            <Button className={cx('modal_user-footer-link')}>
                                Reset It
                            </Button>
                        </Link>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default LoginModal;
