import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Cart.scss';
import Button from '~/components/Button/Button';
import Image from '~/components/Image/Image';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faMinus,
    faPlus,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import classNames from 'classnames/bind';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import { addToCart, getTotalMoneys } from '~/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeFromCart, removeItem } from '~/reducers/cartSlice';

const cx = classNames.bind(styles);

function Cart() {
    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart); //state.cart(cart từ store)

    useEffect(() => {
        dispatch(getTotalMoneys());
    }, [cart, dispatch]);

    const handleShowCart = () => {
        setShowCart(true);
    };

    const handleHideCart = () => {
        setShowCart(false);
    };

    const handlePlusItem = (item) => {
        dispatch(addToCart(item));
    };

    const handleMinusItem = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleDeleteItem = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <>
            <Button onClick={handleShowCart} className={cx('action-btn')}>
                <FontAwesomeIcon
                    icon={faBagShopping}
                    className={cx('action-icon')}
                />
                {cart.carts.length > 0 && (
                    <span className={cx('cart-item')}>{cart.carts.length}</span>
                )}
            </Button>
            <Drawer open={showCart} anchor="right" onClose={handleHideCart}>
                <Box className={cx('cart')}>
                    <div className={cx('header_cart')}>
                        <div className={cx('header_cart-right')}>
                            <FontAwesomeIcon
                                className={cx('header_cart-bag')}
                                icon={faBagShopping}
                            />
                            <span className={cx('header_cart-item')}>
                                {cart.carts.length} item
                            </span>
                        </div>
                        <Button
                            onClick={handleHideCart}
                            className={cx('header_cart-close')}
                        >
                            <FontAwesomeIcon
                                className={cx('header_cart-close-icon')}
                                icon={faXmark}
                            />
                        </Button>
                    </div>
                    {cart.carts.length === 0 ? (
                        <div className={cx('body_cart')}>
                            <div className={cx('cart-empty')}>
                                <ShoppingBagRoundedIcon
                                    sx={{
                                        width: '60px',
                                        height: '60px',
                                        color: 'var(--primary-color)',
                                    }}
                                />
                                <span>Your shopping bag is empty.</span>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('body_cart')}>
                            {cart.carts.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('body_cart-item')}
                                >
                                    <div className={cx('body_cart-action')}>
                                        <Button
                                            onClick={() => handlePlusItem(item)}
                                            className={cx(
                                                'body_cart-action-btn',
                                            )}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                        <span className={cx('body_cart-qt')}>
                                            {item.totalQuantity}
                                        </span>
                                        <Button
                                            onClick={() =>
                                                handleMinusItem(item)
                                            }
                                            className={cx(
                                                'body_cart-action-btn',
                                            )}
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </Button>
                                    </div>
                                    <Image
                                        className={cx('body_cart-img')}
                                        src={item.image}
                                    />
                                    <div className={cx('body_cart-des')}>
                                        <span className={cx('body_cart-name')}>
                                            {item.name}
                                        </span>
                                        <span
                                            className={cx(
                                                'body_cart-current-price',
                                            )}
                                        >
                                            {item.curPrice} US$ x{' '}
                                            {item.totalQuantity}
                                        </span>
                                        <span className={cx('body_cart-price')}>
                                            {item.curPrice * item.totalQuantity}{' '}
                                            US$
                                        </span>
                                    </div>
                                    <Button
                                        onClick={() => handleDeleteItem(item)}
                                        className={cx('body_cart-close')}
                                    >
                                        <FontAwesomeIcon
                                            className={cx(
                                                'body_cart-close-icon',
                                            )}
                                            icon={faXmark}
                                        />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className={cx('footer_cart')}>
                        <Button
                            className={cx(
                                'footer_cart-btn',
                                'footer_cart-btn-checkout',
                            )}
                        >
                            Checkout Now ({cart.totalMoneyFromCart} US$)
                        </Button>
                        <Button
                            className={cx(
                                'footer_cart-btn',
                                'footer_cart-btn-view',
                            )}
                        >
                            View Cart
                        </Button>
                    </div>
                </Box>
            </Drawer>
        </>
    );
}

export default Cart;
