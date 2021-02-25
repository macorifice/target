import React, {  } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import _ from "lodash";
import Skeleton from "./Skeleton";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));
export default function Main(props: { posts: any; loading: boolean }) {
  const classes = useStyles();
  const { posts, loading } = props;

  return (
    <Grid item xs={12} md={8}>
      <Divider />
      {!_.isEmpty(posts)
        ? posts.map((post: any, index: number) => (
            <>
              <div className="row">
                <div className="column">
                  <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container>
                      <Grid item key={index} xs={12} sm={12} md={12}>
                        <Skeleton
                          loading={loading}
                          key={post[index]}
                          title={post.title}
                          description={post.description}
                          subheader={
                            new Date(post.createdAt).toLocaleString("default", {
                              weekday: "long",
                            }) +
                            " , " +
                            new Date(post.createdAt).toLocaleString("default", {
                              day: "2-digit",
                            }) +
                            " " +
                            new Date(post.createdAt).toLocaleString("default", {
                              month: "long",
                            }) +
                            " " +
                            new Date(post.createdAt).toLocaleString("default", {
                              year: "numeric",
                            })
                          }
                          backgroundImg="https://picsum.photos/200/300"
                          avatar="https://picsum.photos/200/500"
                        />
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
            </>
          ))
        : "NO DATA FOUND"}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
