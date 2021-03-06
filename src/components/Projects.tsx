import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FadeInOnLoad from "./FadeInOnLoad";
import { FADEIN_SEPARATION_FAST } from "../constants";
import { projects } from "../data";

interface ProjectCard {
  name: string;
  desc: string;
  image: string;
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.cardGrid}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {projects.map((card: ProjectCard, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <FadeInOnLoad delay={i * FADEIN_SEPARATION_FAST}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </FadeInOnLoad>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
