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
                      <SocialIcon url={url} />
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
