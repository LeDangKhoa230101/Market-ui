import styles from './FeaturedBrands.module.scss';
import ScrollToTop from '~/pages/ScrollToTop';
import ProductItem from '~/components/ProductItem';
import PaginationControl from '~/components/PaginationControl';
import { useGetListBrandPhoneQuery } from '~/reducers/productApi';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const CATE = [
    {
        name: 'Laptop',
        cate: '?cate=laptop',
        icon: (
            <LaptopMacOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Mobile',
        cate: '?cate=phone',
        icon: (
            <StayCurrentPortraitOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Camera',
        cate: '?cate=camera',
        icon: (
            <CameraAltOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Headphone',
        cate: '?cate=headphone',
        icon: (
            <HeadsetMicOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Accessories',
        cate: '?cate=accessories',
        icon: (
            <MouseOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Speaker',
        cate: 'speaker',
        icon: (
            <SpeakerOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
];

function FeaturedBrands() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const [cate, setCate] = useState('');
    const [active, setActive] = useState(null);

    const { data, isLoading, isError } = useGetListBrandPhoneQuery(cate);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(20);

    const indexOfLast = currentPage * limit;
    const indexOfFirst = indexOfLast - limit;
    const currentData = data?.slice(indexOfFirst, indexOfLast);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const handleActive = (item) => {
        setCate(item.cate);
        setActive(item);
    };

    return (
        <>
            <ScrollToTop />
            <div className={cx('wrapper-sale')}>
                <div className={cx('container')}>
                    <div className={cx('heading')}>
                        <span>Featured Brands</span>
                    </div>
                    {/* Category */}
                    <Grid container spacing={3}>
                        {CATE.map((item, index) => {
                            return (
                                <Grid
                                    item
                                    xs={
                                        isDesktop
                                            ? 2
                                            : isTablet
                                            ? 4
                                            : isMobile
                                            ? 6
                                            : null
                                    }
                                    key={index}
                                >
                                    <button
                                        onClick={() => handleActive(item)}
                                        className={cx(
                                            'cate-item',
                                            active === item ? 'active' : null,
                                        )}
                                    >
                                        {item.icon}
                                        <span className={cx('cate-name')}>
                                            {item.name}
                                        </span>
                                    </button>
                                </Grid>
                            );
                        })}
                    </Grid>
                    {/* Category */}

                    <div className={cx('content')}>
                        <Grid
                            container
                            rowSpacing={3}
                            sx={{
                                width: 'calc(100% + 23px)',
                                marginLeft: '-12px',
                            }}
                        >
                            {isLoading ? (
                                <CircularProgress disableShrink />
                            ) : isError ? (
                                <Alert
                                    severity="error"
                                    sx={{
                                        alignItems: 'center',
                                        fontSize: '1.4rem',
                                        marginLeft: '20px',
                                    }}
                                >
                                    This is an error alert — check it out!
                                </Alert>
                            ) : (
                                currentData?.map((product) => {
                                    return (
                                        <Grid
                                            item
                                            xs={
                                                isDesktop
                                                    ? 3
                                                    : isTablet
                                                    ? 4
                                                    : isMobile
                                                    ? 6
                                                    : null
                                            }
                                            key={product.id}
                                        >
                                            <ProductItem
                                                className={cx(
                                                    'product-item-modify',
                                                )}
                                                product={product}
                                            />
                                        </Grid>
                                    );
                                })
                            )}
                        </Grid>

                        <div className={cx('bottom')}>
                            <span className={cx('sale-text')}>
                                Showing 1-20 of {data?.length} Products
                            </span>
                            {currentData && (
                                <PaginationControl
                                    className={cx('sale')}
                                    totalCount={data?.length}
                                    limit={limit}
                                    onPageChange={onPageChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeaturedBrands;
