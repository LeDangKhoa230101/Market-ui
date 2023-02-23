import styles from './Dashboard.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const cx = classNames.bind(styles);

function Dashboard() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(3),
        borderRadius: '8px',
        height: '100%',
        boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
    }));

    return (
        <div className={cx('wrapper')}>
            {/* Section 1 */}
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Item>
                            <div className={cx('section1')}>
                                <div className={cx('section1-body')}>
                                    <h3>Good Morning, Maruf!</h3>
                                    <p>
                                        Here's what happening with your store
                                        today!
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
                    <Grid item xs={6} container spacing={3}>
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
                                <p className={cx('text')}>
                                    Total Shipping Cost
                                </p>
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
                </Grid>
            </Box>
        </div>
    );
}

export default Dashboard;
