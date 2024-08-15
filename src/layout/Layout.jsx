import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/register" || location.pathname === "/login" ? (
        ""
      ) : (
        <Header />
      )}

      <Outlet />

      {location.pathname === "/register" || location.pathname === "/login" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
