import { Module, Nodom } from 'nodom3';
import './modules/helloWorld';
export default class App extends Module {
    template() {
        return `
             <div class='hello'>
                <img id='logo' alt="Nodom" src='public/logo.png' />
                <div x-router/>
             </div>
         `;
    }
    onBeforeFirstRender(){
        Nodom['$Router'].go('/main')
    }

    
}

