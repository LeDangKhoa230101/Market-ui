import styles from './OtherShop.module.scss';
import TitleSection from '~/components/TitleSection';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import ProductItem from '~/components/ProductItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/reducers/cartSlice';

const cx = classNames.bind(styles);

function OtherShop() {
    const data = useSelector((state) => state.productsFlashDeals.items);

    const dispatch = useDispatch();

    const handlePlusItem = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className={cx('other-shop')}>
            <TitleSection
                title="Other Products Of The Shop"
                className={cx('title-section')}
            />

            <Grid container rowSpacing={3}>
                {data.map((product, index) => {
                    if (index <= 3) {
                        return (
                            <Grid item xs={3} key={product.id}>
                                <ProductItem
                                    product={product}
                                    handlePlusItem={() =>
                                        handlePlusItem(product)
                                    }
                                />
                            </Grid>
                        );
                    }
                })}
            </Grid>
        </div>
    );
}

export default OtherShop;