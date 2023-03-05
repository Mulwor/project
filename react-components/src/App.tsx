import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";

export class App extends React.Component {
  render = () => (
    <Routes>
      <Route path="/" element={<div>Начальная страница</div>} />
      <Route path="/error" element={<div>Страница с ошибкой</div>} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
