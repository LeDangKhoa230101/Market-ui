import styles from './Home.scss';
import Slide from '~/layouts/components/Slide/Slide';
import TitleSection from '~/components/TitleSection';
import FlashDeals from '~/layouts/components/FlashDeals';
import TopCate from '~/layouts/components/TopCate';
import TopRating from '~/layouts/components/TopRating';
import FeartureBrand from '~/layouts/components/FeartureBrand';
import Arrivals from '~/layouts/components/Arrivals';
import BigDiscount from '~/layouts/components/BigDiscount';

import classNames from 'classnames/bind';
import BoltIcon from '@mui/icons-material/Bolt';
import WidgetsIcon from '@mui/icons-material/Widgets';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import PhoneLayout from '~/layouts/PhoneLayout';

const cx = classNames.bind(styles);

function Home() {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        backgroundColor: 'var(--white)',
        borderRadius: '8px',
    }));

    return (
        <div className={cx('wrapper-home')}>
            <Slide />
            <div className={cx('home-container')}>
                {/* Flash Deals */}
                <div className={cx('deals')}>
                    <TitleSection
                        icon={
                            <BoltIcon
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                    marginTop: '2px',
                                    color: 'var(--primary-color)',
                                }}
                            />
                        }
                        title={'Flash Deals'}
                    />
                    {/* Slide deals */}
                    <FlashDeals />
                    {/* Slide deals */}
                </div>
                {/* Flash Deals */}

                {/* Top Categories */}
                <div className={cx('top-cate')}>
                    <TitleSection
                        icon={
                            <WidgetsIcon
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                    marginTop: '2px',
                                    color: 'var(--primary-color)',
                                }}
                            />
                        }
                        title={'Top Categories'}
                    />
                    {/* Top cate content */}
                    <TopCate />
                    {/* Top cate content */}
                </div>
                {/* Top Categories */}

                {/* Top rate and Featured Brands */}
                <div className={cx('rate-feature')}>
                    <Grid container spacing={4}>
                        {/* Top rate */}
                        <TopRating />
                        {/* Top rate */}
                        {/* Featured Brands */}
                        <FeartureBrand />
                        {/* Featured Brands */}
                    </Grid>
                </div>
                {/* Top rate and Featured Brands */}

                {/* New Arrivals */}
                <Arrivals />
                {/* New Arrivals */}

                {/* Big Discounts */}
                <BigDiscount />
                {/* Big Discounts */}

                {/* phone layout */}
                <PhoneLayout />
                {/* phone layout */}
            </div>
        </div>
    );
}

export default Home;
