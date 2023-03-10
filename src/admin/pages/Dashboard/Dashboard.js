import styles from './Dashboard.module.scss';
import Image from '~/components/Image/Image';

import {
    barCharDatatWeeklySales,
    barChartOptionsWeeklySales,
    radialBarDataProductShare,
    radialBarOptionsProductShare,
    areaDataTotalOrder,
    areaOptionsTotalOrder,
    radialBarDataMarketShare,
    radialBarOptionsMarketShare,
    lineDataAnalytics,
    lineOptionsAnalytics,
    lineDataAnalyticsMobile,
    lineOptionsAnalyticsMobile,
} from '~/admin/variables/charts';

import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Chart from 'react-apexcharts';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DoneIcon from '@mui/icons-material/Done';
import RefreshIcon from '@mui/icons-material/Refresh';
import TableContainer from '@material-ui/core/TableContainer';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const PurchasesData = [
    {
        oID: 1,
        product: 'Aavic Headphone',
        payment: 'success',
        total: '152,25',
    },
    {
        oID: 2,
        product: 'Jeans Pant',
        payment: 'success',
        total: '255,25',
    },
    {
        oID: 3,
        product: 'Nike Shoes',
        payment: 'pending',
        total: '152,25',
    },
    {
        oID: 4,
        product: 'Polo T-shirt',
        payment: 'pending',
        total: '97,25',
    },
    {
        oID: 5,
        product: 'Premium Shirt For Men',
        payment: 'success',
        total: '115,25',
    },
];

const PurchasesHeader = [
    {
        title: 'Order ID',
    },
    {
        title: 'Product',
    },
    {
        title: 'Payment',
    },
    {
        title: 'Total',
    },
];

const StockOutProducts = [
    {
        product: 'Samsung Glaxy-M1',
        stock: '00',
        total: '152,25',
    },
    {
        product: 'Premium Shirt For Men',
        stock: '00',
        total: '115,25',
    },
    {
        product: 'Polo T-shirt',
        stock: '00',
        total: '97,25',
    },
    {
        product: 'Nike Shoes',
        stock: '00',
        total: '125,25',
    },
    {
        product: 'Jeans Pant',
        stock: '00',
        total: '115,25 ',
    },
];

