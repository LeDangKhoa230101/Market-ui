import styles from './Home.scss';
import Slide from '~/layouts/components/Slide/Slide';
import ModalDetail from '~/components/ModalDetail';
import ProductItem from '~/components/ProductItem';

import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

import { useGetProductsFlashDealsQuery } from '~/reducers/productsApi';

import { addToCart } from '~/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

const cx = classNames.bind(styles);

const items = [
    {
        id: 1,
        name: 'NikeCourt Zoom Vapor Cage',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
        curPrice: 87.5,
        dealsPrice: 250.0,
        description:
            'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        rating: 4,
        cate: 'Cosmetic',
        like: false,
    },
    {
        id: 2,
        name: 'Classic Rolex Watch',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75',
        curPrice: 297.5,
        dealsPrice: 350.0,
        description:
            'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        rating: 5,
        cate: 'Cosmetic',
        like: false,
    },
    {
        id: 3,
        name: 'IPhone 13 Pro Max 128GB',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1920&q=75',
        curPrice: 108.0,
        dealsPrice: 150.0,
        description:
            'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        rating: 3,
        cate: 'Cosmetic',
        like: false,
    },
    {
        id: 4,
        name: 'Mi Led Smart Watch',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1920&q=75',
        curPrice: 142.2,
        dealsPrice: 180.0,
        description:
            'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        rating: 4,
        cate: 'Cosmetic',
        like: false,
    },
    {
        id: 5,
        name: 'NikeCourt Zoom Vapor Cage',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
        curPrice: 87.5,
        dealsPrice: 250.0,
        description:
            'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        rating: 4,
        cate: 'Cosmetic',
        like: false,
    },
    {
        id: 6,
        name: 'Classic Rolex Watch',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75',
        curPrice: 297.5,
        dealsPrice: 350.0,
        description:
            'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        rating: 5,
        cate: 'Cosmetic',
        like: false,
    },
    {
        id: 7,
        name: 'IPhone 14 Pro Max 128GB',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1920&q=75',
        curPrice: 108.0,
        dealsPrice: 150.0,
        description:
            'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        rating: 3,
        cate: 'Cosmetic',
        like: false,
    },
    {
        id: 8,
        name: 'Mi Led Smart Watch',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1920&q=75',
        curPrice: 142.2,
        dealsPrice: 180.0,
        description:
            'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.',
        rating: 4,
        cate: 'Cosmetic',
        like: false,
    },
];

function Home() {
    const [heart, setHeart] = useState('none');
    const [unHeart, setUnHeart] = useState('');

    const [showAction, setShowAction] = useState('none');
    const [qtItem, setQtItem] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handleShowHeart = () => {
        setHeart('block');
        setUnHeart('none');
    };

    const handleShowUnHeart = () => {
        setUnHeart('block');
        setHeart('none');
    };

    const handlePlusItem = (product) => {
        setShowAction('');
        setQtItem(qtItem + 1);
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
        if (qtItem === 1) {
            setShowAction('none');
        }
        setQtItem(qtItem - 1);
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

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
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

    // display product flash deals
    const { data, error, isLoading } = useGetProductsFlashDealsQuery();

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
                        {isLoading ? (
                            <CircularProgress />
                        ) : error ? (
                            <Alert severity="error">
                                This is an error alert - check it out
                            </Alert>
                        ) : (
                            <Slider {...settings} ref={sliderRef}>
                                {data.map((product, index) => {
                                    return (
                                        <Box key={index}>
                                            <ProductItem
                                                product={product}
                                                handleShowModal={
                                                    handleShowModal
                                                }
                                                handleShowUnHeart={
                                                    handleShowUnHeart
                                                }
                                                heart={heart}
                                                handleShowHeart={
                                                    handleShowHeart
                                                }
                                                unHeart={unHeart}
                                                handleMinusItem={
                                                    handleMinusItem
                                                }
                                                showAction={showAction}
                                                qtItem={qtItem}
                                                handlePlusItem={() =>
                                                    handlePlusItem(product)
                                                }
                                            />
                                        </Box>
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

                    {/* Modal detail */}
                    <ModalDetail open={showModal} func={handleHideModal} />
                    {/* Modal detail */}
                </div>
                {/* Flash Deals */}
            </div>
        </div>
    );
}

export default Home;
