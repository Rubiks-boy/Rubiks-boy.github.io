import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
