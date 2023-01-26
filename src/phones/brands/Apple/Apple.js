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
    const [limit] = useState(6);

    const { data, isLoading, error } = useGetListApplesQuery();

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + limit;
    const currentItems = data?.slice(itemOffset, endOffset);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * limit) % data?.length;
        setItemOffset(newOffset);
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
            <Grid
                container
                rowSpacing={3}
                sx={{
                    minHeight: '851px',
                }}
            >
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
                        {currentItems?.map((product) => {
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

            {currentItems && (
                <PaginationControl
                    limit={limit}
                    length={data?.length}
                    handlePageClick={handlePageClick}
                />
            )}
        </div>
    );
}

export default Apple;
