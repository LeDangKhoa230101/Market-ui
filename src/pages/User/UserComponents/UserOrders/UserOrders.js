import styles from './UserOrders.module.scss';
import PaginationControl from '~/components/PaginationControl';

import classNames from 'classnames/bind';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Button, Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetListOrdersQuery } from '~/reducers/productApi';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function UserOrders() {
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
                    onClick={handleShowOrder}
                    sx={{
                        display: showOrderDetail,
                        minWidth: '138px',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        padding: '6px 32px',
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
                <Grid item xs={12}>
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
                            <div className={cx('content-item')}>
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

            {/* order detail */}
            <div
                style={{
                    display: showOrderDetail,
                }}
            >
                <Grid
                    container
                    sx={{
                        margin: '20px 0 30px 0',
                        borderRadius: '8px',
                        boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
                    }}
                >
                    <Grid item xs={12}>
                        <div className={cx('detail-item--modify')}>
                            <div>
                                <span>OrderID:</span>
                                <p>1</p>
                            </div>
                            <div>
                                <span>Date purchased:</span>
                                <p>4/2/2022</p>
                            </div>
                            <div>
                                <span>Delivery Date:</span>
                                <p>7/5/2022</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={cx('detail-item')}>
                            <div className={cx('left')}>
                                <Image
                                    className={cx('image')}
                                    src="https://bazaar.ui-lib.com/assets/images/products/Automotive/2.Audi2017.png"
                                />
                                <div className={cx('body')}>
                                    <span>Resla 233</span>
                                    <p>226,00 US$ x 4</p>
                                </div>
                            </div>
                            <span className={cx('properties')}>
                                Product properties: Black, L
                            </span>
                            <Button
                                sx={{
                                    minWidth: '112px',
                                    padding: '6px 8px',
                                    fontSize: '1.4rem',
                                    color: 'var(--primary-color)',
                                    fontWeight: '500',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                    },
                                }}
                            >
                                Write A Review
                            </Button>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className={cx('shipping-address')}>
                            <span>Shipping Address</span>
                            <p>
                                Kelly Williams 777 Brockton Avenue, Abington MA
                                2351
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={cx('total')}>
                            <span className={cx('title')}>Total Summary</span>
                            <div className={cx('body')}>
                                <span>Subtotal:</span>
                                <p>500,00 US$</p>
                            </div>
                            <div className={cx('body')}>
                                <span>Shipping fee:</span>
                                <p>500,00 US$</p>
                            </div>
                            <div className={cx('body')}>
                                <span>Discount:</span>
                                <p>500,00 US$</p>
                            </div>
                            <hr className={cx('hr')}></hr>
                            <div className={cx('summary')}>
                                <span>Total</span>
                                <p>500,00 US$</p>
                            </div>
                            <span className={cx('payment')}>
                                Paid by Credit/Debit Card
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* order detail */}
        </div>
    );
}

export default UserOrders;
