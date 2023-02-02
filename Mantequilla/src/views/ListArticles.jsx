import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/PageListArticles.css";
import sections from "../data/Sections";
import data from "../data/Data";
import Helmet from "react-helmet";
import moment from "moment";

function ListArticles() {
  let { id } = useParams();
  const [articles, setArticles] = useState([]);

  const fechAllArticles = async () => {
    try {
      const res = await axios.get(`${data.urlAPI}/articleslist/${id}`);
      setArticles(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fechAllArticles();
  }, [id]);

  return (
    <div className="home-body-container">
      <div className="container-display">
      <Helmet title={sections[id - 1].topic} htmlAttributes={{ lang: "en" }} />
      <h1 className="titleSection">{sections[id - 1].topic}</h1>
      <div className="description-container">
        <h2 className="descriptionSection">{sections[id - 1].explanation}</h2>
      </div>
      <div className="articles-container">
        <div className="wrapper">
          {articles.map((article) => (
            <Link
              key={article.articleID}
              className="link-article"
              to={"/article/" + id + "-" + article.articleID}
            >
              <div className="article" key={article.articleID}>
                {article.cover && (
                  <img
                    className="cover-article"
                    src={article.cover}
                    alt="cover"
                  />
                )}
                <div className="text-container">
                  <p className="type-article text-mod">{article.section}</p>
                  <p className="title-article text-mod line-clamp">
                    {article.title}
                  </p>
                  <p className="type-article text-mod">Por {article.author}</p>
                  <p className="date-article text-mod">
                    {moment(article.debut).utc().format("YYYY-MM-DD")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default ListArticles;
