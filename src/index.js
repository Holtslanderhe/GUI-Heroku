import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import Projects from "./projects/Projects"
import Page from "./components/Page";
import Hw1 from "./projects/1/Hw1"
import Hw2 from "./projects/2/Hw2"
import DNE from "./components/DNE"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Page />}>
              <Route index element={<Home />} />
              <Route path={"/projects"} element={<Projects />}/>
              <Route path={"/projects/1"} element={<Hw1 />}/>
              <Route path={"/projects/2"} element={<Hw2 />}/>
              <Route path={"/projects/3"} element={<DNE />}/>
              <Route path={"/projects/4"} element={<DNE />}/>
              <Route path={"/*"} element={<DNE />}/>
          </Route>
      </Routes>
  </BrowserRouter>
);

