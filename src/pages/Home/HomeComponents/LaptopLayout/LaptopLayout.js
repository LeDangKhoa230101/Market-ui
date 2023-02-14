import styles from './LaptopLayout.module.scss';
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
        name: 'Acer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/2560px-Acer_2011.svg.png',
        brand: '&brand=apple',
    },
    {
        name: 'Asus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png',
        brand: '&brand=xiaomi',
    },
    {
        name: 'Dell',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2048px-Dell_logo_2016.svg.png',
        brand: '&brand=samsung',
    },
    {
        name: 'Hp',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png',
        brand: '&brand=asus',
    },
    {
        name: 'Lenovo',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png',
        brand: '&brand=oppo',
    },
    {
        name: 'MacOS',
        image: 'https://cdn.unlockboot.com/wp-content/uploads/2018/12/type-apple-logo.jpg',
        brand: '&brand=vivo',
    },
];

const SIDEBAR_SHOP = [
    {
        name: 'LaptopLC',
        image: 'https://cf.shopee.vn/file/a346178f82ac211177a629373aebbb52_tn',
        shop: '',
    },
    {
        name: 'LaptopNhatBan',
        image: 'https://cf.shopee.vn/file/2061b57c9ed90bfcda9482caba49e609_tn',
        shop: '',
    },
    {
        name: 'TienHungLaptop',
        image: 'https://cf.shopee.vn/file/d40eec82f9cb5cf7a185db55d91840f7_tn',
        shop: '',
    },
];

function LaptopLayout() {
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
        <div className={cx('laptop-layout')}>
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
                    <TitleSection title="Laptops" />
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

export default LaptopLayout;
