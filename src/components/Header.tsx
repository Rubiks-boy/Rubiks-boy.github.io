import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import {
  RESUME_PATH,
  FADEIN_SOCIAL_TIMEOUT,
  FADEIN_TIMEOUT_FAST,
  FADEIN_SEPARATION,
} from "../constants";
import { SocialIcon } from "react-social-icons";
import FadeInOnLoad from "./FadeInOnLoad";
import { social } from "../data";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(12, 0, 9),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  components: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.up("md")]: {},
  },
  "@keyframes bg-gradient-animate": {
    "0%": { backgroundPosition: "left" },
    "100%": { backgroundPosition: "right" },
  },
  gradient: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.up("md")]: {},
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    // backgroundColor: "rgba(0, 0, 0, 0)",
    // backgroundImage: "linear-gradient(45deg, #FFFFFF 00%, #000000 90%)",
    // transition: "background 5s ease-in-out",
    backgroundSize: "500%",
    backgroundImage:
      "linear-gradient(45deg, #0033cc 0%, #0040ff 25%, #3366ff 50%, #5500dd 80%, #9900ee 100%)",
    backgroundPosition: "left",
    animation: "$bg-gradient-animate 10s infinite alternate",
  },
  socialIcon: {
    "&:hover": {
      height: "500px",
    },
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key={1} xs={12} sm={12} md={6}>
            <FadeInOnLoad timeout={FADEIN_TIMEOUT_FAST}>
              <div>
                <Typography
                  // className={classes.gradient}
                  component="h1"
                  variant="h2"
                  // color="textPrimary"
                  gutterBottom
                >
                  <div className={classes.gradient}>Adam Walker</div>
                </Typography>
                <Typography
                  className={classes.components}
                  variant="h5"
                  color="textSecondary"
                  paragraph
                >
                  I will come up with something to put here.
                </Typography>
              </div>
            </FadeInOnLoad>
            <FadeInOnLoad delay={FADEIN_SEPARATION}>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} className={classes.components}>
                  <Grid item>
                    <Link to={RESUME_PATH} target="_blank">
                      <Button variant="contained" color="primary">
                        Download Resume
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </FadeInOnLoad>
            <div className={classes.heroButtons}>
              <Grid container spacing={1} className={classes.components}>
                {social.map((url: string, i: number) => (
                  <Grid item>
                    <FadeInOnLoad
                      timeout={FADEIN_SOCIAL_TIMEOUT}
                      // +2 from the delays for text, and then buttons
                      delay={FADEIN_SEPARATION * (i + 2)}
                    >
                      <SocialIcon url={url} className={classes.socialIcon} />
                    </FadeInOnLoad>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
          <Grid item key={2} xs={12} sm={6} md={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
