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

  setLoading(bool) {
    this.selectors.newLinkSubmit.setAttribute('disabled', bool);
    if (bool) this.selectors.errorMessage.innerHTML = `<h4>Loading...</h4>`;
    else this.selectors.errorMessage.innerHTML = null;
  }

  clearForm() {
    this.selectors.newLinkUrl.value = '';
  }
}
