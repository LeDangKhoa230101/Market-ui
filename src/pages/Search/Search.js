import styles from './Search.module.scss';
import Header from './SearchComponents/SearchHeader';
import SearchSidebar from './SearchComponents/SearchSidebar';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';
import ProductItem from '~/components/ProductItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PaginationControl from '~/components/PaginationControl';

import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Search() {
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
        <div className={cx('search')}>
            <section className={cx('wrapper')}>
                <Header />
                {/* container */}
                <Grid
                    container
                    spacing={2}
                    sx={{
                        margin: '0 -24px',
                        width: 'calc(100% + 44px)',
                    }}
                    className={cx('container')}
                >
                    <SearchSidebar />
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
            </section>
        </div>
    );
}

export default Search;
