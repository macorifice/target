import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import post1 from "./Posts/blog-post1";
import post2 from "./Posts/blog-post2";
import post3 from "./Posts/blog-post3";
import techPost1 from "./Posts/tech-post1";
import logo from "../../assets/logo_transparent.png";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/weekly?politics",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    id: 1,
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/weekly?tech",
    imageText: "Image Text",
  },
  {
    id: 2,
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/weekly?design",
    imageText: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { id: 1, name: "GitHub", icon: GitHubIcon },
    { id: 2, name: "Twitter", icon: TwitterIcon },
    { id: 3, name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  const [posts, setposts] = useState([]);
  const [sections, setsections] = useState();
  const [selectedChip, setselectedchip] = useState(0);
  const classes = useStyles();

  const toggleChipProperty = (key: number) => {
    setselectedchip(key);
  };

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const result = await axios.get(
          `https://the-social-target.com/api/posts`
        );
        setposts(
          result.data.filter(
            (post: { fk_category: number }) => post.fk_category === selectedChip
          )
        );
      }, 2500);
    };

    fetchData();
  }, [selectedChip]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          categoryId={selectedChip}
          toggleChipProperty={toggleChipProperty}
          title={logo}
          sections={sections}
        />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
