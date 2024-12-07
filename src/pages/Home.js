// import { Helmet } from 'react-helmet-async';
import Carousel from "../components/home/Carousel";
import CounterSection from "../components/home/CounterSection";
import Features from "../components/home/Features";
import TeamSection from "../components/home/TeamSection";
import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <>
      {/* <Helmet>
        <title> Dashboard: Four</title>
      </Helmet> */}
      <div>
        <Carousel />
        <TeamSection />
        <CounterSection />
        <Features />
        <ProductSection />
      </div>
    </>
  )
};

export default Home;
