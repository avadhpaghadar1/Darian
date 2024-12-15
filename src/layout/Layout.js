import { Outlet } from "react-router-dom";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Help from "../components/common/Help";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Help />
      <Footer />
    </div>
  );
};

export default Layout;
