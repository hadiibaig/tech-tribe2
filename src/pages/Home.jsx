import AboutUS from "../components/AboutUS/AboutUS";
import Brands from "../components/Brands/Brands";
import ClientSaySlider from "../components/ClientSaySlider/ClientSaySlider";
import FAQs from "../components/FAQs/FAQs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MagicNumbers from "../components/MagicNumbers/MagicNumbers";
import Navbar from "../components/Navbar/Navbar";
import OurLeader from "../components/OurLeader/OurLeader";
import OurServices from "../components/OurServices/OurServices";
import PortfolioSlider from "../components/PortfolioSlider/PortfolioSlider";
import LatestAritclesSlider from "../components/LatestArticles/LatestArticles";
import LastForever from "../components/LastForever/LastForever";
import SendAMessage from "../components/SendAMessage/SendAMessage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MagicNumbers />
      <AboutUS />
      <Brands />
      <FAQs />
      <OurServices />
      <PortfolioSlider />
      <ClientSaySlider />
      <OurLeader />
      <LatestAritclesSlider />
      <LastForever />
      <SendAMessage />
      <Footer />
    </div>
  );
};
export default Home;
