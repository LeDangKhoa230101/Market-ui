import styles from './ModalUser.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import images from '~/assets/image';
import LoginForm from '~/layouts/components/LoginForm/LoginForm';
import Menu from '~/components/Popper/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MENU_USER = [
    {
        title: 'Orders',
        to: '/',
    },
    {
        title: 'Profile',
        to: '/',
    },
    {
        title: 'Log out',
        to: '/',
    },
];

function ModalUser() {
    const [showModal, setShowModal] = useState(false);

    const currentUser = true;

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
                                <Image src={images.logoUser} />
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
                                            src={images.facebook}
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
                                            src={images.google}
                                            alt="google"
                                        />
                                        Continue With Google
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <div className={cx('modal_user-footer')}>
                                    Don't have account?
                                    <Button
                                        className={cx('modal_user-footer-link')}
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                                <div
                                    className={cx(
                                        'modal_user-footer',
                                        'modal_user-footer-active',
                                    )}
                                >
                                    Forgot your password?{' '}
                                    <Button
                                        className={cx('modal_user-footer-link')}
                                    >
                                        Reset It
                                    </Button>
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
