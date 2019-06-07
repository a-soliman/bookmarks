class Parser {
  async parse(url) {
    let error = '';

    try {
      const response = await fetch(url);
      const text = await response.text();
      const parsedRes = this.parseResponse(text);
      const title = this.findTitle(parsedRes);
      return { title };
    } catch (err) {
      error = `Could not parse ${url}, Error: ${err}`;
      return { error };
    }
  }
}
