class Storage {
  constructor() {
    this.STORE = this.get();
  }

  store(title, url) {
    this.STORE[url] = title;
    localStorage.setItem('store', JSON.stringify(this.STORE));
  }

  delete(url) {
    this.STORE = delete this.STORE[url];
    localStorage.setItem('store', JSON.stringify(this.STORE));
  }

  fetch() {
    return JSON.parse(this.STORE);
  }

  get() {
    return JSON.parse(localStorage.getItem('store')) || {};
  }

  clear() {
    this.STORE = {};
    localStorage.setItem('store', JSON.stringify(this.STORE));
  }
}
