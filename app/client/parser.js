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

  parseResponse(text) {
    const domParser = new DOMParser();
    return domParser.parseFromString(text, 'text/html');
  }

  findTitle(nodes) {
    return nodes.querySelector('title').innerText;
  }
}

const parser = new Parser();
module.exports = parser;
