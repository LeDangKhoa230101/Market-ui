import styles from './Sidebar.module.scss';
import Image from '~/components/Image/Image';
import {
    dashboard,
    products,
    categories,
    brands,
    orders,
    customers,
} from '~/assets/icons/icons';

import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const cx = classNames.bind(styles);

const ADMIN = [
    {
        title: 'Dashboard',
        icon: dashboard,
        to: '/admin/dashboard',
    },
    {
        title: 'Products',
        icon: products,
        to: '/admin/products',
    },
    {
        title: 'Categories',
        icon: categories,
        to: '/admin/categories',
    },
    {
        title: 'Brands',
        icon: brands,
        to: '/admin/brands',
    },
    {
        title: 'Orders',
        icon: orders,
        to: '/admin/orders',
    },
    {
        title: 'Customers',
        icon: customers,
        to: '/admin/customers',
    },
    {
        title: 'Signin',
        icon: <LoginIcon sx={{ width: '22px', height: '22px' }} />,
        to: '/admin/signin',
    },
    {
        title: 'Signup',
        icon: <PersonAddIcon sx={{ width: '22px', height: '22px' }} />,
        to: '/admin/signup',
    },
];

function Sidebar({
    widthSidebar,
    hoverSidebar,
    rotate,
    handleSetWidthSidebar,
    handleMouseOverSidebar,
    handleMouseOutSidebar,
}) {
    return (
        <Box
            onMouseOver={handleMouseOverSidebar}
            onMouseOut={handleMouseOutSidebar}
            className={cx('sidebar')}
            sx={{
                width: widthSidebar,

                '&:hover': {
                    width: hoverSidebar,
                },
            }}
        >
            {/* Header */}
            <div className={cx('header')}>
                <Image
                    className={cx('logo')}
                    src={
                        hoverSidebar === '280px' || widthSidebar === '280px'
                            ? 'https://bazaar.ui-lib.com/assets/images/logo.svg'
                            : 'https://bazaar.ui-lib.com/assets/images/bazaar-white-sm.svg'
                    }
                    alt="logo"
                />
                <NavigateBeforeIcon
                    onClick={handleSetWidthSidebar}
                    className={cx('left-icon')}
                    sx={{
                        rotate: rotate,
                    }}
                />
            </div>

            {/* ADMIN */}
            <div className={cx('admin')}>
                <h4
                    className={cx('admin-title')}
                    style={{
                        opacity:
                            hoverSidebar === '280px' || widthSidebar === '280px'
                                ? '1'
                                : '0',
                    }}
                >
                    ADMIN
                </h4>
                {ADMIN.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            sx={{
                                minWidth: '100%',
                                height: '44px',
                                padding: '0',
                                justifyContent: 'flex-start',
                                textTransform: 'capitalize',
                                marginBottom: '4px',
                            }}
                        >
                            <NavLink
                                to={item.to}
                                className={(nav) =>
                                    cx('admin-btn', {
                                        active: nav.isActive ? 'active' : '',
                                    })
                                }
                            >
                                {item.icon}
                                {hoverSidebar === '280px' ||
                                widthSidebar === '280px' ? (
                                    <span className={cx('title')}>
                                        {item.title}
                                    </span>
                                ) : null}
                            </NavLink>
                        </Button>
                    );
                })}
            </div>
        </Box>
    );
}

export default Sidebar;
