class Storage {
  constructor() {
    this.STORE = this.get();
  }

  store(title, url) {
    this.STORE[url] = title;
    localStorage.setItem('store', JSON.stringify(this.STORE));
  }
}
