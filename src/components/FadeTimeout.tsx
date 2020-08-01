import React from "react";
import { Fade } from "@material-ui/core";
import { FADEIN_TIMEOUT } from "../constants";

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
    this.performFadeIn(this.setFadeIn);
  }

  setFadeIn = () => {
    this.setState({
      fadeIn: true,
    });
  };

  performFadeIn = (setFadeIn: () => void) => {
    const { delay } = this.props;
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
      <Fade in={fadeIn} timeout={FADEIN_TIMEOUT}>
        {children}
      </Fade>
    );
  }
}
