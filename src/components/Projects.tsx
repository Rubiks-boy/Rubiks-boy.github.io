import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

interface Props {}
interface State {
  fadeIn: Array<boolean>;
}

export default class Projects extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const fadeIn: Array<boolean> = [];

    for (let i = 0; i < 5; ++i) {
      fadeIn.push(false);
    }

    this.state = { fadeIn };
  }

  componentDidMount() {
    for (let i = 0; i < 5; ++i) {
      const delay = i * 200;
      this.performFadeIn(this.setFadeIn, i, delay);
    }
  }

  setFadeIn = (i: number, val: boolean = true) => {
    // set the project at index i to fade in/out
    const { fadeIn } = this.state;

    fadeIn[i] = val;
    this.setState({
      ...this.state,
      fadeIn,
    });
  };

  performFadeIn = (
    setFadeIn: (i: number) => void,
    i: number,
    delay: number
  ) => {
    // Get the current 'global' time from an API using Promise
    return new Promise(() => {
      setTimeout(() => {
        setFadeIn(i);
      }, delay);
    });
  };

  // getCurrentTime()
  //   .then(currentTime => getCurrentTime())
  //   .then(currentTime => {
  //     console.log('The current time is: ' + currentTime);
  //     return true;
  //   })
  //   .catch(err => console.log('There was an error:' + err))

  render() {
    const { fadeIn } = this.state;

    return (
      <Container>
        <Row>
          {fadeIn.map((f, i) => (
            <div key={i}>
              <ProjectCard fadeIn={f} />
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}
