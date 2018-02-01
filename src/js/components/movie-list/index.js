import movie from "../movie/";

export default class MovieList {
  drawToDom(selector) {
    this.clearList(selector);
    selector.appendChild(this.fragment);
  }

  renderMovies(data) {
    this.data = data;
    this.fragment = document.createDocumentFragment();

    this.data.results.forEach(data => {
      const article = document.createElement('article');

      article.classList.add('movie');
      article.innerHTML = movie(data);
      this.fragment.appendChild(article);
    });
  }

  clearList(selector) {
    selector.innerHTML = '';
  }
}
