import styles from './DetailShop.module.scss';
import DetailShopHeader from './DetailShopComponents/DetailShopHeader';
import FilterPanel from '~/layouts/components/FilterPanel';
import ScrollToTop from '~/pages/ScrollToTop';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';
import ProductItem from '~/components/ProductItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PaginationControl from '~/components/PaginationControl';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import Drawer from '@mui/material/Drawer';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

function DetailShop() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const [showFilterMobile, setShowFilterMobile] = useState(false);

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

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(12);

    const indexOfLast = currentPage * limit;
    const indexOfFirst = indexOfLast - limit;
    const currentData = data?.slice(indexOfFirst, indexOfLast);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
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
                            alignItems: 'flex-start',
                        }}
                    >
                        {/* Filter panel */}
                        <Grid
                            item
                            xs={isDesktop ? 3 : isTablet ? 4 : null}
                            sx={{
                                display: isMobile ? 'none' : null,
                            }}
                        >
                            <FilterPanel />
                        </Grid>
                        {/* Filter panel */}

                        {/* Filter mobile */}
                        {isMobile && (
                            <div className={cx('filter-mobile')}>
                                <Button
                                    className={cx('btn')}
                                    onClick={() => setShowFilterMobile(true)}
                                >
                                    <FilterListIcon
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                </Button>
                            </div>
                        )}
                        <Drawer open={showFilterMobile}>
                            <div className={cx('drawer-filter')}>
                                <Button
                                    className={cx('filter-btn')}
                                    onClick={() => setShowFilterMobile(false)}
                                >
                                    <CloseIcon
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                </Button>
                            </div>
                            <FilterPanel />
                        </Drawer>
                        {/* Filter mobile */}

                        <Grid
                            item
                            xs={isDesktop ? 9 : isTablet ? 8 : null}
                            container
                        >
                            {currentData?.map((product) => {
                                return (
                                    <Grid
                                        item
                                        xs={
                                            isDesktop
                                                ? 4
                                                : isTablet
                                                ? 6
                                                : isMobile
                                                ? 12
                                                : null
                                        }
                                        key={product.id}
                                    >
                                        <Item>
                                            <ProductItem
                                                className={cx('product-item')}
                                                product={product}
                                            />
                                        </Item>
                                    </Grid>
                                );
                            })}

                            <div className={cx('paginate')}>
                                <span>Showing 1-12 of 1.3k Products</span>
                                {currentData && (
                                    <PaginationControl
                                        totalCount={data?.length}
                                        limit={limit}
                                        onPageChange={onPageChange}
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
