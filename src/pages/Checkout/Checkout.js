import styles from './Checkout.module.scss';
import ShippingPaypal from './CheckoutComponents/ShippingPaypal';
import SidebarCheckout from './CheckoutComponents/SidebarCheckout';

import ScrollToTop from '~/pages/ScrollToTop';
import classNames from 'classnames/bind';
import { Grid } from '@mui/material';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function Checkout() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    return (
        <>
            <ScrollToTop />
            <div className={cx('wrapper-checkout')}>
                <div className={cx('container')}>
                    <div className={cx('heading')}>
                        <h1>Checkout Now</h1>
                    </div>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 8
                                    : isTablet
                                    ? 7
                                    : isMobile
                                    ? 12
                                    : null
                            }
                        >
                            <ShippingPaypal />
                        </Grid>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 4
                                    : isTablet
                                    ? 5
                                    : isMobile
                                    ? 12
                                    : null
                            }
                        >
                            <SidebarCheckout />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default Checkout;