function Dashboard() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(3),
        borderRadius: '8px',
        height: '100%',
        maxHeight: '100%',
        boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
    }));

    return (
        <div className={cx('wrapper')}>
            <Grid container spacing={3}>
                {/* Section 1 */}
                <Grid item xs={isDesktop ? 6 : isTabletAndMobile ? 12 : null}>
                    <Item>
                        <div className={cx('section1')}>
                            <div className={cx('section1-body')}>
                                <h3>Good Morning, Maruf!</h3>
                                <p>
                                    Here's what happening with your store today!
                                </p>
                                <span>15,350.25</span>
                                <p>Today's Visit</p>
                                <span>10.360,66 US$</span>
                                <p>Today's total sales</p>
                            </div>
                            <Image
                                className={cx('section1-image')}
                                src="https://bazaar.ui-lib.com/assets/images/illustrations/dashboard/welcome.svg"
                            />
                        </div>
                    </Item>
                </Grid>
                <Grid
                    item
                    xs={isDesktop ? 6 : isTabletAndMobile ? 12 : null}
                    container
                    spacing={3}
                >
                    <Grid item xs={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>Order</p>
                            <span className={cx('number')}>32,350</span>
                            <div className={cx('body')}>
                                <span>9350</span>
                                <div className={cx('body-bottom')}>
                                    <ArrowDropUpIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            color: '#4E97FD',
                                        }}
                                    />
                                    <p className={cx('pending')}>25.25%</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>Sold Items</p>
                            <span className={cx('number')}>2,360</span>
                            <div className={cx('body')}>
                                <span>1350</span>
                                <div className={cx('body-bottom')}>
                                    <ArrowDropDownIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            color: 'var(--primary-color)',
                                        }}
                                    />
                                    <p className={cx('warrning')}>2.65%</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>Gross Sale</p>
                            <span className={cx('number')}>$12,460.25</span>
                            <div className={cx('body')}>
                                <span>11350</span>
                                <div className={cx('body-bottom')}>
                                    <ArrowDropUpIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            color: 'rgb(51, 208, 103)',
                                        }}
                                    />
                                    <p className={cx('success')}>10.25%</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={cx('item')}>
                            <p className={cx('text')}>Total Shipping Cost</p>
                            <span className={cx('number')}>$6,240</span>
                            <div className={cx('body')}>
                                <span>4350</span>
                                <div className={cx('body-bottom')}>
                                    <ArrowDropDownIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            color: 'var(--primary-color)',
                                        }}
                                    />
                                    <p className={cx('warrning')}>13.15%</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/* Section 2 */}
                <Grid item xs={12} container spacing={3}>
                    <Grid
                        item
                        xs={isDesktop ? 3 : isTablet ? 6 : isMobile ? 12 : null}
                    >
                        <div className={cx('body-active')}>
                            <div className={cx('body-change')}>
                                <p>Weekly Sales</p>
                                <span>10.240 US$</span>
                                <div className={cx('body-active-bottom')}>
                                    <ArrowDropUpIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            color: '#4E97FD',
                                        }}
                                    />
                                    <p className={cx('pending')}>25.25%</p>
                                </div>
                            </div>
                            <Chart
                                options={barChartOptionsWeeklySales}
                                series={barCharDatatWeeklySales}
                                type="bar"
                                width="111"
                                height="100"
                            />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={isDesktop ? 3 : isTablet ? 6 : isMobile ? 12 : null}
                    >
                        <div className={cx('body-active')}>
                            <div className={cx('body-change')}>
                                <p>Product Share</p>
                                <span>39.56%</span>
                                <div className={cx('body-active-bottom')}>
                                    <ArrowDropUpIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            color: '#4E97FD',
                                        }}
                                    />
                                    <p className={cx('pending')}>10.25%</p>
                                </div>
                            </div>
                            <Chart
                                series={radialBarDataProductShare}
                                options={radialBarOptionsProductShare}
                                type="radialBar"
                                width="121"
                                height="130"
                            />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={isDesktop ? 3 : isTablet ? 6 : isMobile ? 12 : null}
                    >
                        <div className={cx('body-active')}>
                            <div className={cx('body-change')}>
                                <p>Total Order</p>
                                <span>12.260 US$</span>
                                <div className={cx('body-active-bottom')}>
                                    <ArrowDropUpIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            color: '#4E97FD',
                                        }}
                                    />
                                    <p className={cx('pending')}>2.65%</p>
                                </div>
                            </div>
                            <Chart
                                series={areaDataTotalOrder}
                                options={areaOptionsTotalOrder}
                                type="area"
                                width="111"
                                height="100"
                            />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={isDesktop ? 3 : isTablet ? 6 : isMobile ? 12 : null}
                    >
                        <div className={cx('body-active')}>
                            <div className={cx('body-change')}>
                                <p>Market Share</p>
                                <span>14.260 US$</span>
                                <div className={cx('body-active-bottom')}>
                                    <ArrowDropUpIcon
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            color: '#4E97FD',
                                        }}
                                    />
                                    <p className={cx('pending')}>2.65%</p>
                                </div>
                            </div>
                            <Chart
                                series={radialBarDataMarketShare}
                                options={radialBarOptionsMarketShare}
                                type="radialBar"
                                width="111"
                                height="130"
                            />
                        </div>
                    </Grid>
                </Grid>
                {/* Section 3 */}
                <Grid item xs={12}>
                    <Item>
                        <div className={cx('analytic-header')}>
                            <span className={cx('analytic-header-title')}>
                                Analytics
                            </span>
                            <select className={cx('section3-select')}>
                                <option
                                    value="1"
                                    className={cx('section3-select-option')}
                                >
                                    Yearly
                                </option>
                                <option
                                    value="2"
                                    className={cx('section3-select-option')}
                                >
                                    Monthly
                                </option>
                                <option
                                    value="3"
                                    className={cx('section3-select-option')}
                                >
                                    Weekly
                                </option>
                            </select>
                        </div>
                        {isDesktop ? (
                            <Chart
                                options={lineOptionsAnalytics}
                                series={lineDataAnalytics}
                                type="line"
                                width="1084"
                                height="300"
                            />
                        ) : isTablet ? (
                            <Chart
                                options={lineOptionsAnalytics}
                                series={lineDataAnalytics}
                                type="line"
                                width="708"
                                height="300"
                            />
                        ) : isMobile ? (
                            <Chart
                                series={lineDataAnalyticsMobile}
                                options={lineOptionsAnalyticsMobile}
                                type="bar"
                                width="248"
                                height="700"
                            />
                        ) : null}
                    </Item>
                </Grid>
                {/* Section 4 */}
                <Grid item xs={12} container spacing={3}>
                    <Grid
                        item
                        xs={isDesktop ? 7 : isTabletAndMobile ? 12 : null}
                    >
                        <div className={cx('section4')}>
                            <h3 className={cx('title')}>Recent Purchases</h3>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead
                                        sx={{
                                            backgroundColor: '#f3f5f9',
                                        }}
                                    >
                                        <TableRow>
                                            {PurchasesHeader.map(
                                                (item, index) => {
                                                    return (
                                                        <TableCell
                                                            key={index}
                                                            align="right"
                                                            sx={{
                                                                fontSize:
                                                                    '1.4rem',
                                                                padding:
                                                                    isDesktop
                                                                        ? '12px 16px 12px 24px'
                                                                        : isTablet
                                                                        ? '12px 16px 12px 24px'
                                                                        : isMobile
                                                                        ? ''
                                                                        : null,
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            {item.title}
                                                        </TableCell>
                                                    );
                                                },
                                            )}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {PurchasesData.map((item, index) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        align="right"
                                                        sx={{
                                                            fontSize: '1.3rem',
                                                            padding:
                                                                '12px 16px 12px 24px',
                                                            color: '#7d879c',
                                                            borderBottom:
                                                                '1px solid #e3e9ef',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        {item.oID}
                                                    </TableCell>
                                                    <TableCell
                                                        align="right"
                                                        sx={{
                                                            fontSize: '1.3rem',
                                                            padding:
                                                                '12px 16px 12px 24px',
                                                            color: '#7d879c',
                                                            borderBottom:
                                                                '1px solid #e3e9ef',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        {item.product}
                                                    </TableCell>
                                                    <TableCell
                                                        align="right"
                                                        sx={{
                                                            fontSize: '1.3rem',
                                                            padding:
                                                                '12px 16px 12px 24px',
                                                            color: '#7d879c',
                                                            borderBottom:
                                                                '1px solid #e3e9ef',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        {item.payment ===
                                                        'success' ? (
                                                            <span
                                                                className={cx(
                                                                    'purchases-success',
                                                                )}
                                                            >
                                                                Success
                                                                <DoneIcon />
                                                            </span>
                                                        ) : item.payment ===
                                                          'pending' ? (
                                                            <span
                                                                className={cx(
                                                                    'purchases-pending',
                                                                )}
                                                            >
                                                                Pending
                                                                <RefreshIcon />
                                                            </span>
                                                        ) : null}
                                                    </TableCell>
                                                    <TableCell
                                                        align="right"
                                                        sx={{
                                                            fontSize: '1.3rem',
                                                            padding:
                                                                '12px 16px 12px 24px',
                                                            color: '#7d879c',
                                                            borderBottom:
                                                                '1px solid #e3e9ef',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        {item.total} US$
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={isDesktop ? 5 : isTabletAndMobile ? 12 : null}
                    >
                        <div className={cx('section4')}>
                            <h3 className={cx('title')}>Stock Out Products</h3>
                            <TableContainer component={Box}>
                                <Table>
                                    <TableHead
                                        sx={{
                                            backgroundColor: '#f3f5f9',
                                        }}
                                    >
                                        <TableRow>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '1.4rem',
                                                    padding:
                                                        '12px 16px 12px 24px',
                                                }}
                                            >
                                                Product
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '1.4rem',
                                                    padding:
                                                        '12px 16px 12px 24px',
                                                }}
                                            >
                                                Stock
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                sx={{
                                                    textAlign: 'left',
                                                    fontSize: '1.4rem',
                                                    padding:
                                                        '12px 16px 12px 24px',
                                                }}
                                            >
                                                Total
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {StockOutProducts.map((item, index) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        align="right"
                                                        sx={{
                                                            textAlign: 'left',
                                                            fontSize: '1.3rem',
                                                            padding:
                                                                '12px 16px 12px 24px',
                                                            color: '#7d879c',
                                                            borderBottom:
                                                                '1px solid #e3e9ef',
                                                        }}
                                                    >
                                                        {item.product}
                                                    </TableCell>
                                                    <TableCell
                                                        align="right"
                                                        sx={{
                                                            textAlign: 'left',
                                                            fontSize: '1.3rem',
                                                            padding:
                                                                '12px 16px 12px 24px',
                                                            color: 'var(--primary-color)',
                                                            borderBottom:
                                                                '1px solid #e3e9ef',
                                                        }}
                                                    >
                                                        {item.stock}
                                                    </TableCell>
                                                    <TableCell
                                                        align="right"
                                                        sx={{
                                                            textAlign: 'left',
                                                            fontSize: '1.3rem',
                                                            padding:
                                                                '12px 16px 12px 24px',
                                                            color: '#7d879c',
                                                            borderBottom:
                                                                '1px solid #e3e9ef',
                                                        }}
                                                    >
                                                        {item.total} US$
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;
