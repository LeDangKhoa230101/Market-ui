import { routes } from '~/config';

// layout
import { HeaderOnly } from '~/layouts';

// pages
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
import SignupModal from '~/pages/SignupModal';
import LoginModal from '~/pages/LoginModal';
import ResetPassModal from '~/pages/ResetPassModal';
import CategoryTabletMobile from '~/pages/CategoryTabletMobile';

//admin page
import Dashboard from '~/admin/pages/Dashboard';
import Products from '~/admin/pages/Products';
import Categories from '~/admin/pages/Categories';
import Brands from '~/admin/pages/Brands';
import Orders from '~/admin/pages/Orders';
import Customers from '~/admin/pages/Customers';

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
    {
        path: routes.catetabletmobile,
        component: CategoryTabletMobile,
        layout: HeaderOnly,
    },
    { path: routes.signup, component: SignupModal, layout: null },
    { path: routes.login, component: LoginModal, layout: null },
    { path: routes.resetpass, component: ResetPassModal, layout: null },
];

// cần đăng nhập
const privateRoutes = [];

const adminRoutes = [
    { path: routes.dashboard, component: Dashboard },
    { path: routes.products, component: Products },
    { path: routes.categories, component: Categories },
    { path: routes.brands, component: Brands },
    { path: routes.orders, component: Orders },
    { path: routes.customers, component: Customers },
];

export { publicRoutes, privateRoutes, adminRoutes };
