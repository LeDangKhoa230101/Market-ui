import styles from './UserWishlist.module.scss';
import ProductItem from '~/components/ProductItem';

import classNames from 'classnames/bind';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import PaginationControl from '~/components/PaginationControl';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserWishlist() {
    const data = useSelector((state) => state.productsFlashDeals.items);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(9);

    const indexOfLast = currentPage * limit;
    const indexOfFirst = indexOfLast - limit;
    const currentData = data?.slice(indexOfFirst, indexOfLast);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    return (
        <div className={cx('container')}>
            {/* Header */}
            <div className={cx('header')}>
                <div>
                    <FavoriteIcon className={cx('icon')} />
                    <span className={cx('title')}>My Wishlist</span>
                </div>
            </div>
            {/* Header */}

            {/* content */}
            <Grid
                container
                rowSpacing={3}
                sx={{
                    width: 'calc(100% + 18px)',
                    marginTop: '-12px',
                    marginLeft: '-8px',
                }}
            >
                {currentData?.map((product) => {
                    return (
                        <Grid item xs={4} key={product.id}>
                            <ProductItem product={product} />
                        </Grid>
                    );
                })}
            </Grid>
            {currentData && (
                <PaginationControl
                    totalCount={data?.length}
                    limit={limit}
                    onPageChange={onPageChange}
                />
            )}
            {/* content */}
        </div>
    );
}

export default UserWishlist;
