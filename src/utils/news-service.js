

import { api_options } from "./../utils/constants"

const { key, url } = api_options.news;


const options = {
    headers: {
      Authorization: key,
    },
  };
  
export default class NewsApiService {
    constructor() {
      this.searchQuery = "";
      this.page = 1;
    }
    fetchArticles() {
      const base_url = `${url}q=${this.searchQuery}&language=en&pageSize=8&page=${this.page}`;
      return fetch(base_url, options)
        .then((response) => response.json())
        .then(({ articles }) => {
          this.incrementPage();
          return articles;
        })
        .catch((error) => console.log(error));
    }
    incrementPage() {
      this.page += 1;
    }
    resetPage() {
      this.page = 1;
    }
    get query() {
      return this.searchQuery;
    }
    set query(newQuery) {
    return this.searchQuery = newQuery
    }
  }
  