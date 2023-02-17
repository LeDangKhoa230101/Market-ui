import styles from './Cart.module.scss';
import ProductItemList from './CartComponents/ProductItemList';
import SidebarCart from './CartComponents/SidebarCart';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ScrollToTop from '~/pages/ScrollToTop';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function Cart() {
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
            <div className={cx('wrapper-cart')}>
                <div className={cx('container')}>
                    <div className={cx('heading')}>
                        <ShoppingCartOutlinedIcon
                            sx={{
                                width: '30px',
                                height: '30px',
                            }}
                        />
                        <h1>Your Cart</h1>
                    </div>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 8
                                    : isTablet
                                    ? 8
                                    : isMobile
                                    ? 12
                                    : null
                            }
                        >
                            <ProductItemList />
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
                            <SidebarCart />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default Cart;
