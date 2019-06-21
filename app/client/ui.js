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

  displayBookmarks(booksmarks) {
    Object.keys(booksmarks).forEach(url => {
      const title = booksmarks[url];
      this.appendBookmark({ url, title });
    });
  }

  appendBookmark({ url, title }) {
    const item = document.createElement('li');
    item.className = 'bookmark';
    item.innerHTML = `<a href="${url}" >${title}</a>`;
    this.selectors.linksSection.appendChild(item);
  }

  clearBookmarks() {
    this.selectors.linksSection.innerText = '';
  }
}
