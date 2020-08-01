import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RESUME_PATH,
  FADEIN_SOCIAL_TIMEOUT,
  FADEIN_TIMEOUT,
  FADEIN_TIMEOUT_FAST,
} from "../constants";
import { SocialIcon } from "react-social-icons";
import { Slide, Fade } from "@material-ui/core";

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
}));

export default function Album() {
  const classes = useStyles();
  const [fadeInText, setFadeInText] = useState(false);
  const [fadeInBtns, setFadeInBtns] = useState(false);
  const [fadeInSocial1, setFadeInSocial1] = useState(false);
  const [fadeInSocial2, setFadeInSocial2] = useState(false);
  const [fadeInSocial3, setFadeInSocial3] = useState(false);

  useEffect(() => {
    setFadeInText(true);
    setTimeout(() => {
      setFadeInBtns(true);
    }, 300);
    setTimeout(() => {
      setFadeInSocial1(true);
    }, 600);
    setTimeout(() => {
      setFadeInSocial2(true);
    }, 900);
    setTimeout(() => {
      setFadeInSocial3(true);
    }, 1200);
  }, []);

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item key={1} xs={12} sm={12} md={6}>
              <Fade in={fadeInText} timeout={FADEIN_TIMEOUT_FAST}>
                <div>
                  <Typography
                    className={classes.components}
                    component="h1"
                    variant="h2"
                    color="textPrimary"
                    gutterBottom
                  >
                    Adam Walker
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
              </Fade>
              <Fade in={fadeInBtns} timeout={FADEIN_TIMEOUT}>
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
              </Fade>
              <div className={classes.heroButtons}>
                <Grid container spacing={1} className={classes.components}>
                  <Fade in={fadeInSocial1} timeout={FADEIN_SOCIAL_TIMEOUT}>
                    <Grid item>
                      <SocialIcon url="https://github.com/Rubiks-boy" />
                    </Grid>
                  </Fade>
                  <Fade in={fadeInSocial2} timeout={FADEIN_SOCIAL_TIMEOUT}>
                    <Grid item>
                      <SocialIcon url="https://www.facebook.com/adamwalker567123/" />
                    </Grid>
                  </Fade>
                  <Fade in={fadeInSocial3} timeout={FADEIN_SOCIAL_TIMEOUT}>
                    <Grid item>
                      <SocialIcon url="https://www.linkedin.com/in/adam-walker-hmc/" />
                    </Grid>
                  </Fade>
                </Grid>
              </div>
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={4}></Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
