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
];

const VENDOR = [
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
];

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            {/* Header */}
            <div className={cx('header')}>
                <Image
                    className={cx('logo')}
                    src="https://bazaar.ui-lib.com/assets/images/logo.svg"
                    alt="logo"
                />
                <NavigateBeforeIcon className={cx('left-icon')} />
            </div>

            {/* ADMIN */}
            <div className={cx('admin')}>
                <h4 className={cx('admin-title')}>ADMIN</h4>
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
                                <span className={cx('title')}>
                                    {item.title}
                                </span>
                            </NavLink>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
