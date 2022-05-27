import routesConfig from '~/config/routes';

import HeaderOnly from '~/components/Layouts/HeaderOnly';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';

export const publicRoutes = [
    { path: routesConfig.home, element: Home },
    { path: routesConfig.following, element: Following },
    { path: routesConfig.upload, element: Upload, layout: HeaderOnly },
];
