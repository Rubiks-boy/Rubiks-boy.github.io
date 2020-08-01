import React, { Component } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Projects />
      </>
    );
  }
}
