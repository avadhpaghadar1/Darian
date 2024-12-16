// import { Helmet } from 'react-helmet-async';
import Carousel from "../components/home/Carousel";
import CounterSection from "../components/home/CounterSection";
import Features from "../components/home/Features";
import TeamSection from "../components/home/TeamSection";
import Testimonial from "../components/home/Testimonial";
import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <>
      {/* <Helmet>
        <title> Dashboard: Four</title>
      </Helmet> */}
      <div>
        <Carousel />
        <Features />
        <CounterSection />
        <ProductSection />
        <TeamSection />
        <Testimonial />
      </div>
    </>
  )
};

export default Home;
