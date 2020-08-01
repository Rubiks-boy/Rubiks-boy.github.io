import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
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
