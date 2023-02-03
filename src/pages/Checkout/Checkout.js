import styles from './Checkout.module.scss';
import ShippingPaypal from './CheckoutComponents/ShippingPaypal';
import SidebarCheckout from './CheckoutComponents/SidebarCheckout';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';

const cx = classNames.bind(styles);

function Checkout() {
    return (
        <div className={cx('wrapper-checkout')}>
            <div className={cx('container')}>
                <div className={cx('heading')}>
                    <h1>Checkout Now</h1>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <ShippingPaypal />
                    </Grid>
                    <Grid item xs={4}>
                        <SidebarCheckout />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Checkout;
