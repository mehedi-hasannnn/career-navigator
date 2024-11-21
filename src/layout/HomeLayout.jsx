import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSlider from "../components/HomeSlider";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
            </header>
            <nav className="md:w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>

            <section className="">
                <HomeSlider></HomeSlider>
            </section>
            
            <main className="w-11/12 mx-auto py-5">
            
            <section className="mt-10">
                <Services></Services>
            </section>
            
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default HomeLayout;