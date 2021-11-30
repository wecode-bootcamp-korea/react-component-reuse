import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kakao from "./Pages/Kakao/CardList";
import Watcha from "./Pages/Watcha/Modal";
import ChildrenTest from "./Pages/Watcha/Components/ChildrenTest";

const Examples = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/kakao" element={<Kakao />} />
      <Route path="/watcha" element={<Watcha />} />
      <Route path="/children" element={<ChildrenTest />} />
    </Routes>
  </BrowserRouter>
);

export default Examples;
