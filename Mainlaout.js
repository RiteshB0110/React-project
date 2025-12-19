import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />
        <div className="main-content"
>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
