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
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const cx = classNames.bind(styles);

const OPTION_COLOR = ['Black', 'White', 'Blue'];
const OPTION_TYPE = ['12GB+128GB', '12GB+256GB', '12GB+512GB'];

function DetailProduct() {
    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(0),
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '76%',
    }));

    const ItemImg = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        width: '64px',
        height: '64px',
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '1px solid var(--primary-color)',
    }));

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

    const [qt, setQt] = useState(1);
    const [disabled] = useState('disabled-btn');

    const handlePlusQt = () => {
        setQt(qt + 1);
    };

    const handleMinusQt = () => {
        setQt(qt - 1);
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
                    <div>
                        <Image
                            className={cx('slide1-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=384&q=75"
                        />
                    </div>
                    <div>
                        <Image
                            className={cx('slide1-img')}
                            src="https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-deep-purple-fall22-a"
                        />
                    </div>
                    <div>
                        <Image
                            className={cx('slide1-img')}
                            src="https://www.three.co.uk/cs/Satellite?blobkey=id&blobwhere=1401331509853&blobcol=urldata&blobtable=MungoBlobs"
                        />
                    </div>
                </SlickSlider>
                <SlickSlider
                    {...settings2}
                    asNavFor={nav1}
                    ref={slider2}
                    className={cx('slider-subnav')}
                >
                    <div>
                        <ItemImg>
                            <Image
                                className={cx('slide2-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=384&q=75"
                            />
                        </ItemImg>
                    </div>
                    <div>
                        <ItemImg>
                            <Image
                                className={cx('slide2-img')}
                                src="https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-deep-purple-fall22-a"
                            />
                        </ItemImg>
                    </div>
                    <div>
                        <ItemImg>
                            <Image
                                className={cx('slide2-img')}
                                src="https://www.three.co.uk/cs/Satellite?blobkey=id&blobwhere=1401331509853&blobcol=urldata&blobtable=MungoBlobs"
                            />
                        </ItemImg>
                    </div>
                </SlickSlider>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <h1 className={cx('product-name')}>Classic Rolex Watch</h1>
                    <div>
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
                                value={3}
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
                        <span className={cx('price')}>126,00 US$</span>
                    </div>
                    <div>
                        <div className={cx('body_cart-action')}>
                            <Button
                                className={cx(qt === 1 ? disabled : '')}
                                onClick={handleMinusQt}
                                sx={{
                                    minWidth: '38px',
                                    height: '38px',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(210, 63, 87, 0.5)',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                        border: '1px solid rgb(210, 63, 87)',
                                    },
                                }}
                            >
                                <RemoveIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                />
                            </Button>
                            <span className={cx('body_cart-qt')}>{qt}</span>
                            <Button
                                onClick={handlePlusQt}
                                sx={{
                                    minWidth: '38px',
                                    height: '38px',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(210, 63, 87, 0.5)',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                        border: '1px solid rgb(210, 63, 87)',
                                    },
                                }}
                            >
                                <AddIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                />
                            </Button>
                            <span className={cx('available')}>
                                270 products available
                            </span>
                        </div>
                        <Button
                            sx={{
                                minWidth: '214px',
                                height: '40px',
                                color: 'var(--white)',
                                fontSize: '1.3rem',
                                boxShadow: '0px 4px 16px rgb(43 52 69 / 10%)',
                                backgroundColor: 'var(--primary-color)',
                                '&:hover': {
                                    opacity: '0.8',
                                    backgroundColor: 'var(--primary-color)',
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
                    </div>
                </Item>
            </Grid>
        </Grid>
    );
}

export default DetailProduct;
