import axios from "axios";
import React, { useContext } from "react";
import { themeContext } from "./_app";

// components
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";

// constants
import { blogData, homeData } from "../constants/jsonEndpoint";

import styles from "../styles/Home.module.css";
// import BlogSection from "../components/blogs/index";

import dynamic from "next/dynamic";
import TalkSection from "../components/talks";
const { extract } = require("article-parser");

const BlogSection = dynamic(() => import("../components/blogs/index"));

export default function Home(props) {
  const { toggleDarkMode, theme } = useContext(themeContext);

  const darkGradient =
    "linear-gradient(to left, rgb(119,64,105) 0%, rgb(119,64,105) 73%, rgb(16%, 15%, 16%) 0%, rgb(16%, 15%, 16%) 0%)";
  const lightGradient =
    "linear-gradient(to left, rgb(111,220,191) 0%, rgb(111,220,191) 73%, white 0%, white 0%)";
  const headerBackground = {
    background: theme.mode === "light" ? lightGradient : darkGradient,
    width: "100%",
  };

  return (
    <div>
      <Layout
        title="Altaf Shaikh - Software Developer"
        footerContent={{
          socialLinks: props.userData.socialLinks,
          logo: props.userData.companyLogoBlack,
        }}
      >
        <header style={headerBackground}>
          <Navbar logo={props.userData.companyLogowhite} />
          <Banner heroContent={props.userData.heroContent} />
          <BlogSection blogData={props.blogData} theme={theme} />
          <TalkSection />
        </header>
      </Layout>
    </div>
  );
}

const getData = async (url) => {
  const { data } = await axios(url);
  return data;
};

const fetchArticleData = async ({ blogUrls }) => {
  let articles = [];
  console.log(blogUrls);

  let len = blogUrls.length;

  try {
    while (len > 0) {
      const blog = await extract(blogUrls[len - 1]);
      articles.push(blog);
      len--;
    }
  } catch (error) {
    console.log(error);
  }

  return articles;
};

export const getStaticProps = async (context) => {
  let userData = await getData(homeData);
  let blogdata = await getData(blogData);
  let blogs = await fetchArticleData(blogdata[0]);

  // console.log(blogs);

  return {
    props: { userData: { ...userData[0] }, blogData: { ...blogs } },
  };
};
