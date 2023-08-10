import { Module, Nodom } from 'nodom3';
export default class App extends Module {
    template() {
        return `
             <div>
                <img id='logo' alt="Nodom" src='public/logo.png' />
                <div x-router/>
             </div>
         `;
    }
    onBeforeFirstRender(){
        Nodom['$Router'].go('/main')
    }
}
