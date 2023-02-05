import styles from './SaleCateItem.module.scss';

import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';

const cx = classNames.bind(styles);

function SaleCateItem({ item }) {
    return (
        <Grid item xs={2}>
            <NavLink
                className={(nav) =>
                    cx('cate-item', {
                        active: nav.isActive,
                    })
                }
                to={item.to}
            >
                {item.icon}
                <span className={cx('cate-name')}>{item.name}</span>
            </NavLink>
        </Grid>
    );
}

export default SaleCateItem;
