import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
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
