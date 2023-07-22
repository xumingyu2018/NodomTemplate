import { createRoute } from 'nodom3';
import Main from '../modules/main';
import Footer from '../modules/footer';
createRoute([{
    path: '/main',
    module: Main,
    routes: [
        {
            path: '/top',
            //指定路由对应的模块
            module: Footer
        }
    ]
}])