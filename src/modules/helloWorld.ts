import { Module, registModule } from 'nodom3'

export default class Hello extends Module {
  template() {
    return `
        <div class='hello'>
          <h1>Hello Nodom 3 + TypeScript </h1>
          <p>推荐 IDE 配置: VSCode + <a href='https://marketplace.visualstudio.com/items?itemName=kyleslie.nodom' target='_blank'>nodom-Vscode</a></p>
          <button x-route='/main/top'>say,Hi!</button>
          <div x-router></div>
        </div>
       `
  }
}
registModule(Hello, 'Hello');