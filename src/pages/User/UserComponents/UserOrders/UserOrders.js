import styles from './UserOrders.module.scss';
import PaginationControl from '~/components/PaginationControl';
import OrderDetail from './OrderDetail';

import classNames from 'classnames/bind';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Button, Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetListOrdersQuery } from '~/reducers/productApi';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function UserOrders() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const [showOrder, setShowOrder] = useState('block');
    const [showOrderDetail, setShowOrderDetail] = useState('none');

    const { data } = useGetListOrdersQuery();

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(4);

    const indexOfLast = currentPage * limit;
    const indexOfFirst = indexOfLast - limit;
    const currentData = data?.slice(indexOfFirst, indexOfLast);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const handleShowDetail = () => {
        setShowOrder('none');
        setShowOrderDetail('block');
    };

    const handleShowOrder = () => {
        setShowOrderDetail('none');
        setShowOrder('block');
    };

    return (
        <div className={cx('container')}>
            {/* Header */}
            <div className={cx('header')}>
                <div>
                    <ShoppingBagIcon className={cx('icon')} />
                    <span
                        style={{
                            display: showOrder,
                        }}
                        className={cx('title')}
                    >
                        My Orders
                    </span>
                    <span
                        style={{
                            display: showOrderDetail,
                        }}
                        className={cx('title')}
                    >
                        Order Details
                    </span>
                </div>
                <Button
                    className={cx('back-btn')}
                    onClick={handleShowOrder}
                    sx={{
                        display: showOrderDetail,
                        minWidth: isDesktop
                            ? '138px'
                            : isTablet
                            ? '138px'
                            : isMobile
                            ? '100px'
                            : null,
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        padding: isDesktop
                            ? '6px 32px'
                            : isTablet
                            ? '6px 32px'
                            : isMobile
                            ? '4 20px'
                            : null,
                        color: 'var(--primary-color)',
                        backgroundColor: 'rgb(252, 233, 236)',
                        textTransform: 'capitalize',

                        '&:hover': {
                            backgroundColor: 'rgba(210, 63, 87, 0.04)',
                        },
                    }}
                >
                    Go To Back
                </Button>
            </div>
            {/* Header */}

            {/* content */}
            <Grid
                container
                spacing={2}
                sx={{
                    marginTop: '0px',
                    padding: '0 4px',
                    display: showOrder,
                }}
            >
                <Grid item xs={12} sx={{ display: isMobile ? 'none' : null }}>
                    <div className={cx('content-title')}>
                        <p>Order #</p>
                        <p>Status</p>
                        <p>Date purchased</p>
                        <p>Total</p>
                        <p></p>
                    </div>
                </Grid>
                {currentData?.map((item) => {
                    return (
                        <Grid item xs={12} key={item.id}>
                            {/* content desktop tablet */}
                            <div
                                className={cx('content-item')}
                                style={{
                                    display: isMobile ? 'none' : null,
                                }}
                            >
                                <p>#{item.id}</p>
                                {item.status === 'pending' ? (
                                    <div className={cx('status-pending')}>
                                        <span>Pending</span>
                                    </div>
                                ) : item.status === 'processing' ? (
                                    <div className={cx('status-processing')}>
                                        <span>Processing</span>
                                    </div>
                                ) : item.status === 'delivered' ? (
                                    <div className={cx('status-delivered')}>
                                        <span>Delivered</span>
                                    </div>
                                ) : (
                                    <div className={cx('status-cancel')}>
                                        <span>Cancelled</span>
                                    </div>
                                )}
                                <p>{item.purchase_date}</p>
                                <p>{item.total} US$</p>
                                <p>
                                    <Link
                                        onClick={handleShowDetail}
                                        className={cx('content-btn')}
                                    >
                                        <EastIcon
                                            sx={{
                                                width: '20px',
                                                height: '20px',
                                            }}
                                        />
                                    </Link>
                                </p>
                            </div>
                            {/* content mobile */}
                            <div
                                onClick={handleShowDetail}
                                className={cx('content-item')}
                                style={{
                                    display: isDesktop
                                        ? 'none'
                                        : isTablet
                                        ? 'none'
                                        : isMobile
                                        ? ''
                                        : null,
                                }}
                            >
                                <div className={cx('content-mobile')}>
                                    <p>#{item.id}</p>
                                    {item.status === 'pending' ? (
                                        <div className={cx('status-pending')}>
                                            <span>Pending</span>
                                        </div>
                                    ) : item.status === 'processing' ? (
                                        <div
                                            className={cx('status-processing')}
                                        >
                                            <span>Processing</span>
                                        </div>
                                    ) : item.status === 'delivered' ? (
                                        <div className={cx('status-delivered')}>
                                            <span>Delivered</span>
                                        </div>
                                    ) : (
                                        <div className={cx('status-cancel')}>
                                            <span>Cancelled</span>
                                        </div>
                                    )}
                                    <p>{item.purchase_date}</p>
                                </div>
                                <div className={cx('content-mobile')}>
                                    <p>{item.total} US$</p>
                                </div>
                            </div>
                        </Grid>
                    );
                })}

                {currentData && (
                    <PaginationControl
                        totalCount={data?.length}
                        limit={limit}
                        onPageChange={onPageChange}
                    />
                )}
            </Grid>
            {/* content */}

            {/* Order Detail */}
            <OrderDetail showOrderDetail={showOrderDetail} />
        </div>
    );
}

export default UserOrders;
