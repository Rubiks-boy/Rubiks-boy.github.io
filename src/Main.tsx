import React, { Component } from "react";
import AlbumTemplate from "./AlbumTemplate";
import Projects from "./components/Projects";

export default class Main extends Component {
  render() {
    return (
      <>
        <AlbumTemplate />
        <Projects />
      </>
    );
  }
}
