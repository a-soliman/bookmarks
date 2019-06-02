const { shell } = require('electron');
const parser = require('./parser');
const storage = require('./storage');
const ui = require('./ui');

class App {
  constructor(storage, parser, ui) {
    this.storage = storage;
    this.ui = ui;
    this.parser = parser;
  }

  init() {
    this.initEventListeners();
    this.initBookmarks();
  }
}
