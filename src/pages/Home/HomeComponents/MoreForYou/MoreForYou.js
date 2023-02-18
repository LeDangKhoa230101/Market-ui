import styles from './MoreForYou.module.scss';
import ProductItem from '~/components/ProductItem';
import PaginationControl from '~/components/PaginationControl';
import TitleSection from '~/components/TitleSection';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

import { useMediaQuery } from 'react-responsive';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MoreForYou() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });
    const data = useSelector((state) => state.productsFlashDeals.items);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(20);

    const indexOfLast = currentPage * limit;
    const indexOfFirst = indexOfLast - limit;
    const currentData = data?.slice(indexOfFirst, indexOfLast);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    return (
        <div className={cx('more-for-you')}>
            <TitleSection title="More For You" />
            <Grid
                container
                rowSpacing={isDesktop ? 3 : isTablet ? 3 : isMobile ? 2 : null}
                sx={{
                    width: 'calc(100% + 10px)',
                    marginLeft: '-5px',
                }}
            >
                {currentData?.map((product) => {
                    return (
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 3
                                    : isTablet
                                    ? 4
                                    : isMobile
                                    ? 6
                                    : null
                            }
                            key={product.id}
                        >
                            <ProductItem
                                className={cx('product-item-phone')}
                                product={product}
                            />
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
        </div>
    );
}

export default MoreForYou;
