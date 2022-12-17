import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import "../styles/PageArticle.css";
import data from "../data/Data";
import Helmet from "react-helmet";
import moment from "moment";

const Article = () => {
  let { id } = useParams();
  const [article, setArticle] = useState({});
  const [textHTML, setTextHTML] = useState("<p>Nothing</p>");

  const fechArticle = async () => {
    try {
      const res = await axios.get(data.urlAPI + "/singleitem/" + id);
      setArticle(res.data[0]);
      setTextHTML(res.data[0].article);
      console.log(res.data);
    } catch (error) {
      /* console.log(error); */
    }
  };

  useEffect(() => {
    fechArticle();
  }, [id]);

  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Helmet title={article.title} htmlAttributes={{ lang: "en" }} />
      <div className="article-head-container">
        <div className="img-article-container">
          <img className="img-article" src={article.cover} alt="cover" />
        </div>
        <div className="presentation-article-container">
          <p className="text-format section-article-in">{article.section}</p>
          <h2 className="text-format title-article-in">{article.title}</h2>
          <h3 className="text-format explanation-article-in">
            {article.explanation}
          </h3>
          <p className="text-format date-article-in">
            {moment(article.debut).utc().format("YYYY-MM-DD")}
          </p>
          <div className="social-shared-link-container">
            <ul className="list-social-shared-link">
              <li className="social-link">
                <a
                  target="_blank"
                  href={
                    "http://www.facebook.com/sharer.php?u=" +
                    encodeURIComponent(window.location)
                  }
                  className="social-link-a"
                >
                  <i className="ri-facebook-circle-line config-icon"></i>
                </a>
              </li>
              <li className="social-link">
                <a
                  target="_blank"
                  href={
                    "https://pinterest.com/pin/create/button/?url=" +
                    encodeURIComponent(window.location) +
                    "&media=http://zagazine.mx" +
                    article.cover +
                    "&description=" +
                    article.explanation
                  }
                  className="social-link-a"
                >
                  <i className="ri-pinterest-line config-icon"></i>
                </a>
              </li>
              <li className="social-link">
                <a
                  target="_blank"
                  href={
                    "http://twitter.com/share?text=" +
                    article.title +
                    "&url=" +
                    encodeURIComponent(window.location)
                  }
                  className="social-link-a"
                >
                  <i className="ri-twitter-line config-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-body">
        <section className="article-body-container">{parse(textHTML)}</section>
        <section className="container-writer">
          <img src={article.avatar} alt="avatar" className="img-autor" />
          <div className="container-autor">
            <p className="section-article-in">Escrito por:</p>
            <p className="name-autor">{article.author}</p>
            <p className="degree-autor">{article.degree}</p>
            <p className="location-autor">{article.address}</p>
            <p className="date-article-in">
              {moment(article.debut).utc().format("YYYY-MM-DD")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Article;
