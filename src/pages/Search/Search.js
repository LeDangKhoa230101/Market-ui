import styles from './Search.module.scss';
import Header from './SearchComponents/SearchHeader';
import FilterPanel from '~/layouts/components/FilterPanel';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { Grid } from '@mui/material';
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

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentData = data?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
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
                        alignItems: 'flex-start',
                    }}
                    className={cx('container')}
                >
                    <Grid item xs={12} md={3}>
                        <FilterPanel />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={9}
                        container
                        className={cx('content')}
                        sx={{}}
                    >
                        {currentData?.map((product) => {
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
                            {currentData && (
                                <PaginationControl
                                    totalCount={data?.length}
                                    postsPerPage={postsPerPage}
                                    onPageChange={paginate}
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
