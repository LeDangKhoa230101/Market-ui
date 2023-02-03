import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Fashion from '~/pages/Fashion';
import Detail from '~/pages/Detail';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';

import { routes } from '~/config';

// ko cần đăng nhập
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.search, component: Search },
    { path: routes.fashion, component: Fashion },
    { path: routes.detail, component: Detail },
    { path: routes.cart, component: Cart },
    { path: routes.checkout, component: Checkout },
];

// cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
