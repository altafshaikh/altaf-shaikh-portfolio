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
import BlogSection from "../components/blogs/index";

export default function Home(props) {
  const { toggleDarkMode, theme } = useContext(themeContext);

  const darkGradient =
    "linear-gradient(to left, rgb(119,64,105) 0%, rgb(119,64,105) 73%, transparent 0%, transparent 0%)";
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
          <BlogSection blogData={props.blogData.blogUrls} />
        </header>
      </Layout>
    </div>
  );
}

const getData = async (url) => {
  const { data } = await axios(url);
  return data;
};
export const getStaticProps = async (context) => {
  let userData = await getData(homeData);
  let blogdata = await getData(blogData);

  return {
    props: { userData: { ...userData[0] }, blogData: { ...blogdata[0] } },
  };
};
