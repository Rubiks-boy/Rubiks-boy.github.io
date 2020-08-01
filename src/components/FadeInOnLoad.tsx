import { Fade } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FADEIN_TIMEOUT } from "../constants";

export interface Props {
  children: React.ReactElement;
  delay?: number;
  timeout?: number;
}

export default function FadingSocialIcon(props: Props) {
  const [fadeIn, setFadeIn] = useState(false);
  const { children, delay, timeout } = props;

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, delay || 0);
  });

  return (
    <Fade in={fadeIn} timeout={timeout || FADEIN_TIMEOUT}>
      {children}
    </Fade>
  );
}
