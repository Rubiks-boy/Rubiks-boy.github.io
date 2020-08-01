import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import Button from "react-bootstrap/Button";
import logo from "../logo.svg";

interface Props {
  fadeIn: boolean;
}

export default class ProjectCard extends Component<Props> {
  render() {
    const { fadeIn } = this.props;
    return (
      <Fade in={fadeIn}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Fade>
    );
  }
}
