import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./Footer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Route exact path="/">
            <Header />
            <Projects />
          </Route>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
