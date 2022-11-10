import config from '../config';

import Category from '../pages/Category/Category';
import Discovery from '../pages/Discovery/Discovery';
import Following from '../pages/Following/Following';
import Home from '../pages/Home/Home';
import MusicVideo from '../pages/MusicVideo/MusicVideo';
import NewMusic from '../pages/NewMusic/NewMusic';
import Radio from '../pages/Radio/Radio';
import Top100 from '../pages/Top100/Top100';
import ZingChart from '../pages/ZingChart/ZingChart';
import Individual from '../pages/Individual/Individual';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.newMusic,
        component: NewMusic,
    },
    {
        path: config.routes.category,
        component: Category,
    },
    {
        path: config.routes.discovery,
        component: Discovery,
    },
    {
        path: config.routes.musicVideo,
        component: MusicVideo,
    },
    {
        path: config.routes.radio,
        component: Radio,
    },
    {
        path: config.routes.top100,
        component: Top100,
    },
    {
        path: config.routes.zingChart,
        component: ZingChart,
    },
    {
        path: config.routes.individual,
        component: Individual,
    },
];

export default publicRoutes;
