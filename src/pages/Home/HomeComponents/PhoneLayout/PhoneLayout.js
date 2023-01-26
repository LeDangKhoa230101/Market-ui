import styles from './PhoneLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import TitleSection from '~/components/TitleSection';

import { Routes, Route } from 'react-router-dom';
import Apple from '~/phones/brands/Apple';
import Asus from '~/phones/brands/Asus';
import Oppo from '~/phones/brands/Oppo';
import Samsung from '~/phones/brands/Samsung';
import Vivo from '~/phones/brands/Vivo';
import Xiaomi from '~/phones/brands/Xiaomi';
import AllBrandsPhone from '~/phones/brands/AllBrandsPhone';
import AllShopsPhone from '~/phones/shops/AllShopsPhone';

import AZparts from '~/phones/shops/AZparts';
import BiStore45 from '~/phones/shops/BiStore45';
import CDStore from '~/phones/shops/CDStore';
import KTsmartphone from '~/phones/shops/KTsmartphone';
import SkyPhoneCity from '~/phones/shops/SkyPhoneCity';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SIDE_BAR_brand_PHONE = [
    {
        name: 'Apple',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fapple.png&w=32&q=75',
        to: 'phone/brands/apple',
    },
    {
        name: 'Xiaomi',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fxiaomi.png&w=32&q=75',
        to: 'phone/brands/xiaomi',
    },
    {
        name: 'Samsung',
        image: 'https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/256_144_3.png?$512_N_PNG$',
        to: 'phone/brands/samsung',
    },
    {
        name: 'Asus',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fasus.png&w=32&q=75',
        to: 'phone/brands/asus',
    },
    {
        name: 'Oppo',
        image: 'https://media.loveitopcdn.com/3807/logo-oppo-1.jpg',
        to: 'phone/brands/oppo',
    },
    {
        name: 'Vivo',
        image: 'https://www.vivosmartphone.vn/themes/vivo/img/vivo-fb-page.png',
        to: 'phone/brands/vivo',
    },
];

const SIDE_BAR_SHOP_PHONE = [
    {
        name: 'KTsmartphone',
        image: 'https://img.ws.mms.shopee.vn/4370fa204e94be8c491a29561517bf6e_tn',
        to: 'phone/shops/ktsmartphone',
    },
    {
        name: 'Bi Store45',
        image: 'https://cf.shopee.vn/file/3e7d3afb321d835f5ed68f01df2434d9_tn',
        to: 'phone/shops/bistore45',
    },
    {
        name: 'CD_Store',
        image: 'https://cf.shopee.vn/file/6e1c4b11f729d0fbffe806e09866802f_tn',
        to: 'phone/shops/cdstore',
    },
    {
        name: 'Sky Phone City',
        image: 'https://cf.shopee.vn/file/ae669fb68de8d7d8840e83b1e99d0798_tn',
        to: 'phone/shops/skyphonecity',
    },
    {
        name: 'AZparts',
        image: 'https://cf.shopee.vn/file/359f6678beebda758341cf0a4b6e8b65_tn',
        to: 'phone/shops/azparts',
    },
];

function PhoneLayout() {
    return (
        <div className={cx('phone-layout')}>
            {/* Side bar */}
            <Sidebar
                brandData={SIDE_BAR_brand_PHONE}
                shopData={SIDE_BAR_SHOP_PHONE}
                allBrands={'/phone/brands/all'}
                allShops={'/phone/shops/all'}
            />
            {/* Side bar */}

            <div className={cx('phone-container')}>
                <TitleSection title="Mobile Phones" />
                <Routes>
                    <Route path="phone/brands/apple" element={<Apple />} />
                    <Route path="phone/brands/asus" element={<Asus />} />
                    <Route path="phone/brands/oppo" element={<Oppo />} />
                    <Route path="phone/brands/samsung" element={<Samsung />} />
                    <Route path="phone/brands/vivo" element={<Vivo />} />
                    <Route path="phone/brands/xiaomi" element={<Xiaomi />} />

                    <Route path="phone/shops/azparts" element={<AZparts />} />
                    <Route
                        path="phone/shops/bistore45"
                        element={<BiStore45 />}
                    />
                    <Route path="phone/shops/cdstore" element={<CDStore />} />
                    <Route
                        path="phone/shops/ktsmartphone"
                        element={<KTsmartphone />}
                    />
                    <Route
                        path="phone/shops/skyphonecity"
                        element={<SkyPhoneCity />}
                    />

                    <Route
                        path="/phone/brands/all"
                        element={<AllBrandsPhone />}
                    />
                    <Route
                        path="/phone/shops/all"
                        element={<AllShopsPhone />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default PhoneLayout;
