import  App from './app';
import { Nodom, Router } from 'nodom3';
import { NodomUI } from 'nodomui'
import { initRoute } from './route/route';
import '@/route/route'
import 'nodomui/examples/css/nodomui.css'
import '@/assets/css/app.css';

Nodom.app(App)
Nodom.use(Router);
Nodom.use(NodomUI)
initRoute()