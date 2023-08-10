import  App from './app';
import { Nodom, Router } from 'nodom3';
import { initRoute } from './route/route';
import '@/assets/css/app.css';
import '@/route/route'

Nodom.app(App)
Nodom.use(Router);
initRoute()