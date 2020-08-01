import React from "react";
import { Fade } from "@material-ui/core";

export interface Props {
  children: React.ReactElement;
  delay: number;
}

export interface State {
  fadeIn: boolean;
}

export default class FadeTimeout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      fadeIn: false,
    };
  }

  componentDidMount() {
    for (let i = 0; i < 5; ++i) {
      const delay = i * 200;
      this.performFadeIn(this.setFadeIn);
    }
  }

  setFadeIn = () => {
    this.setState({
      fadeIn: true,
    });
  };

  performFadeIn = (setFadeIn: () => void) => {
    const { delay } = this.props;
    // Get the current 'global' time from an API using Promise
    return new Promise(() => {
      setTimeout(() => {
        setFadeIn();
      }, delay);
    });
  };

  render() {
    const { children } = this.props;
    const { fadeIn } = this.state;

    return (
      <Fade in={fadeIn} timeout={1000}>
        {children}
      </Fade>
    );
  }
}
