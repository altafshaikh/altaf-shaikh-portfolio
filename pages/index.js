import axios from "axios";

// components
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";

// constants
import { homeData } from "../constants/jsonEndpoint";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const headerBackground = {
    background:
      "linear-gradient(to left, rgb(111,220,191) 0%, rgb(111,220,191) 73%, white 55%, white 100%)",
    width: "100%",
  };

  const toggleDarkMode = (event) => {
    console.log("click event", event);
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
          <Navbar
            logo={props.userData.companyLogowhite}
            toggleDarkMode={toggleDarkMode}
          />
          <Banner
            heroContent={props.userData.heroContent}
            toggleDarkMode={toggleDarkMode}
          />
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
