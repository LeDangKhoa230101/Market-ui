import styles from './PhoneLayout.module.scss';
import TitleSection from '~/components/TitleSection';
import { useGetListBrandPhoneQuery } from '~/reducers/productApi';
import ProductItem from '~/components/ProductItem';
import PaginationControl from '~/components/PaginationControl';
import { addToCart } from '~/reducers/cartSlice';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const SIDEBAR_BRAND = [
    {
        name: 'Apple',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fapple.png&w=32&q=75',
        brand: '&brand=apple',
    },
    {
        name: 'Xiaomi',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fxiaomi.png&w=32&q=75',
        brand: '&brand=xiaomi',
    },
    {
        name: 'Samsung',
        image: 'https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/256_144_3.png?$512_N_PNG$',
        brand: '&brand=samsung',
    },
    {
        name: 'Asus',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fasus.png&w=32&q=75',
        brand: '&brand=asus',
    },
    {
        name: 'Oppo',
        image: 'https://media.loveitopcdn.com/3807/logo-oppo-1.jpg',
        brand: '&brand=oppo',
    },
    {
        name: 'Vivo',
        image: 'https://www.vivosmartphone.vn/themes/vivo/img/vivo-fb-page.png',
        brand: '&brand=vivo',
    },
];

const SIDEBAR_SHOP = [
    {
        name: 'KTsmartphone',
        image: 'https://img.ws.mms.shopee.vn/4370fa204e94be8c491a29561517bf6e_tn',
        shop: '',
    },
    {
        name: 'Bi Store45',
        image: 'https://cf.shopee.vn/file/3e7d3afb321d835f5ed68f01df2434d9_tn',
        shop: '',
    },
    {
        name: 'CD_Store',
        image: 'https://cf.shopee.vn/file/6e1c4b11f729d0fbffe806e09866802f_tn',
        shop: '',
    },
    {
        name: 'Sky Phone City',
        image: 'https://cf.shopee.vn/file/ae669fb68de8d7d8840e83b1e99d0798_tn',
        shop: '',
    },
    {
        name: 'AZparts',
        image: 'https://cf.shopee.vn/file/359f6678beebda758341cf0a4b6e8b65_tn',
        shop: '',
    },
];

function PhoneLayout() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const Tab = styled(TabUnstyled)`
        color: #7d879c;
        cursor: pointer;
        font-size: 2.2rem;
        font-weight: 600;
        padding: 8px;
        border: none;
        min-width: 100px;
        background-color: transparent;

        &.${tabUnstyledClasses.selected} {
            color: var(--text-color);
        }
    `;

    const TabsList = styled(TabsListUnstyled)(
        () => `
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`,
    );

    const [brand, setBrand] = useState('');
    const [active, setActive] = useState(null);

    const { data } = useGetListBrandPhoneQuery(brand);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(6);

    const indexOfLast = currentPage * limit;
    const indexOfFirst = indexOfLast - limit;
    const currentData = data?.slice(indexOfFirst, indexOfLast);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handlePlusItem = (product) => {
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

    const handleActive = (item) => {
        setBrand(item.brand);
        setActive(item);
    };

    return (
        <div className={cx('phone-layout')}>
            <Grid
                container
                spacing={3}
                sx={{
                    width: 'calc(100% + 34px)',
                    alignItems: 'flex-start',
                }}
            >
                {/* Side bar */}
                <Grid
                    sx={{
                        display: isMobile && 'none',
                    }}
                    item
                    xs={isDesktop ? 3 : isTabletAndMobile ? 4 : null}
                >
                    <Box className={cx('sidebar')}>
                        <TabsUnstyled defaultValue={0}>
                            <TabsList>
                                <Tab>Brands</Tab>
                                <span className={cx('sidebar-separation')}>
                                    |
                                </span>
                                <Tab>Shops</Tab>
                            </TabsList>
                            <TabPanelUnstyled value={0}>
                                {SIDEBAR_BRAND.map((item, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleActive(item)}
                                            className={cx(
                                                'sidebar-item',
                                                active === item
                                                    ? 'active'
                                                    : null,
                                            )}
                                        >
                                            <Image
                                                className={cx('sidebar-img')}
                                                src={item.image}
                                            />
                                            <span
                                                className={cx('sidebar-name')}
                                            >
                                                {item.name}
                                            </span>
                                        </button>
                                    );
                                })}
                            </TabPanelUnstyled>
                            <TabPanelUnstyled value={2}>
                                {SIDEBAR_SHOP.map((item, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className={cx('sidebar-item')}
                                        >
                                            <Image
                                                className={cx('sidebar-img')}
                                                src={item.image}
                                            />
                                            <span
                                                className={cx('sidebar-name')}
                                            >
                                                {item.name}
                                            </span>
                                        </button>
                                    );
                                })}
                            </TabPanelUnstyled>
                        </TabsUnstyled>
                    </Box>
                </Grid>
                {/* Side bar */}

                <Grid
                    item
                    xs={isDesktop ? 9 : isTablet ? 8 : isMobile ? 12 : null}
                >
                    <TitleSection title="Mobile Phones" />
                    <div className={cx('wrapper')}>
                        <Grid
                            container
                            rowSpacing={
                                isDesktop
                                    ? 3
                                    : isTablet
                                    ? 3
                                    : isMobile
                                    ? 2
                                    : null
                            }
                        >
                            {currentData?.map((product) => {
                                return (
                                    <Grid
                                        item
                                        xs={
                                            isDesktop
                                                ? 4
                                                : isTabletAndMobile
                                                ? 6
                                                : null
                                        }
                                        key={product.id}
                                    >
                                        <ProductItem
                                            product={product}
                                            className={cx('product-item-phone')}
                                            handlePlusItem={() =>
                                                handlePlusItem(product)
                                            }
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>

                        {currentData && (
                            <PaginationControl
                                totalCount={data?.length}
                                limit={limit}
                                onPageChange={onPageChange}
                            />
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default PhoneLayout;
