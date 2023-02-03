import styles from './Cart.module.scss';
import ProductItemList from './CartComponents/ProductItemList';
import SidebarCart from './CartComponents/SidebarCart';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const cx = classNames.bind(styles);

function Cart() {
    return (
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
                    <Grid item xs={8}>
                        <ProductItemList />
                    </Grid>
                    <Grid item xs={4}>
                        <SidebarCart />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Cart;
