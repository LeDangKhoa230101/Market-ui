import styles from './SaleLaptop.module.scss';
import ProductItem from '~/components/ProductItem';
import PaginationControl from '~/components/PaginationControl';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SaleLaptop() {
    const datas = useSelector((state) => state.productsFlashDeals.items);
    const status = useSelector((state) => state.productsFlashDeals.status);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentData = datas?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    return (
        <>
            <Grid
                container
                rowSpacing={3}
                sx={{
                    width: 'calc(100% + 23px)',
                    marginLeft: '-12px',
                }}
            >
                {status === 'loading' ? (
                    <CircularProgress disableShrink />
                ) : status === 'failed' ? (
                    <Alert
                        severity="error"
                        sx={{
                            alignItems: 'center',
                            fontSize: '1.4rem',
                            marginLeft: '20px',
                        }}
                    >
                        This is an error alert — check it out!
                    </Alert>
                ) : (
                    currentData?.map((product) => {
                        return (
                            <Grid item xs={3} key={product.id}>
                                <ProductItem product={product} />
                            </Grid>
                        );
                    })
                )}
            </Grid>

            <div className={cx('bottom')}>
                <span className={cx('sale-text')}>
                    Showing 1-20 of {datas?.length} Products
                </span>
                {currentData && (
                    <PaginationControl
                        className={cx('sale')}
                        totalCount={datas?.length}
                        postsPerPage={postsPerPage}
                        onPageChange={paginate}
                    />
                )}
            </div>
        </>
    );
}

export default SaleLaptop;
