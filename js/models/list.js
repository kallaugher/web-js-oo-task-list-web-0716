'use strict';
// List Model

class List {
  constructor(title){
    this.id = this.constructor.all.length;
    this.title = title;
    this.constructor.all.push(this);
    this.tasks = [];
  }
  listEl() {
    return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`
  }
  optionEl() {
    return `<option value="${this.id}">${this.title}</option>`
  }
  build() {
    $('#select_list').append(this.optionEl());
    $('#lists').append(this.listEl());
  }
}

List.all = []
