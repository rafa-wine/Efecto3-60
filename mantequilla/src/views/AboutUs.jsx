import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PageAboutUs.css";
import data from "../data/Data";
import Helmet from "react-helmet";

function AboutUs() {
  const [aboutUs, setAboutUs] = useState({});

  const fechArticle = async () => {
    try {
      const res = await axios.get(`${data.urlAPI}/aboutusback`);
      setAboutUs(res.data[0]);
    } catch (error) {
      /* console.log(error); */
    }
  };

  useEffect(() => {
    fechArticle();
  }, []);

  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Helmet title={"¿Quíenes somos?"} htmlAttributes={{ lang: "en" }} />
      <div className="global-aboutus-container">
        <div className="slogan-container">
          <h1 className="slogan">{aboutUs.slogan}</h1>
        </div>
        <div className="mision-container">
          <img
            className="img-aboutus-container"
            src={aboutUs.img_mision}
            alt=""
          />
          <div className="text-aboutus-container">
            <p className="text-aboutus-title">Misión</p>
            <p className="text-aboutus-def">{aboutUs.mision}</p>
          </div>
        </div>
        <div className="vision-container">
          <img
            className="img-aboutus-container"
            src={aboutUs.img_vision}
            alt=""
          />
          <div className="text-aboutus-container">
            <p className="text-aboutus-title">Visión</p>
            <p className="text-aboutus-def">{aboutUs.vision}</p>
          </div>
        </div>
        <div className="editorial-container">
          <img
            className="img-aboutus-container"
            src={aboutUs.img_editorial}
            alt=""
          />
          <div className="text-aboutus-container">
            <p className="text-aboutus-title">Presentación Editorial</p>
            <p className="text-aboutus-def">{aboutUs.editorial}</p>
          </div>
        </div>
        <div className="slogan-container">
          <h1 className="slogan">¡Contáctanos!</h1>
        </div>
        <div className="contacto-aboutus-container">
          <a
            className="contacto-aboutus-link"
            href={`https://wa.me/52${aboutUs.whatsapp}?text=%C2%A1Hola!,%20podr%C3%ADa%20brindarme%20m%C3%A1s%20informaci%C3%B3n%20de%20su%20revista%20zagazine.`}
          >
            <i className="ri-whatsapp-line config-icon"> {aboutUs.whatsapp}</i>
          </a>
          <a className="contacto-aboutus-link" href={`mailto:${aboutUs.email}`}>
            <i className="ri-mail-line config-icon"> {aboutUs.email}</i>
          </a>
          <i className="ri-phone-line config-icon"> {aboutUs.phone}</i>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
