import styles from './Home.module.scss';
import Slide from './HomeComponents/Slide';
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
import FlashDeals from './HomeComponents/FlashDeals';

import classNames from 'classnames/bind';
import Grid from '@mui/material/Grid';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <Slide />
            <div className={cx('home-container')}>
                {/* Flash Deals */}
                <FlashDeals />
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
