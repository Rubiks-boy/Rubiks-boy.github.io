import React from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SocialIcon } from "react-social-icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  socialIcons: {
    justifyContent: "center",
  },
  socialIcon: {
    width: "30px",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <div>
        <Grid container spacing={1} className={classes.socialIcons}>
          <Grid item>
            <SocialIcon
              url="https://github.com/Rubiks-boy"
              style={{
                width: "30px",
                height: "30px",
                color: "black",
              }}
            />
          </Grid>
          <Grid item>
            <SocialIcon
              url="https://www.facebook.com/adamwalker567123/"
              style={{ width: "30px", height: "30px" }}
            />
          </Grid>
          <Grid item>
            <SocialIcon
              url="https://www.linkedin.com/in/adam-walker-hmc/"
              style={{ width: "30px", height: "30px" }}
            />
          </Grid>
        </Grid>
      </div>
      <Copyright />
    </footer>
  );
}
