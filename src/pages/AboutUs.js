
import Blog from "../components/aboutus/Blog";
import DeliverProduct from "../components/aboutus/DeliverProduct";
import Service from "../components/aboutus/Service";
import Banner from "../components/common/Banner";

const AboutUs = () => {
  return (
    <div>
      <Banner
        title="About Us"
      />
      <DeliverProduct />
      <Service />
      <Blog />
    </div>
  )
};

export default AboutUs;
