import styles from './ModalUser.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import LoginForm from '~/layouts/components/LoginForm';
import Menu from '~/components/Popper/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_USER = [
    {
        title: 'Orders',
        to: 'user/orders',
    },
    {
        title: 'Profile',
        to: 'user/profile',
    },
    {
        title: 'Log out',
        to: '/',
    },
];

function ModalUser() {
    const [showModal, setShowModal] = useState(false);

    const currentUser = false;

    const handleShowModalUser = () => {
        setShowModal(true);
    };

    const handleHideModalUser = () => {
        setShowModal(false);
    };
    return (
        <>
            {currentUser ? (
                <Menu data={MENU_USER}>
                    <Button className={cx('action-btn')}>
                        <FontAwesomeIcon
                            icon={faUser}
                            className={cx('action-icon')}
                        />
                    </Button>
                </Menu>
            ) : (
                <>
                    <Button
                        onClick={handleShowModalUser}
                        className={cx('action-btn')}
                    >
                        <FontAwesomeIcon
                            icon={faArrowRightToBracket}
                            className={cx('action-icon')}
                        />
                    </Button>

                    <Modal
                        open={showModal}
                        onClose={handleHideModalUser}
                        className={cx('modal_user')}
                    >
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
                                <span className={cx('modal_user-seperate')}>
                                    or
                                </span>
                                <div>
                                    <Button
                                        className={cx('modal_user-face-btn')}
                                    >
                                        <Image
                                            className={cx(
                                                'modal_user-face-icon',
                                            )}
                                            src="https://bazaar.ui-lib.com/assets/images/icons/facebook-filled-white.svg"
                                            alt="facebook"
                                        />
                                        Continue With Facebook
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        className={cx('modal_user-google-btn')}
                                    >
                                        <Image
                                            className={cx(
                                                'modal_user-google-icon',
                                            )}
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
                                    <Link
                                        to={'signup'}
                                        onClick={handleHideModalUser}
                                    >
                                        <Button
                                            className={cx(
                                                'modal_user-footer-link',
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
                                    Forgot your password?{' '}
                                    <Link to={'/reset-password'}>
                                        <Button
                                            className={cx(
                                                'modal_user-footer-link',
                                            )}
                                        >
                                            Reset It
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </>
            )}
        </>
    );
}

export default ModalUser;
