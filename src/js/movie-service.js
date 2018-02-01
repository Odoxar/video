import config from './config';

function getVideoByText(text) {
  if (!text) {
    return;
  }

  return fetch(config.searchMovieUrl + text)
  .then(r => r.json());
}

function getVideoVyId(id) {
  const url = `${config.baseMovieUrl}${config.queryMovieById}${id}${config.apiKey}`;

  return fetch(url)
    .then(r => r.json());
}

export default {
  getVideoByText,
  getVideoVyId
}