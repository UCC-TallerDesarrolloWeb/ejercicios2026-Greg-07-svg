import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
