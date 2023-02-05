import styles from './User.module.scss';
import UserSidebar from './UserComponents/UserSidebar';
import UserOrders from './UserComponents/UserOrders';
import UserWishlist from './UserComponents/UserWishlist';
import UserSupport from './UserComponents/UserSupport';
import UserProfile from './UserComponents/UserProfile';
import UserAddresses from './UserComponents/UserAddresses';
import UserPayment from './UserComponents/UserPayment';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';

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
    {
        title: 'Support Tickets',
        to: 'support',
        amount: '1',
        icon: (
            <HeadsetMicOutlinedIcon
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
    return (
        <div className={cx('wrapper-user')}>
            <div className={cx('container')}>
                <Grid container spacing={3}>
                    {/* Side bar */}
                    <Grid item xs={3}>
                        <UserSidebar
                            USER_DASHBOARD={USER_DASHBOARD}
                            USER_SETTINGS={USER_SETTINGS}
                        />
                    </Grid>
                    {/* Side bar */}
                    <Grid item xs={9}>
                        <Routes>
                            <Route path="orders" element={<UserOrders />} />
                            <Route path="wishlist" element={<UserWishlist />} />
                            <Route path="support" element={<UserSupport />} />
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
