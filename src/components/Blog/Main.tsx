import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "./Markdown";
import Card from "./Card";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));
export default function Main(props: { posts: any; title: any }) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts &&
        posts.map((post: any, index: number) => (
          <Card
            title={post.title}
            description={post.description}
            longDescription={post.longDescription}
            createdAt={post.createdAt}
            category={post.categoryIds ? post.categoryIds[0]: ''}
            secondCategory={post.categoryIds ? post.categoryIds[1]: ''}
          />
          // <Markdown className={classes.markdown} key={post.id}>
          //   {post.title}
          // </Markdown>
          // JSON.stringify(posts)
        ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
