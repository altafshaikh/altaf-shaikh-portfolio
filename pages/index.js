import axios from "axios";

// components
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";

// constants
import { homeData } from "../constants/jsonEndpoint";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const headerStyle = {
    // backgroundImage: `url(${props.userData.bannerImages[0]})`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <div>
      <Layout
        title="Altaf Shaikh - Software Developer"
        favicon={props.userData.favicon}
        footerContent={{
          socialLinks: props.userData.socialLinks,
          logo: props.userData.companyLogoBlack,
        }}
      >
        <header style={headerStyle}>
          <Navbar logo={props.userData.companyLogowhite} />
          <Banner heroContent={props.userData.heroContent} />
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
