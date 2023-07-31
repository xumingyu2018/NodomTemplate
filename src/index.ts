import  App from './app';
import { nodom as CreateApp,createRoute } from 'nodom3';
import '@/assets/css/app.css';
import '@/route/route'

CreateApp(App, 'div');