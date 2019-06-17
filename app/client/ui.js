class UI {
  constructor() {
    this.selectors = {
      linksSection: document.querySelector('.links'),
      errorMessage: document.querySelector('.error-message'),
      newLinkForm: document.querySelector('.new-link-form'),
      newLinkUrl: document.querySelector('.new-link-url'),
      newLinkSubmit: document.querySelector('.new-link-submit'),
      clearStorageButton: document.querySelector('.clear-storage')
    };
  }
}
