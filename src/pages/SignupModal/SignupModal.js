import styles from './SignupModal.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import SignupForm from '~/layouts/components/SignupForm';

import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignupModal() {
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
                    <SignupForm />
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
                        Already have an account?
                        <Link to={'/login'}>
                            <Button className={cx('modal_user-footer-link')}>
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default SignupModal;
