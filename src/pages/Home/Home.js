import styles from './Home.scss';
import Slide from '~/layouts/components/Slide/Slide';
import ProductItem from '~/components/ProductItem';

import { useRef } from 'react';
import classNames from 'classnames/bind';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useSnackbar } from 'notistack';

import { addToCart } from '~/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Home() {
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
                <span>Added to cart</span>
            </div>,
        );
    };

    const handleMinusItem = () => {
        enqueueSnackbar(
            <div className={cx('snackbar')}>
                <CancelSharpIcon
                    sx={{
                        marginRight: '8px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'var(--white)',
                        color: 'var(--primary-color)',
                        borderRadius: '999px',
                    }}
                />
                <span>Remove from cart</span>
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
        <div className={cx('wrapper-home')}>
            <Slide />
            <div className={cx('home-container')}>
                {/* Flash Deals */}
                <div className={cx('deals')}>
                    <div className={cx('deals-header')}>
                        <div className={cx('deals-heading')}>
                            <BoltIcon
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                    marginTop: '2px',
                                    color: 'var(--primary-color)',
                                }}
                            />
                            <span className={cx('deals-title')}>
                                Flash Deals
                            </span>
                        </div>
                        <Button
                            sx={{
                                fontSize: '1.4rem',
                                textTransform: 'capitalize',
                                color: '#7d879c',
                                height: '26px',
                            }}
                            className={cx('deals-right')}
                        >
                            View all
                            <ArrowRightIcon
                                sx={{
                                    width: '20px',
                                    height: '20px',
                                }}
                            />
                        </Button>
                    </div>
                    {/* Slide deals */}
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
                                            handleMinusItem={handleMinusItem}
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
                    {/* Slide deals */}
                </div>
                {/* Flash Deals */}
            </div>
        </div>
    );
}

export default Home;
