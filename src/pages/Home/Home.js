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

import { useGetProductsFlashDealsQuery } from '~/reducers/productsApi';

const cx = classNames.bind(styles);

function Home() {
    const [heart, setHeart] = useState('none');
    const [unHeart, setUnHeart] = useState('');

    const [showAction, setShowAction] = useState('none');
    const [qtItem, setQtItem] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const handleShowHeart = () => {
        setHeart('block');
        setUnHeart('none');
    };

    const handleShowUnHeart = () => {
        setUnHeart('block');
        setHeart('none');
    };

    const handlePlusItem = () => {
        setShowAction('');
        setQtItem(qtItem + 1);
    };

    const handleMinusItem = () => {
        if (qtItem === 1) {
            setShowAction('none');
        }
        setQtItem(qtItem - 1);
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
                            <Alert severity="error" />
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
                                                handlePlusItem={handlePlusItem}
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
