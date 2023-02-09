import styles from './BigDiscount.module.scss';
import TitleSection from '~/components/TitleSection';

import classNames from 'classnames/bind';
import Image from '~/components/Image/Image';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

import Slider from 'react-slick';
import { useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';

const cx = classNames.bind(styles);

const DISCOUNT = [
    {
        id: 1,
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=1920&q=75',
        name: 'dawj',
        curPr: 23232,
        dealP: 34382,
    },
    {
        id: 2,
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=1920&q=75',
        name: 'dvftrt',
        curPr: 23232,
        dealP: 343827,
    },
    {
        id: 3,
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=1920&q=75',
        name: 'bbgft',
        curPr: 23232,
        dealP: 343827,
    },
    {
        id: 4,
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=1920&q=75',
        name: 'sdfses',
        curPr: 23232,
        dealP: 343827,
    },
    {
        id: 5,
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=1920&q=75',
        name: 'vvvcxc',
        curPr: 23232,
        dealP: 343827,
    },
    {
        id: 6,
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=1920&q=75',
        name: 'wyyunb',
        curPr: 23232,
        dealP: 343827,
    },
    {
        id: 7,
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=1920&q=75',
        name: 'dalljkiwj',
        curPr: 23232,
        dealP: 343827,
    },
    {
        id: 8,
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=1920&q=75',
        name: 'anscuhfkasji',
        curPr: 23232,
        dealP: 343827,
    },
];

function BigDiscount() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };
    const sliderRef = useRef(null);
    return (
        <div className={cx('discount')}>
            <TitleSection
                to={'big-discount'}
                icon={
                    <CardGiftcardOutlinedIcon
                        sx={{
                            width: '24px',
                            height: '24px',
                            marginTop: '2px',
                            color: 'var(--primary-color)',
                        }}
                    />
                }
                title={'Big Discounts'}
            />
            <div className={cx('discount-slide')}>
                <Slider {...settings} ref={sliderRef}>
                    {DISCOUNT.map((item) => {
                        return (
                            <Box key={item.id}>
                                <div className={cx('discount-item')}>
                                    <div className={cx('discount-container')}>
                                        <Image
                                            className={cx('discount-img')}
                                            src={item.image}
                                        />
                                        <div className={cx('overlay')}></div>
                                    </div>
                                    <span className={cx('discount-name')}>
                                        {item.name}
                                    </span>
                                    <div className={cx('discount-price')}>
                                        <span
                                            className={cx(
                                                'discount-price-current',
                                            )}
                                        >
                                            {item.curPr} US$
                                        </span>
                                        <span
                                            className={cx(
                                                'discount-price-deal',
                                            )}
                                        >
                                            {item.dealP} US$
                                        </span>
                                    </div>
                                </div>
                            </Box>
                        );
                    })}
                </Slider>
                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className={cx('discount-slide-btn--left')}
                >
                    <ArrowBackIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                        }}
                    />
                </button>
                <button
                    onClick={() => sliderRef.current.slickNext()}
                    className={cx('discount-slide-btn--right')}
                >
                    <ArrowForwardIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                        }}
                    />
                </button>
            </div>
        </div>
    );
}

export default BigDiscount;
