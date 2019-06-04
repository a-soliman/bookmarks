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

  initEventListeners() {
    this.ui.selectors.newLinkUrl.addEventListener('keyup', () => {
      this.ui.selectors.newLinkSubmit.disabled = !this.ui.selectors.newLinkUrl
        .validity.valid;
    });

    this.ui.selectors.newLinkForm.addEventListener('submit', this.bookmark);
    this.ui.selectors.clearStorageButton.addEventListener(
      'click',
      this.clearBookmarks
    );
    this.ui.selectors.linksSection.addEventListener('click', evt => {
      debugger;
      if (evt.target.href) {
        evt.preventDefault();
        shell.openExternal(evt.target.href);
      }
    });
  }

  initBookmarks() {
    const booksmarks = this.storage.get();
    this.ui.displayBookmarks(booksmarks);
  }
}
