import React from "react";
// import Article from "../components/Clinic/Article";
import { articles } from "../public/articleList.js";

export default function clinic() {

  function mapArticlesToIndex(articles) {
    return articles.map(article => (
      <div class="row">
        <div class="article-image-div col-3">
          <a href={`/clinic/${article.filename}`}>
            <img class="article-image" src={`images/${article.image}-thumb.jpg`} />
          </a>
        </div>
        <div class="col-9">
          <a href={`/clinic/${article.filename}`}>
            <h4> {article.title} </h4>
          </a>
          <p class="tagline"> {article.tagline} </p>

            <p class="article-brief"> {article.body.substring(0, 280) + " ... "}
              <a class="read-more" href={`/clinic/${article.filename}`}> קרא עוד </a>
            </p>

        </div>
      </div>
    ));
  }

  return (
    <div class="pageHome">
      <div class="banner-clinic">
        <p class="title-clinic"> קליניקה </p>
      </div>

      <div class="clinic-articles">
        {mapArticlesToIndex(articles)}
      </div>
    </div>
  )
}
