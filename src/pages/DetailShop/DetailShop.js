import styles from './DetailShop.module.scss';
import DetailShopHeader from './DetailShopComponents/DetailShopHeader';
import FilterPanel from '~/layouts/components/FilterPanel';
import ScrollToTop from '~/pages/ScrollToTop';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { Grid } from '@mui/material';
import ProductItem from '~/components/ProductItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PaginationControl from '~/components/PaginationControl';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function DetailShop() {
    const params = useParams();

    const shop = useSelector((state) =>
        state.shopsSlice.datas.find((shop) => String(shop.id) === params.id),
    );

    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0),
        marginBottom: '24px',
    }));

    const data = useSelector((state) => state.productsFlashDeals.items);
    const [limit] = useState(12);

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + limit;
    const currentItems = data?.slice(itemOffset, endOffset);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * limit) % data?.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <ScrollToTop />
            <div className={cx('wrapper-shop')}>
                <div className={cx('container')}>
                    {shop && <DetailShopHeader data={shop} />}

                    {/* container */}
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            margin: '0px -16px',
                            width: 'calc(100% + 29px)',
                            padding: '20px 0',
                        }}
                    >
                        {/* Filter panel */}
                        <FilterPanel />
                        {/* Filter panel */}
                        <Grid
                            item
                            xs={9}
                            container
                            className={cx('content')}
                            sx={{}}
                        >
                            {currentItems?.map((product) => {
                                return (
                                    <Grid item xs={4} key={product.id}>
                                        <Item>
                                            <ProductItem product={product} />
                                        </Item>
                                    </Grid>
                                );
                            })}

                            <div className={cx('paginate')}>
                                <span>Showing 1-12 of 1.3k Products</span>
                                {currentItems && (
                                    <PaginationControl
                                        limit={limit}
                                        length={data?.length}
                                        handlePageClick={handlePageClick}
                                    />
                                )}
                            </div>
                        </Grid>
                    </Grid>
                    {/* container */}
                </div>
            </div>
        </>
    );
}

export default DetailShop;
