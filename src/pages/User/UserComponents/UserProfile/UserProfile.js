import styles from './UserProfile.module.scss';
import EditProfile from './EditProfile';

import classNames from 'classnames/bind';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Button, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import ScrollToTop from '~/pages/ScrollToTop';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function UserProfile() {
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
        <>
            <ScrollToTop />
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
                        <Grid
                            item
                            xs={isDesktop ? 6 : isTabletAndMobile ? 12 : null}
                        >
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
                        <Grid
                            item
                            xs={isDesktop ? 6 : isTabletAndMobile ? 12 : null}
                            container
                            spacing={2}
                        >
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 3
                                        : isTablet
                                        ? 3
                                        : isMobile
                                        ? 6
                                        : null
                                }
                            >
                                <div className={cx('box')}>
                                    <span>16</span>
                                    <p>All Orders</p>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 3
                                        : isTablet
                                        ? 3
                                        : isMobile
                                        ? 6
                                        : null
                                }
                            >
                                <div className={cx('box')}>
                                    <span>02</span>
                                    <p>Awaiting Payments</p>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 3
                                        : isTablet
                                        ? 3
                                        : isMobile
                                        ? 6
                                        : null
                                }
                            >
                                <div className={cx('box')}>
                                    <span>00</span>
                                    <p>Awaiting Shipment</p>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 3
                                        : isTablet
                                        ? 3
                                        : isMobile
                                        ? 6
                                        : null
                                }
                            >
                                <div className={cx('box')}>
                                    <span>01</span>
                                    <p>Awaiting Delivery</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* infomation */}

                    {/* view info */}
                    <Grid container rowSpacing={0} className={cx('view-info')}>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 2
                                    : isTablet
                                    ? 2
                                    : isMobile
                                    ? 6
                                    : null
                            }
                        >
                            <div className={cx('view-body')}>
                                <span>First Name</span>
                                <p>Nick</p>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 2
                                    : isTablet
                                    ? 2
                                    : isMobile
                                    ? 6
                                    : null
                            }
                        >
                            <div className={cx('view-body')}>
                                <span>Last Name</span>
                                <p>DuBuque</p>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 4
                                    : isTablet
                                    ? 4
                                    : isMobile
                                    ? 12
                                    : null
                            }
                        >
                            <div className={cx('view-body')}>
                                <span>Email</span>
                                <p>Jayden.Gislason78@gmail.com</p>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 2
                                    : isTablet
                                    ? 2
                                    : isMobile
                                    ? 6
                                    : null
                            }
                        >
                            <div className={cx('view-body')}>
                                <span>Phone</span>
                                <p>0359118433</p>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 2
                                    : isTablet
                                    ? 2
                                    : isMobile
                                    ? 6
                                    : null
                            }
                        >
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
                <EditProfile showEdit={showEdit} />
                {/* Edit Profile */}
            </div>
        </>
    );
}

export default UserProfile;
