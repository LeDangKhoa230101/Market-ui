import styles from './Home.module.scss';
import Slide from './HomeComponents/Slide';
import TitleSection from '~/components/TitleSection';
import FlashDeals from './HomeComponents/FlashDeals';
import TopCate from './HomeComponents/TopCate';
import TopRating from './HomeComponents/TopRating';
import FeartureBrand from './HomeComponents/FeartureBrand';
import Arrivals from './HomeComponents/Arrivals';
import BigDiscount from './HomeComponents/BigDiscount';
import Category from './HomeComponents/Category';
import PhoneLayout from './HomeComponents/PhoneLayout';
import LaptopLayout from './HomeComponents/LaptopLayout';
import Banner from './HomeComponents/Banner';
import MoreForYou from './HomeComponents/MoreForYou';
import Support from './HomeComponents/Support';

import classNames from 'classnames/bind';
import BoltIcon from '@mui/icons-material/Bolt';
import Grid from '@mui/material/Grid';

const cx = classNames.bind(styles);

function Home() {
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

                <TopCate />
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

                {/* banner */}
                <Banner />
                {/* banner */}

                {/* LaptopLayout */}
                <LaptopLayout />
                {/* LaptopLayout */}

                {/* Category */}
                <Category />
                {/* Category */}

                {/* More for you */}
                <MoreForYou />
                {/* More for you */}

                {/* support */}
                <Support />
                {/* support */}
            </div>
        </div>
    );
}

export default Home;
