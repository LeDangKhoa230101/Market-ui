import styles from './Navigation.module.scss';

import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const cx = classNames.bind(styles);

const navigation = [
    {
        icon: (
            <HomeOutlinedIcon
                sx={{
                    width: '24px',
                    height: '24px',
                }}
            />
        ),
        title: 'Home',
        to: '/',
    },
    {
        icon: (
            <GridViewIcon
                sx={{
                    width: '24px',
                    height: '24px',
                }}
            />
        ),
        title: 'Category',
        to: '/cate-nav',
    },
    {
        icon: (
            <ShoppingBagOutlinedIcon
                sx={{
                    width: '24px',
                    height: '24px',
                }}
            />
        ),
        title: 'Cart',
        to: '/cart',
    },
    {
        icon: (
            <PersonOutlineOutlinedIcon
                sx={{
                    width: '24px',
                    height: '24px',
                }}
            />
        ),
        title: 'Account',
        to: '/user/profile',
    },
];

function Navigation() {
    return (
        <>
            <div className={cx('wrapper')}>
                {navigation.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={item.to}
                            className={(nav) =>
                                cx('item', { active: nav.isActive })
                            }
                        >
                            <span>{item.icon}</span>
                            <span className={cx('title')}>{item.title}</span>
                        </NavLink>
                    );
                })}
            </div>
        </>
    );
}

export default Navigation;
