import styles from './OrderDetail.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function OrderDetail({ showDetail, handleShowOrders }) {
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
                display: showDetail,
            }}
        >
            <h3 className={cx('heading')}>Order Details</h3>
            <Button
                onClick={handleShowOrders}
                sx={{
                    fontSize: '1.4rem',
                    backgroundColor: 'rgb(78, 151, 253)',
                    color: 'var(--white)',
                    padding: '6px 16px',
                    marginBottom: '20px',
                    textTransform: 'capitalize',
                    boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
                    '&:hover': {
                        backgroundColor: 'rgb(39, 86, 182)',
                        boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
                    },
                }}
            >
                Go To Back
            </Button>

            <Grid container spacing={3}>
                {/* Item 1 */}
                <Grid item xs={12}>
                    <div className={cx('container')}>
                        <Grid container spacing={3}>
                            {/* Section 1 */}
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 6
                                        : isTablet
                                        ? 6
                                        : isMobile
                                        ? 12
                                        : null
                                }
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div className={cx('order-id')}>
                                    <span>Order ID:</span>
                                    <p>1</p>
                                </div>
                                <div className={cx('order-placed')}>
                                    <span>Placed on:</span>
                                    <p>10 Nov, 2022</p>
                                </div>
                            </Grid>
                            {/* Section 2 */}
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: 'flex',
                                    alignItems: isDesktop
                                        ? 'center'
                                        : isTablet
                                        ? 'center'
                                        : isMobile
                                        ? 'flex-start'
                                        : null,
                                    justifyContent: 'space-between',
                                    flexDirection: isMobile && 'column',
                                }}
                            >
                                <div className={cx('item')}>
                                    <Image
                                        className={cx('image')}
                                        src="https://bazaar.ui-lib.com/assets/images/products/Automotive/2.Audi2017.png"
                                    />
                                    <div className={cx('item-body')}>
                                        <span>Budi 2017</span>
                                        <p>226,00 US$ x3</p>
                                    </div>
                                </div>
                                <span className={cx('property')}>
                                    Product properties: Black, L
                                </span>
                                <Button
                                    sx={{
                                        minWidth: '35px',
                                        height: '35px',
                                        borderRadius: '999px',
                                        color: 'rgb(125, 135, 156)',

                                        '&:hover': {
                                            backgroundColor:
                                                'rgba(0, 0, 0, 0.04)',
                                            color: 'rgb(78, 151, 253)',
                                        },
                                    }}
                                >
                                    <DeleteIcon
                                        sx={{
                                            minWidth: '20px',
                                            height: '20px',
                                        }}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                {/* Item 2 */}
                <Grid
                    item
                    xs={isDesktop ? 6 : isTablet ? 6 : isMobile ? 12 : null}
                >
                    <div className={cx('container')}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Shipping Address"
                                variant="outlined"
                                value="Kelly Williams 777 Brockton Avenue, Abington MA 2351"
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        fontSize: '1.4rem',
                                    },
                                    '& .MuiInputBase-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                        </Grid>
                    </div>
                </Grid>
                {/* Item 3 */}
                <Grid
                    item
                    xs={isDesktop ? 6 : isTablet ? 6 : isMobile ? 12 : null}
                >
                    <div className={cx('container')}>
                        <Grid item xs={12}>
                            <h3 className={cx('title')}>Total Summary</h3>
                            <div className={cx('price')}>
                                <span>Subtotal:</span>
                                <p>350,00 US$</p>
                            </div>
                            <div className={cx('price')}>
                                <span>Shipping fee:</span>
                                <p>350,00 US$</p>
                            </div>
                            <div className={cx('price')}>
                                <span>Discount(%):</span>
                                <p>350,00 US$</p>
                            </div>
                            <hr></hr>
                            <div className={cx('total')}>
                                <span>Total:</span>
                                <p>350,00 US$</p>
                            </div>
                            <span>Paid by Credit/Debit Card</span>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

OrderDetail.propTypes = {
    showDetail: PropTypes.string,
    handleShowOrders: PropTypes.func,
};

export default OrderDetail;
