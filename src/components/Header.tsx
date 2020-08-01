import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { RESUME_PATH } from "../constants";
import { SocialIcon } from "react-social-icons";

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
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item key={1} xs={12} sm={12} md={6}>
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
              <div className={classes.heroButtons}>
                <Grid container spacing={1} className={classes.components}>
                  <Grid item>
                    <SocialIcon url="https://github.com/Rubiks-boy" />
                  </Grid>
                  <Grid item>
                    <SocialIcon url="https://www.facebook.com/adamwalker567123/" />
                  </Grid>
                  <Grid item>
                    <SocialIcon url="https://www.linkedin.com/in/adam-walker-hmc/" />
                  </Grid>
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
