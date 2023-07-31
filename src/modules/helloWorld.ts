import { Module, registModule } from 'nodom3'

export default class Hello extends Module {
  template() {
    return `
        <div class='hello'>
          <h1>Nodom 3 + TypeScript </h1>
          <p>welcome to <a href='https://gitee.com/weblabsw/nodom3' target='_blank'>nodom</a></p>
          <button x-route='/main/top'>say,Hi!</button>
          <div x-router></div>
        </div>
       `
  }
}
registModule(Hello, 'Hello');