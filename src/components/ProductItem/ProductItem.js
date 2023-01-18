import styles from './ProductItem.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ProductItem({
    product,
    handleShowModal,
    handleShowUnHeart,
    heart,
    handleShowHeart,
    unHeart,
    handleMinusItem,
    showAction,
    qtItem,
    handlePlusItem,
}) {
    return (
        <div className={cx('product-item')}>
            <Image className={cx('product__item-img')} src={product.image} />
            <div className={cx('product__item-top')}>
                <span className={cx('product__item-sale')}>
                    {product.deals} off
                </span>
                <div className={cx('product__item-follow')}>
                    <VisibilityIcon
                        onClick={handleShowModal}
                        sx={{
                            width: '36px',
                            height: '36px',
                            color: 'rgb(0 0 0 / 26%)',
                            padding: '8px',
                            cursor: 'pointer',
                            borderRadius: '999px',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        }}
                    />

                    <div className={cx('product__item-like')}>
                        <FavoriteIcon
                            onClick={handleShowUnHeart}
                            sx={{
                                display: heart,
                                width: '36px',
                                height: '36px',
                                color: 'var(--primary-color)',
                                padding: '8px',
                                cursor: 'pointer',
                                borderRadius: '999px',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                },
                            }}
                        />
                        <FavoriteBorderIcon
                            onClick={handleShowHeart}
                            sx={{
                                display: unHeart,
                                width: '36px',
                                height: '36px',
                                color: 'rgb(0 0 0 / 26%)',
                                padding: '8px',
                                cursor: 'pointer',
                                borderRadius: '999px',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('product__item-body')}>
                <div className={cx('product__item-body-right')}>
                    <span className={cx('product__item-name')}>
                        {product.name}
                    </span>
                    <Stack
                        sx={{
                            margin: '9px 0',
                        }}
                    >
                        <Rating value={product.rating} size="large" />
                    </Stack>
                    <div className={cx('product__item-price')}>
                        <span className={cx('product__item-price-curr')}>
                            {product.curPrice} US$
                        </span>
                        <span className={cx('product__item-price-deals')}>
                            {product.dealsPrice} US$
                        </span>
                    </div>
                </div>
                <div className={cx('product__item-body-action')}>
                    <Button
                        onClick={handleMinusItem}
                        sx={{
                            display: showAction,
                            minWidth: '0',
                            minHeight: '0',
                            width: '28px',
                            height: '28px',
                            color: 'var(--primary-color)',
                            border: '1px solid rgba(210, 63, 87, 0.5)',
                            '&:hover': {
                                backgroundColor: 'rgba(210, 63, 87, 0.04)',
                                border: '1px solid var(--primary-color)',
                            },
                        }}
                    >
                        <RemoveIcon />
                    </Button>
                    <span
                        style={{
                            display: showAction,
                        }}
                        className={cx('product__item-qt')}
                    >
                        {qtItem}
                    </span>
                    <Button
                        onClick={handlePlusItem}
                        sx={{
                            minWidth: '0',
                            minHeight: '0',
                            width: '28px',
                            height: '28px',
                            color: 'var(--primary-color)',
                            border: '1px solid rgba(210, 63, 87, 0.5)',
                            '&:hover': {
                                backgroundColor: 'rgba(210, 63, 87, 0.04)',
                                border: '1px solid var(--primary-color)',
                            },
                        }}
                    >
                        <AddIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    product: PropTypes.object,
    handleShowModal: PropTypes.func,
    handleShowUnHeart: PropTypes.func,
    heart: PropTypes.node,
    handleShowHeart: PropTypes.func,
    unHeart: PropTypes.node,
    handleMinusItem: PropTypes.func,
    showAction: PropTypes.node,
    qtItem: PropTypes.node,
    handlePlusItem: PropTypes.func,
};

export default ProductItem;
