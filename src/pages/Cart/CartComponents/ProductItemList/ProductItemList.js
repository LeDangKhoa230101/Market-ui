import styles from './ProductItemList.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

function ProductItemList() {
    return (
        <>
            <div className={cx('product-item')}>
                <div>
                    <Image src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" />
                    <div className={cx('product-body')}>
                        <h3 className={cx('product-name')}>
                            Silver High Neck Sweater
                        </h3>
                        <div className={cx('price-section')}>
                            <p className={cx('price')}>210,00 US$ x 1</p>
                            <p className={cx('total-price')}>210,00 US$</p>
                        </div>
                        <div className={cx('product-control')}>
                            <Button
                                sx={{
                                    minWidth: '32px',
                                    maxWidth: '32px',
                                    height: '32px',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(210, 63, 87, 0.5)',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                        border: '1px solid #D23F57',
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
                            <span className={cx('quantity')}>1</span>
                            <Button
                                sx={{
                                    minWidth: '32px',
                                    maxWidth: '32px',
                                    height: '32px',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(210, 63, 87, 0.5)',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                        border: '1px solid #D23F57',
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
                        </div>
                    </div>
                </div>
                <Button
                    sx={{
                        minWidth: '30px',
                        maxWidth: '30px',
                        height: '30px',
                        borderRadius: '999px',
                        margin: '14px 14px 0 0',
                        color: 'rgba(0, 0, 0, 0.54)',

                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                    }}
                >
                    <CloseIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                        }}
                    />
                </Button>
            </div>
            <div className={cx('product-item')}>
                <div>
                    <Image src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" />
                    <div className={cx('product-body')}>
                        <h3 className={cx('product-name')}>
                            Silver High Neck Sweater
                        </h3>
                        <div className={cx('price-section')}>
                            <p className={cx('price')}>210,00 US$ x 1</p>
                            <p className={cx('total-price')}>210,00 US$</p>
                        </div>
                        <div className={cx('product-control')}>
                            <Button
                                sx={{
                                    minWidth: '32px',
                                    maxWidth: '32px',
                                    height: '32px',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(210, 63, 87, 0.5)',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                        border: '1px solid #D23F57',
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
                            <span className={cx('quantity')}>1</span>
                            <Button
                                sx={{
                                    minWidth: '32px',
                                    maxWidth: '32px',
                                    height: '32px',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(210, 63, 87, 0.5)',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                        border: '1px solid #D23F57',
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
                        </div>
                    </div>
                </div>
                <Button
                    sx={{
                        minWidth: '30px',
                        maxWidth: '30px',
                        height: '30px',
                        borderRadius: '999px',
                        margin: '14px 14px 0 0',
                        color: 'rgba(0, 0, 0, 0.54)',

                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                    }}
                >
                    <CloseIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                        }}
                    />
                </Button>
            </div>
            <div className={cx('product-item')}>
                <div>
                    <Image src="https://bazaar.ui-lib.com/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" />
                    <div className={cx('product-body')}>
                        <h3 className={cx('product-name')}>
                            Silver High Neck Sweater
                        </h3>
                        <div className={cx('price-section')}>
                            <p className={cx('price')}>210,00 US$ x 1</p>
                            <p className={cx('total-price')}>210,00 US$</p>
                        </div>
                        <div className={cx('product-control')}>
                            <Button
                                sx={{
                                    minWidth: '32px',
                                    maxWidth: '32px',
                                    height: '32px',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(210, 63, 87, 0.5)',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                        border: '1px solid #D23F57',
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
                            <span className={cx('quantity')}>1</span>
                            <Button
                                sx={{
                                    minWidth: '32px',
                                    maxWidth: '32px',
                                    height: '32px',
                                    color: 'var(--primary-color)',
                                    border: '1px solid rgba(210, 63, 87, 0.5)',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(210, 63, 87, 0.04)',
                                        border: '1px solid #D23F57',
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
                        </div>
                    </div>
                </div>
                <Button
                    sx={{
                        minWidth: '30px',
                        maxWidth: '30px',
                        height: '30px',
                        borderRadius: '999px',
                        margin: '14px 14px 0 0',
                        color: 'rgba(0, 0, 0, 0.54)',

                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                    }}
                >
                    <CloseIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                        }}
                    />
                </Button>
            </div>
        </>
    );
}

export default ProductItemList;
