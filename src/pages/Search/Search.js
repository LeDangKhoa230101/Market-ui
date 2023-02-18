import styles from './Search.module.scss';
import SearchHeader from './SearchComponents/SearchHeader';
import FilterPanel from '~/layouts/components/FilterPanel';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';
import ProductItem from '~/components/ProductItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PaginationControl from '~/components/PaginationControl';

import { useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import FilterListIcon from '@mui/icons-material/FilterList';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

function Search() {
    const [showDrawerFilter, setShowDrawerFilter] = useState(false);

    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

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
        <div className={cx('search')}>
            <section className={cx('wrapper')}>
                <SearchHeader />

                {/* Search filter mobile icon */}
                {isMobile && (
                    <div className={cx('filter-icon')}>
                        <Button
                            className={cx('filter-icon-btn')}
                            onClick={() => setShowDrawerFilter(true)}
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
                {/* Search filter mobile icon */}

                {/* Drawer filter mobile */}
                <Drawer open={showDrawerFilter}>
                    <div className={cx('drawer-filter')}>
                        <Button
                            className={cx('filter-btn')}
                            onClick={() => setShowDrawerFilter(false)}
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
                {/* Drawer filter mobile */}

                {/* container */}
                <Grid
                    container
                    spacing={2}
                    sx={{
                        margin: '0 -24px',
                        width: 'calc(100% + 44px)',
                        alignItems: 'flex-start',
                    }}
                >
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: isMobile ? 'none' : '',
                        }}
                    >
                        <FilterPanel />
                    </Grid>
                    <Grid item xs={9} container>
                        {currentData?.map((product) => {
                            return (
                                <Grid item xs={4} key={product.id}>
                                    <Item>
                                        <ProductItem
                                            product={product}
                                            className={cx(
                                                'product-item-search',
                                            )}
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
            </section>
        </div>
    );
}

export default Search;
