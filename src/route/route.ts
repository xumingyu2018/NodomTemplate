import { createRoute } from 'nodom3';
import Hello from '../modules/helloWorld';
import Footer from '../modules/footer';
createRoute([{
    path: '/main',
    module: Hello,
    routes: [
        {
            path: '/top',
            //指定路由对应的模块
            module: Footer
        }
    ]
},{
    path: '/big',
    module: Footer,
    routes: [
        {
            path: '/top',
            //指定路由对应的模块
            module: Footer
        }
    ]
}])