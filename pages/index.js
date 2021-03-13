import axios from "axios";

// components
import Layout from "../../components/Layout";
import Navbar from "../../components/contentstack/navbar";
import Banner from "../../components/contentstack/banner";

// constants
import { contentstackDataURI } from "../../constants/endpoints";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const headerStyle = {
    backgroundImage: `url(${props.companyData.bannerImages[0]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <div>
      <Layout
        title="Altaf Shaikh - Software Developer"
        favicon={props.companyData.favicon}
        footerContent={{
          socialLinks: props.companyData.socialLinks,
          logo: props.companyData.companyLogoBlack,
        }}
      >
        <header style={headerStyle}>
          <Navbar logo={props.companyData.companyLogowhite} />
          <Banner heroContent={props.companyData.heroContent} />
        </header>
      </Layout>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(contentstackDataURI);

  return {
    props: { companyData: { ...data[0] } },
  };
};
