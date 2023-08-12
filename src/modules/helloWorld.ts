import { Module } from 'nodom3'
import { UIButton } from 'nodomui'

console.log(UIButton);
export default class Hello extends Module {
  template() {
    return `
        <div class='hello'>
          <h1>Nodom 3 + TypeScript </h1>
          <p>welcome to <a href='https://gitee.com/weblabsw/nodom3' target='_blank'>nodom</a></p>
          <button x-route='/main/top'>say,Hi!</button>
          <ui-button size="normal" theme='error' title='按钮'/> 
          <div x-router></div>
        </div>
       `
  }
}
