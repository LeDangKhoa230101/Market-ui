import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Detail from '~/pages/Detail';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import AllShop from '~/pages/AllShop';
import DetailShop from '~/pages/DetailShop';
import SalePage from '~/pages/SalePage';
import TopCate from '~/pages/TopCate';
import TopRate from '~/pages/TopRate';
import FeaturedBrands from '~/pages/FeaturedBrands';
import NewArrivals from '~/pages/NewArrivals';
import BigDiscount from '~/pages/BigDiscount';
import User from '~/pages/User';

import { routes } from '~/config';

// ko cần đăng nhập
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.search, component: Search },
    { path: routes.detail, component: Detail },
    { path: routes.cart, component: Cart },
    { path: routes.checkout, component: Checkout },
    { path: routes.shops, component: AllShop },
    { path: routes.shop, component: DetailShop },
    { path: routes.sale, component: SalePage },
    { path: routes.topcate, component: TopCate },
    { path: routes.toprate, component: TopRate },
    { path: routes.featurebrand, component: FeaturedBrands },
    { path: routes.newarrival, component: NewArrivals },
    { path: routes.bigdiscount, component: BigDiscount },
    { path: routes.user, component: User },
];

// cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
