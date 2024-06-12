import "../../style/css/main.css";
import "../../utils/add_header.js";
import "../../style/common.css";


import LoadMoreBtn from "../../utils/laod_more_btn"
import NewsApiService from "../../utils/news-service";
import articlesTpl from "../../templates/news_cart.hbs"
import { log } from "handlebars";


const refs = {
  searchForm: document.querySelector(".js-search"),
  articlesContainer: document.querySelector(".js-articles-container"),
  btn_show_more: document.querySelector(".show-more")
}


console.log(refs.searchForm);


const loadMoreBtn = new LoadMoreBtn({selector: '[data-action="load-more"]', hidden: true});

const newsApiService = new NewsApiService();
refs.searchForm.addEventListener("keydown", onSearch);

// колбек для пошуку

function onSearch(e) {

  if (e.key === "Enter") {

    e.preventDefault();
    console.dir(e);
  
    newsApiService.query = e.target.value;
    console.log(newsApiService.searchQuery);
  
    if (newsApiService.query === "") {
      return alert("введіть свій запит!")
    }
  
    loadMoreBtn.show();
    newsApiService.resetPage();


    clearArticlesContainer()
    fetchArticles()
  }

}   

// показати кнопку показати ще

function fetchArticles() {
  loadMoreBtn.disable();

  newsApiService.fetchArticles().then(articles => {
    refs.articlesContainer.insertAdjacentHTML("beforeend", articlesTpl(articles))
  })

  loadMoreBtn.enable();
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = "";
}

function show_more_f() {
  // newsApiService.incrementPage()
  loadMoreBtn.disable()


  setTimeout(fetchArticles(), 1500)
  // fetchArticles();
}

loadMoreBtn.refs.button.addEventListener("click", show_more_f);


// обробник події скролу

window.addEventListener("scroll", scrollHandler)

function scrollHandler(e) {

  const {clientHeight, scrollHeight, scrollTop} = document.documentElement
  console.dir(document)

  if (scrollHeight - scrollTop - clientHeight < 500) {
    fetchArticles()
  }

  // чи дійшов користувач до краю сторінки, 100px до низу  
}