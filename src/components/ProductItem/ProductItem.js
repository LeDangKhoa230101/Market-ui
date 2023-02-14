import styles from './ProductItem.module.scss';
import Image from '~/components/Image/Image';
import ModalDetail from '~/components/ModalDetail';

import classNames from 'classnames/bind';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function ProductItem({ product, handlePlusItem, className }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 787px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 786px)',
    });

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className={cx('product-item')}>
                <Link to={`/products/${product.id}`}>
                    <Image
                        className={cx(
                            'product__item-img',
                            isMobile ? className : null,
                        )}
                        src={product.image}
                    />
                </Link>
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
                            <Checkbox
                                sx={{
                                    width: '36px',
                                    height: '36px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                }}
                                icon={
                                    <FavoriteBorder
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                            color: 'rgb(0 0 0 / 26%)',
                                        }}
                                    />
                                }
                                checkedIcon={
                                    <Favorite
                                        sx={{
                                            width: '20px',
                                            height: '20px',
                                            color: 'var(--primary-color)',
                                        }}
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('product__item-body')}>
                    <div className={cx('product__item-body-right')}>
                        <Link to={`/products/${product.id}`}>
                            <span className={cx('product__item-name')}>
                                {product.name}
                            </span>
                        </Link>
                        <Stack className={cx('stack')}>
                            <Rating
                                value={product.rating}
                                size={
                                    isDesktop
                                        ? 'large'
                                        : isTablet
                                        ? 'large'
                                        : isMobile
                                        ? 'medium'
                                        : null
                                }
                            />
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
                            <ShoppingCartOutlinedIcon />
                        </Button>
                    </div>
                </div>
                {/* Modal detail */}
                <ModalDetail
                    name={product.name}
                    cate={product.cate}
                    curPrice={product.curPrice}
                    description={product.description}
                    images={product.sliderImage}
                    rating={product.rating}
                    product={product}
                    open={showModal}
                    func={handleHideModal}
                />
                {/* Modal detail */}
            </div>
        </>
    );
}

ProductItem.propTypes = {
    product: PropTypes.object,
    handleShowModal: PropTypes.func,
    handlePlusItem: PropTypes.func,
    className: PropTypes.string,
};

export default ProductItem;
