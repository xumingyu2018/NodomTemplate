import { Module } from 'nodom3'

export default class Hello extends Module {
  template() {
    return `
        <div class='hello'>
          <h1>Nodom 3 + TypeScript </h1>
          <p>welcome to <a href='https://gitee.com/weblabsw/nodom3' target='_blank' style="margin-left: 5px;">nodom</a></p>
          <div x-route='/main/top'>
            <ui-button size="normal" theme='success' title='say,Hi'></ui-button>
          </div>
          <div x-router></div>
        </div>
       `
  }
}
