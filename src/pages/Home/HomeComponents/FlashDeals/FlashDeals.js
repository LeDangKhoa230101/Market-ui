import styles from './FlashDeals.module.scss';
import TitleSection from '~/components/TitleSection';
import ProductItem from '~/components/ProductItem';

import { useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useSnackbar } from 'notistack';
import BoltIcon from '@mui/icons-material/Bolt';

import { addToCart } from '~/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FlashDeals() {
    const data = useSelector((state) => state.productsFlashDeals.items);
    const status = useSelector((state) => state.productsFlashDeals.status);

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handlePlusItem = (product) => {
        dispatch(addToCart(product));
        enqueueSnackbar(
            <div className={cx('snackbar')}>
                <CheckCircleSharpIcon
                    sx={{
                        marginRight: '8px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'var(--white)',
                        color: '#33d067',
                        borderRadius: '999px',
                    }}
                />
                <span className={cx('snackbar-title')}>Added to cart</span>
            </div>,
        );
    };

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const sliderRef = useRef(null);

    return (
        <div className={cx('deals')}>
            <TitleSection
                to={'sale-page'}
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
            <div className={cx('deal-slide')}>
                {status === 'loading' ? (
                    <CircularProgress />
                ) : status === 'failed' ? (
                    <Alert
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        severity="error"
                    >
                        This is an error alert — check it out!
                    </Alert>
                ) : (
                    <Slider {...settings} ref={sliderRef}>
                        {data.map((product) => {
                            return (
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                    handlePlusItem={() =>
                                        handlePlusItem(product)
                                    }
                                />
                            );
                        })}
                    </Slider>
                )}
                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className={cx('deals-slide-btn--left')}
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
                    className={cx('deals-slide-btn--right')}
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

export default FlashDeals;
