import styles from './UserOrders.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function OrderDetail({ showOrderDetail }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    return (
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
                        <div className={cx('detail-item-id')}>
                            <span>OrderID:</span>
                            <p>1</p>
                        </div>
                        <div className={cx('detail-body')}>
                            <div className={cx('detail-body-date')}>
                                <span>Date purchased:</span>
                                <p>4/2/2022</p>
                            </div>
                            <div className={cx('detail-body-date')}>
                                <span>Delivery Date:</span>
                                <p>7/5/2022</p>
                            </div>
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
                                    backgroundColor: 'rgba(210, 63, 87, 0.04)',
                                },
                            }}
                        >
                            Write A Review
                        </Button>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid
                    item
                    xs={isDesktop ? 6 : isTablet ? 6 : isMobile ? 12 : null}
                >
                    <div className={cx('shipping-address')}>
                        <span>Shipping Address</span>
                        <p>
                            Kelly Williams 777 Brockton Avenue, Abington MA 2351
                        </p>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={isDesktop ? 6 : isTablet ? 6 : isMobile ? 12 : null}
                >
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
    );
}

export default OrderDetail;
