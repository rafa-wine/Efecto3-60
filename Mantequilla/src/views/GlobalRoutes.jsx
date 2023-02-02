import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import Layout from "./Layout";
import Home from "./Home";
import FrontPage from "./FrontPage";
import AboutUs from "./AboutUs";
import Article from "./Article";
import ListArticles from "./ListArticles";

function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="frontpage" element={<FrontPage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="list_articles/:id" element={<ListArticles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default GlobalRoutes;
