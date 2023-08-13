import { Module } from 'nodom3'

export default class Main extends Module {
  template() {
    return `
        <div class='hello'>
          <h1>Nodom 3 + JavaScript</h1>
          <p>welcome to <a href='https://gitee.com/weblabsw/nodom3' target='_blank' style='margin: 5px'>nodom</a></p>
          <div x-route='/main/top'>
            <ui-button theme="success" title="say,Hi!"/>
          </div>
          <div x-router></div>
        </div>
       `
  }
}
