import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Cart.scss';
import Button from '~/components/Button/Button';
import Image from '~/components/Image/Image';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faMinus,
    faPlus,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';

const cx = classNames.bind(styles);

const ITEM_CART = [
    {
        id: 1,
        name: 'Giày Nike màu đen',
        image: 'https://cf.shopee.vn/file/sg-11134201-22110-tijbfxajhbkv02_tn',
        price: 370000,
    },
    {
        id: 2,
        name: 'Giày Nike màu trắng',
        image: 'https://cf.shopee.vn/file/64a07a36beb506d909be0ecdefb6a14f_tn',
        price: 450000,
    },
    {
        id: 3,
        name: 'Giày Nike màu xanh',
        image: 'https://cf.shopee.vn/file/sg-11134201-22110-ta67beh7iljvd4_tn',
        price: 430000,
    },
];

function Cart() {
    const [showCart, setShowCart] = useState(false);
    const [quantityItem, setQuantityItem] = useState(1);

    const [classMinus, setClassMinus] = useState(
        'body_cart-action-btn--disable',
    );

    const handleShowCart = () => {
        setShowCart(true);
    };

    const handleHideCart = () => {
        setShowCart(false);
    };

    const handlePlusItem = () => {
        setQuantityItem(quantityItem + 1);
        setClassMinus('');
    };

    const handleMinusItem = () => {
        if (quantityItem === 2) {
            setClassMinus('body_cart-action-btn--disable');
        }
        setQuantityItem(quantityItem - 1);
    };

    return (
        <>
            <Button onClick={handleShowCart} className={cx('action-btn')}>
                <FontAwesomeIcon
                    icon={faBagShopping}
                    className={cx('action-icon')}
                />
                <span className={cx('cart-item')}>3</span>
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
                                3 item
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
                    <div className={cx('body_cart')}>
                        {ITEM_CART.map((item) => (
                            <div key={item.id} className={cx('body_cart-item')}>
                                <div className={cx('body_cart-action')}>
                                    <Button
                                        onClick={handlePlusItem}
                                        className={cx('body_cart-action-btn')}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                    <span className={cx('body_cart-qt')}>
                                        {quantityItem}
                                    </span>
                                    <Button
                                        onClick={handleMinusItem}
                                        className={cx(
                                            'body_cart-action-btn',
                                            classMinus,
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
                                    <span className={cx('body_cart-price')}>
                                        {item.price * quantityItem} US$
                                    </span>
                                </div>
                                <Button className={cx('body_cart-close')}>
                                    <FontAwesomeIcon
                                        className={cx('body_cart-close-icon')}
                                        icon={faXmark}
                                    />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className={cx('footer_cart')}>
                        <Button
                            className={cx(
                                'footer_cart-btn',
                                'footer_cart-btn-checkout',
                            )}
                        >
                            Checkout Now (460,000 US$)
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
