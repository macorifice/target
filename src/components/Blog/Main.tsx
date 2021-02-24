import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "./Markdown";
import Card from "./Card";
import axios from "axios";
import _ from 'lodash';
import CardCore from '@material-ui/core/Card';
import Skeleton from "./Skeleton";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));
export default function Main(props: { posts: any; loading: boolean; }) {
  const classes = useStyles();
  const { posts, loading } = props;

  return (
    <Grid item xs={12} md={8}>
      <Divider />
      {!_.isEmpty(posts)
        ? posts.map((post: any, index: number) => (
            // <Card
            //   key={index}
            //   title={post.title}
            //   description={post.description}
            //   longDescription={post.longDescription}
            //   createdAt={post.createdAt}
            //   category={post.category.title}
            // />
            <>
              <div style={{ display: "flex" }}>
                <Skeleton
                  loading={loading}
                  key={post[index]}
                  title={post.title}
                  description={post.description}
                  subheader={new Date(post.createdAt).toLocaleString("default", {
                    weekday: "long", 
                  }) + ' , ' + new Date(post.createdAt).toLocaleString("default", {
                    day: "2-digit", 
                  })
                  + ' ' + new Date(post.createdAt).toLocaleString("default", {
                    month: "long", 
                  })
                  + ' ' + new Date(post.createdAt).toLocaleString("default", {
                    year: "numeric", 
                  })}
                  backgroundImg="https://picsum.photos/200/300"
                  avatar="https://picsum.photos/200/500"
                />
                <Skeleton
                  loading={loading}
                  key={post[index]}
                  title={post.title}
                  description={post.description}
                  subheader={new Date(post.createdAt).toLocaleString("default", {
                    weekday: "long", 
                  }) + ' , ' + new Date(post.createdAt).toLocaleString("default", {
                    day: "2-digit", 
                  })
                  + ' ' + new Date(post.createdAt).toLocaleString("default", {
                    month: "long", 
                  })
                  + ' ' + new Date(post.createdAt).toLocaleString("default", {
                    year: "numeric", 
                  })}
                  backgroundImg="https://picsum.photos/200/400"
                  avatar="https://picsum.photos/200/600"
                />
              </div>
              <div style={{ display: "flex" }}>
                <Skeleton
                  loading={loading}
                  key={post[index]}
                  title={post.title}
                  description={post.description}
                  subheader={new Date(post.createdAt).toLocaleString("default", {
                    weekday: "long", 
                  }) + ' , ' + new Date(post.createdAt).toLocaleString("default", {
                    day: "2-digit", 
                  })
                  + ' ' + new Date(post.createdAt).toLocaleString("default", {
                    month: "long", 
                  })
                  + ' ' + new Date(post.createdAt).toLocaleString("default", {
                    year: "numeric", 
                  })}
                  backgroundImg="https://picsum.photos/200/100"
                  avatar="https://picsum.photos/200/200"
                />
                <Skeleton
                  loading={loading}
                  key={post[index]}
                  title={post.title}
                  description={post.description}
                  subheader={new Date(post.createdAt).toLocaleString("default", {
                    weekday: "long", 
                  }) + ' , ' + new Date(post.createdAt).toLocaleString("default", {
                    day: "2-digit", 
                  })
                  + ' ' + new Date(post.createdAt).toLocaleString("default", {
                    month: "long", 
                  })
                  + ' ' + new Date(post.createdAt).toLocaleString("default", {
                    year: "numeric", 
                  })}
                  backgroundImg="https://picsum.photos/200/700"
                  avatar="https://picsum.photos/200/800"
                />
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
