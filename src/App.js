// src/App.js
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import NFTLandingPage from "./map.jsx";               // 你的首页组件（默认导出）
import MarketPlacePage from "./Elements/MarketPlacePage.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NFTLandingPage />} />
        <Route path="/marketplace" element={<MarketPlacePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
