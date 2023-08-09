import  App from './app';
import { Nodom, Router } from 'nodom3';
import '@/assets/css/app.css';
import '@/route/route'
import { initRoute } from './route/route';

Nodom.app(App)
Nodom.use(Router);
initRoute()