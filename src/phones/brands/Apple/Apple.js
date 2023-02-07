import styles from './Apple.module.scss';
import ProductItem from '~/components/ProductItem';

import classNames from 'classnames/bind';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { useSnackbar } from 'notistack';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { addToCart } from '~/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { useState } from 'react';

import PaginationControl from '~/components/PaginationControl';

import { useGetListApplesQuery } from '~/reducers/productApi';

const cx = classNames.bind(styles);

function Apple() {
    const { data, isLoading, error } = useGetListApplesQuery();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentData = data?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handlePlusItem = (product) => {
        dispatch(addToCart(product));
        enqueueSnackbar(
            <div className={cx('snackbar')}>
                <CheckCircleSharpIcon
                    sx={{
                        marginRight: '8px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'var(--white)',
                        color: '#33d067',
                        borderRadius: '999px',
                    }}
                />
                <span className={cx('snackbar-title')}>Added to cart</span>
            </div>,
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Grid container rowSpacing={3}>
                {isLoading ? (
                    <CircularProgress />
                ) : error ? (
                    <Alert
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        severity="error"
                    >
                        This is an error alert — check it out!
                    </Alert>
                ) : (
                    <>
                        {currentData?.map((product) => {
                            return (
                                <Grid item xs={4} key={product.id}>
                                    <ProductItem
                                        product={product}
                                        handlePlusItem={() =>
                                            handlePlusItem(product)
                                        }
                                    />
                                </Grid>
                            );
                        })}
                    </>
                )}
            </Grid>

            {currentData && (
                <PaginationControl
                    totalCount={data?.length}
                    postsPerPage={postsPerPage}
                    onPageChange={paginate}
                />
            )}
        </div>
    );
}

export default Apple;
