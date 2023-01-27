import styles from './MoreForYou.module.scss';
import ProductItem from '~/components/ProductItem';
import PaginationControl from '~/components/PaginationControl';
import TitleSection from '~/components/TitleSection';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MoreForYou() {
    const data = useSelector((state) => state.productsFlashDeals.items);

    const [itemOffset, setItemOffset] = useState(0);

    const [limit] = useState(12);
    const endOffset = itemOffset + limit;

    const currentData = data?.slice(itemOffset, endOffset);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * limit) % data?.length;
        setItemOffset(newOffset);
    };
    return (
        <div className={cx('more-for-you')}>
            <TitleSection title="More For You" />
            <Grid
                container
                rowSpacing={3}
                sx={{
                    width: 'calc(100% + 10px)',
                    marginLeft: '-5px',
                }}
            >
                {currentData?.map((product) => {
                    return (
                        <Grid item xs={3} key={product.id}>
                            <ProductItem product={product} />
                        </Grid>
                    );
                })}
            </Grid>

            {currentData && (
                <PaginationControl
                    length={data?.length}
                    limit={limit}
                    handlePageClick={handlePageClick}
                />
            )}
        </div>
    );
}

export default MoreForYou;
