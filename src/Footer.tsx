import React from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SocialIcon } from "react-social-icons";
import { social } from "./data";

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
      <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
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
      <Grid container spacing={1} className={classes.socialIcons}>
        {social.map((url: string) => (
          <Grid item>
            <SocialIcon
              url={url}
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Copyright />
    </footer>
  );
}
