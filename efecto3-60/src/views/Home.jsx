import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Home.css";
import data from "../data/Data";
import Helmet from "react-helmet";
import moment from "moment";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2c91e3",
        borderRadius: "12px",
        width: "22px",
        height: "22px",
      }}
      onClick={onClick}
    />
  );
}

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const [frontPageArt, setFrontPageArt] = useState([]);
  const [newArt, setNewArt] = useState([]);
  const [dontMissArt, setDontMissArt] = useState({});
  const [seeListenArt, setSeeListenArt] = useState([]);
  const [drinksFoodArt, setDrinksFoodArt] = useState({});
  const [wellnessArt, setWellnessArt] = useState([]);
  const [fashionArt, setFashion] = useState([]);

  const fetchData = () => {
    const frontPageArtRouteAPI = data.urlAPI + "/frontpage";
    const newArtRouteAPI = data.urlAPI + "/newitems/2";
    const dontMissArtRouteAPI = data.urlAPI + "/newarticle/3";
    const seeListenArtRouteAPI = data.urlAPI + "/newitems/7";
    const drinksFoodArtRouteAPI = data.urlAPI + "/newarticle/4";
    const wellnessArtRouteAPI = data.urlAPI + "/newitems/5";
    const fashionArtRouteAPI = data.urlAPI + "/newitems/6";

    const getFrontPageArt = axios.get(frontPageArtRouteAPI);
    const getNewArt = axios.get(newArtRouteAPI);
    const getDontMissArt = axios.get(dontMissArtRouteAPI);
    const getSeeListenArt = axios.get(seeListenArtRouteAPI);
    const getDrinksFoodArt = axios.get(drinksFoodArtRouteAPI);
    const getWellnessArt = axios.get(wellnessArtRouteAPI);
    const getFashionArt = axios.get(fashionArtRouteAPI);

    axios
      .all([
        getFrontPageArt,
        getNewArt,
        getDontMissArt,
        getSeeListenArt,
        getDrinksFoodArt,
        getWellnessArt,
        getFashionArt,
      ])
      .then(
        axios.spread((...allData) => {
          const dataFrontPageArt = allData[0].data[0];
          const dataNewArt = allData[1].data;
          const dataDontMissArt = allData[2].data[0];
          const dataSeeListenArt = allData[3].data;
          const dataDrinksFoodArt = allData[4].data[0];
          const dataWellnessArt = allData[5].data;
          const dataFashionArt = allData[6].data;

          setFrontPageArt(dataFrontPageArt);
          setNewArt(dataNewArt);
          setDontMissArt(dataDontMissArt);
          setSeeListenArt(dataSeeListenArt);
          setDrinksFoodArt(dataDrinksFoodArt);
          setWellnessArt(dataWellnessArt);
          setFashion(dataFashionArt);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.error(errors.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-body-container">
      <Helmet title={"Efecto 3'60"} htmlAttributes={{ lang: "en" }} />
      {/* Section no.1 */}
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-item">
            <div
              style={{
                backgroundImage: `url(${frontPageArt.cover})`,
              }}
              className="carousel-item-container"
            >
              <div className="presentation-front-page-container">
                <div className="presentation-front-page-container-in">
                  <p className="front-page-section">{frontPageArt.section}</p>
                  <h2 className="front-page-title line-clamp-front">
                    {frontPageArt.title}
                  </h2>
                  <Link
                    to={"/article/1-" + frontPageArt.articleID}
                    className="front-page-link"
                  >
                    Ir a la portada
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{
                backgroundImage: `url(${frontPageArt.second_bannerURL})`,
              }}
              className="carousel-item-container"
            >
              <div className="presentation-front-page-container">
                <div className="presentation-front-page-container-in">
                  <p className="front-page-section">{frontPageArt.section}</p>
                  <h2 className="front-page-title line-clamp-front">
                    {frontPageArt.second_title}
                  </h2>
                  <Link
                    to={"/article/1-" + frontPageArt.articleID}
                    className="front-page-link"
                  >
                    Ir a la portada
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{
                backgroundImage: `url(${frontPageArt.third_bannerURL})`,
              }}
              className="carousel-item-container"
            >
              <div className="presentation-front-page-container">
                <div className="presentation-front-page-container-in">
                  <p className="front-page-section">{frontPageArt.section}</p>
                  <h2 className="front-page-title line-clamp-front">
                    {frontPageArt.third_title}
                  </h2>
                  <Link
                    to={"/article/1-" + frontPageArt.articleID}
                    className="front-page-link"
                  >
                    Ir a la portada
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Section no.2 */}
      <div className="news-container">
        <div className="section-label">
          <p className="text-section-label">En modo Avión</p>
        </div>
      </div>
      <div className="articles-container">
        <div className="wrapper">
          {newArt.map((article) => (
            <Link
              key={article.articleID}
              className="link-article"
              to={"/article/2-" + article.articleID}
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
                  <p className="type-article text-mod">Por Rafael Barrientos</p>
                  <p className="date-article text-mod">
                    {moment(article.debut).utc().format("YYYY-MM-DD")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Section no.3 */}
      <div className="news-container">
        <div className="section-label">
          <p className="text-section-label">No te pierdas...</p>
        </div>
      </div>
      <div className="dont-miss-container">
        <img className="dont-miss-img" src={dontMissArt.cover} alt="cover" />
        <div className="dont-miss-article-container">
          <p className="section-dont-miss-in">{dontMissArt.section}</p>
          <Link
            to={"/article/3-" + dontMissArt.articleID}
            className="link-article-in"
          >
            <h2 className="title-dont-miss-in">{dontMissArt.title}</h2>
          </Link>
          <p className="date-dont-miss-in">
            {moment(dontMissArt.debut).utc().format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
      {/* Section no.4 */}
      <div className="news-container">
        <div className="section-label">
          <p className="text-section-label">Melancolía</p>
        </div>
      </div>
      <div className="articles-container">
        <div className="wrapper">
          {seeListenArt.map((article) => (
            <Link
              key={article.articleID}
              className="link-article"
              to={"/article/7-" + article.articleID}
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
                  <p className="type-article text-mod">Por Rafael Barrientos</p>
                  <p className="date-article text-mod">
                    {moment(article.debut).utc().format("YYYY-MM-DD")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Section no.5 */}
      <div className="news-container">
        <div className="section-label">
          <p className="text-section-label">Newbies</p>
        </div>
      </div>
      <div className="dont-miss-container">
        <img className="dont-miss-img" src={drinksFoodArt.cover} alt="cover" />
        <div className="dont-miss-article-container">
          <p className="section-dont-miss-in">{drinksFoodArt.section}</p>
          <Link
            to={"/article/4-" + drinksFoodArt.articleID}
            className="link-article-in"
          >
            <h2 className="title-dont-miss-in">{drinksFoodArt.title}</h2>
          </Link>
          <p className="date-dont-miss-in">
            {moment(drinksFoodArt.debut).utc().format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
      {/* Section no.6 */}
      <div className="news-container">
        <div className="section-label">
          <p className="text-section-label">Tips</p>
        </div>
      </div>
      <div className="articles-container">
        <div className="wrapper">
          {wellnessArt.map((article) => (
            <Link
              key={article.articleID}
              className="link-article"
              to={"/article/5-" + article.articleID}
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
                  <p className="type-article text-mod">Por Rafael Barrientos</p>
                  <p className="date-article text-mod">
                    {moment(article.debut).utc().format("YYYY-MM-DD")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Section no.7 */}
      <div className="news-container">
        <div className="section-label">
          <p className="text-section-label">Estilo</p>
        </div>
      </div>
      <div className="articles-container">
        <div className="wrapper">
          {fashionArt.map((article) => (
            <Link
              key={article.articleID}
              className="link-article"
              to={"/article/6-" + article.articleID}
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
                  <p className="type-article text-mod">Por Rafael Barrientos</p>
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
  );
}

export default Home;
