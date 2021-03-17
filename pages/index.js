import axios from "axios";
import React, { useContext } from "react";
import { themeContext } from "./_app";

// components
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";

// constants
import { homeData } from "../constants/jsonEndpoint";

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
          <BlogSection />
        </header>
      </Layout>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(homeData);

  return {
    props: { userData: { ...data[0] } },
  };
};
