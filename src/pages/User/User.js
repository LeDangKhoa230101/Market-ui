import styles from './User.module.scss';
import UserSidebar from './UserComponents/UserSidebar';
import UserOrders from './UserComponents/UserOrders';
import UserWishlist from './UserComponents/UserWishlist';
import UserProfile from './UserComponents/UserProfile';
import UserAddresses from './UserComponents/UserAddresses';
import UserPayment from './UserComponents/UserPayment';

import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';

import { useMediaQuery } from 'react-responsive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

const cx = classNames.bind(styles);

const USER_DASHBOARD = [
    {
        title: 'Orders',
        to: 'orders',
        amount: '5',
        icon: (
            <ShoppingBagOutlinedIcon
                sx={{
                    width: '20px',
                    height: '20px',
                    marginRight: '8px',
                }}
            />
        ),
    },
    {
        title: 'Wishlist',
        to: 'wishlist',
        amount: '19',
        icon: (
            <FavoriteBorderOutlinedIcon
                sx={{
                    width: '20px',
                    height: '20px',
                    marginRight: '8px',
                }}
            />
        ),
    },
];

const USER_SETTINGS = [
    {
        title: 'Profile Info',
        to: 'profile',
        amount: null,
        icon: (
            <PersonRoundedIcon
                sx={{
                    width: '20px',
                    height: '20px',
                    marginRight: '8px',
                }}
            />
        ),
    },
    {
        title: 'Addresses',
        to: 'addresses',
        amount: '16',
        icon: (
            <LocationOnRoundedIcon
                sx={{
                    width: '20px',
                    height: '20px',
                    marginRight: '8px',
                }}
            />
        ),
    },
    {
        title: 'Payment Methods',
        to: 'payment',
        amount: '4',
        icon: (
            <PaymentRoundedIcon
                sx={{
                    width: '20px',
                    height: '20px',
                    marginRight: '8px',
                }}
            />
        ),
    },
];

function User() {
    const [showMenuDashboard, setShowMenuDashboard] = useState(false);

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
        <div className={cx('wrapper-user')}>
            <div className={cx('container')}>
                <Grid container spacing={3}>
                    {/* Side bar */}
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: isTabletAndMobile && 'none',
                        }}
                    >
                        <UserSidebar
                            USER_DASHBOARD={USER_DASHBOARD}
                            USER_SETTINGS={USER_SETTINGS}
                        />
                    </Grid>
                    {/* Side bar */}

                    {/* Menu dashboard */}
                    {isTabletAndMobile && (
                        <div className={cx('menu-dash')}>
                            <Button
                                className={cx('menu-btn')}
                                onClick={() => setShowMenuDashboard(true)}
                            >
                                <DashboardIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                />
                            </Button>
                        </div>
                    )}
                    {/* Menu dashboard */}

                    {/* Drawer menu dashboard */}
                    <Drawer
                        open={showMenuDashboard}
                        onClose={() => setShowMenuDashboard(false)}
                    >
                        <UserSidebar
                            USER_DASHBOARD={USER_DASHBOARD}
                            USER_SETTINGS={USER_SETTINGS}
                        />
                    </Drawer>
                    {/* Drawer menu dashboard */}

                    <Grid
                        item
                        xs={isDesktop ? 9 : isTabletAndMobile ? 12 : null}
                    >
                        <Routes>
                            <Route path="orders" element={<UserOrders />} />
                            <Route path="wishlist" element={<UserWishlist />} />
                            <Route path="profile" element={<UserProfile />} />
                            <Route
                                path="addresses"
                                element={<UserAddresses />}
                            />
                            <Route path="payment" element={<UserPayment />} />
                        </Routes>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default User;
