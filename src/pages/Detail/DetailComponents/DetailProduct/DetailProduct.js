import styles from './DetailProduct.module.scss';

import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';
import SlickSlider from 'react-slick';
import Image from '~/components/Image/Image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState, useRef, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/reducers/cartSlice';
import { useSnackbar } from 'notistack';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

const cx = classNames.bind(styles);

const OPTION_COLOR = ['Black', 'White', 'Blue'];
const OPTION_TYPE = ['12GB+128GB', '12GB+256GB', '12GB+512GB'];

function DetailProduct({ product }) {
    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0),
        maxWidth: '87%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }));

    const ItemImg = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        width: '64px',
        height: '64px',
        marginLeft: '9px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
    }));

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    const settings1 = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    };

    const settings2 = {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        draggable: false,
    };

    const [typeColor, setTypeColor] = useState('');
    const [typeOption, setTypeOption] = useState('');

    const handleAddToCart = (product) => {
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

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <SlickSlider
                    {...settings1}
                    asNavFor={nav2}
                    ref={slider1}
                    className={cx('slider-nav')}
                >
                    {product.sliderImage.map((item, index) => {
                        return (
                            <div key={index}>
                                <Image
                                    className={cx('slide1-img')}
                                    src={item.imageDetail}
                                />
                            </div>
                        );
                    })}
                </SlickSlider>
                <SlickSlider
                    {...settings2}
                    asNavFor={nav1}
                    ref={slider2}
                    className={cx('slider-subnav')}
                >
                    {product.sliderImage.map((item, index) => {
                        return (
                            <div key={index}>
                                <ItemImg className={cx('slick-active-style')}>
                                    <Image
                                        className={cx('slide2-img')}
                                        src={item.imageDetail}
                                    />
                                </ItemImg>
                            </div>
                        );
                    })}
                </SlickSlider>
            </Grid>

            <Grid item xs={6}>
                <Item>
                    <h1 className={cx('product-name')}>{product.name}</h1>
                    <div className={cx('product-brand-rate')}>
                        <div className={cx('product-brand')}>
                            Brand:
                            <span className={cx('product-brand-name')}>
                                Xiaomi
                            </span>
                        </div>
                        <div className={cx('product-rate')}>
                            <span className={cx('product-rate-text')}>
                                Rated:{' '}
                            </span>
                            <Rating
                                sx={{
                                    marginBottom: '2px',
                                }}
                                value={product.rating}
                                size="large"
                            />
                        </div>
                    </div>
                    {/* color */}
                    <div className={cx('option-type')}>
                        <span className={cx('option-text')}>Color:</span>
                        <div>
                            {OPTION_COLOR.map((item) => {
                                return (
                                    <button
                                        key={item}
                                        className={cx(
                                            'option-type-btn',
                                            typeColor === item
                                                ? 'active'
                                                : null,
                                        )}
                                        onClick={() => setTypeColor(item)}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* type */}
                    <div className={cx('option-type')}>
                        <span className={cx('option-text')}>Type:</span>
                        <div>
                            {OPTION_TYPE.map((item) => {
                                return (
                                    <button
                                        key={item}
                                        className={cx(
                                            'option-type-btn',
                                            typeOption === item
                                                ? 'active'
                                                : null,
                                        )}
                                        onClick={() => setTypeOption(item)}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* price */}
                    <div>
                        <span className={cx('price')}>
                            {product.curPrice} US$
                        </span>
                        <span className={cx('available')}>
                            270 products available
                        </span>
                    </div>
                    <div className={cx('action')}>
                        <Button
                            onClick={() => handleAddToCart(product)}
                            sx={{
                                minWidth: '214px',
                                height: '40px',
                                fontWeight: 600,
                                color: 'var(--primary-color)',
                                fontSize: '1.3rem',
                                boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
                                border: '1px solid var(--primary-color)',
                                '&:hover': {
                                    backgroundColor: 'rgba(210, 63, 87, 0.04)',
                                    border: '1px solid rgb(210, 63, 87)',
                                },
                            }}
                        >
                            <ShoppingCartCheckoutIcon
                                sx={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '4px',
                                }}
                            />
                            Add to cart
                        </Button>
                        <Button
                            sx={{
                                minWidth: '214px',
                                height: '40px',
                                fontWeight: 600,
                                color: 'var(--white)',
                                fontSize: '1.3rem',
                                marginLeft: '14px',
                                boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
                                backgroundColor: 'var(--primary-color)',
                                '&:hover': {
                                    opacity: '0.8',
                                    backgroundColor: 'var(--primary-color)',
                                },
                            }}
                        >
                            Buy Now
                        </Button>
                    </div>

                    <div className={cx('sold-by')}>
                        <span>Sold By:</span>
                        <p>Mobile Store</p>
                    </div>
                </Item>
            </Grid>
        </Grid>
    );
}

export default DetailProduct;
