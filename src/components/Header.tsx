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
} from "../constants";
import { SocialIcon } from "react-social-icons";
import FadeInOnLoad from "./FadeInOnLoad";

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

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key={1} xs={12} sm={12} md={6}>
            <FadeInOnLoad timeout={FADEIN_TIMEOUT_FAST}>
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
            </FadeInOnLoad>
            <FadeInOnLoad delay={300}>
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
                <Grid item>
                  <FadeInOnLoad timeout={FADEIN_SOCIAL_TIMEOUT} delay={600}>
                    <SocialIcon url="https://github.com/Rubiks-boy" />
                  </FadeInOnLoad>
                </Grid>
                <Grid item>
                  <FadeInOnLoad timeout={FADEIN_SOCIAL_TIMEOUT} delay={900}>
                    <SocialIcon url="https://www.facebook.com/adamwalker567123/" />
                  </FadeInOnLoad>
                </Grid>
                <Grid item>
                  <FadeInOnLoad timeout={FADEIN_SOCIAL_TIMEOUT} delay={1200}>
                    <SocialIcon url="https://www.linkedin.com/in/adam-walker-hmc/" />
                  </FadeInOnLoad>
                </Grid>
                <Grid item>
                  <FadeInOnLoad timeout={FADEIN_SOCIAL_TIMEOUT} delay={1500}>
                    <SocialIcon url="https://www.youtube.com/channel/UCuXDq-eMMNt_M49FI4RG7lQ/" />
                  </FadeInOnLoad>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item key={2} xs={12} sm={6} md={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
