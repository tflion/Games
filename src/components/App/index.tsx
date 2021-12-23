import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import GlobalStyles from "../GlobalStyles";

const App = (): ReactElement => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<p>estou em algum ID</p>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
