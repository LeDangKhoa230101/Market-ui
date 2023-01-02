import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Fashion from '~/pages/Fashion';

// ko cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/fashion', component: Fashion },
];

// cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
