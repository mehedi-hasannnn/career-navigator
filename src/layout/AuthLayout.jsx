import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]">
            <header>
                <Header></Header>
            </header>
            <nav className="md:w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;