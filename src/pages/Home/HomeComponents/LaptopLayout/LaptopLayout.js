import styles from './LaptopLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import TitleSection from '~/components/TitleSection';

import Acer from '~/laptops/brands/Acer';
import Asus from '~/laptops/brands/Asus';
import Dell from '~/laptops/brands/Dell';
import Hp from '~/laptops/brands/Hp';
import Lenovo from '~/laptops/brands/Lenovo';
import MacOS from '~/laptops/brands/MacOS';
import AllBrandsLaptop from '~/laptops/brands/AllBrandsLaptop';

import LaptopLC from '~/laptops/shops/LaptopLC';
import LaptopNhatBan from '~/laptops/shops/LaptopNhatBan';
import TienHungLaptop from '~/laptops/shops/TienHungLaptop';
import AllShopsLaptop from '~/laptops/shops/AllShopsLaptop';

import { Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SIDE_BAR_brand_PHONE = [
    {
        name: 'Acer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/2560px-Acer_2011.svg.png',
        to: 'laptop/brands/acer',
    },
    {
        name: 'Asus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png',
        to: 'laptop/brands/asus',
    },
    {
        name: 'Dell',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2048px-Dell_logo_2016.svg.png',
        to: 'laptop/brands/dell',
    },
    {
        name: 'Hp',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png',
        to: 'laptop/brands/hp',
    },
    {
        name: 'Lenovo',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png',
        to: 'laptop/brands/lenovo',
    },
    {
        name: 'MacOS',
        image: 'https://cdn.unlockboot.com/wp-content/uploads/2018/12/type-apple-logo.jpg',
        to: 'laptop/brands/mac',
    },
];

const SIDE_BAR_SHOP_PHONE = [
    {
        name: 'LaptopLC',
        image: 'https://cf.shopee.vn/file/a346178f82ac211177a629373aebbb52_tn',
        to: 'laptop/shops/laptoplc',
    },
    {
        name: 'LaptopNhatBan',
        image: 'https://cf.shopee.vn/file/2061b57c9ed90bfcda9482caba49e609_tn',
        to: 'laptop/shops/laptopnhatban',
    },
    {
        name: 'TienHungLaptop',
        image: 'https://cf.shopee.vn/file/d40eec82f9cb5cf7a185db55d91840f7_tn',
        to: 'laptop/shops/tienhunglaptop',
    },
];

function LaptopLayout() {
    return (
        <div className={cx('laptop-layout')}>
            {/* Side bar */}
            <Sidebar
                brandData={SIDE_BAR_brand_PHONE}
                shopData={SIDE_BAR_SHOP_PHONE}
                allBrands={'/laptop/brands/all'}
                allShops={'/laptop/shops/all'}
            />
            {/* Side bar */}

            <div className={cx('laptop-container')}>
                <TitleSection title="Laptops" />
                <Routes>
                    <Route path="laptop/brands/acer" element={<Acer />} />
                    <Route path="laptop/brands/asus" element={<Asus />} />
                    <Route path="laptop/brands/dell" element={<Dell />} />
                    <Route path="laptop/brands/hp" element={<Hp />} />
                    <Route path="laptop/brands/lenovo" element={<Lenovo />} />
                    <Route path="laptop/brands/mac" element={<MacOS />} />

                    <Route
                        path="laptop/shops/laptoplc"
                        element={<LaptopLC />}
                    />
                    <Route
                        path="laptop/shops/laptopnhatban"
                        element={<LaptopNhatBan />}
                    />
                    <Route
                        path="laptop/shops/tienhunglaptop"
                        element={<TienHungLaptop />}
                    />

                    <Route
                        path="/laptop/brands/all"
                        element={<AllBrandsLaptop />}
                    />
                    <Route
                        path="/laptop/shops/all"
                        element={<AllShopsLaptop />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default LaptopLayout;
