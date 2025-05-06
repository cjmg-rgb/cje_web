import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div>
            <div className="max-w-[1280px] mx-auto ">
                <nav className="grid grid-cols-12 items-center h-16">
                    <div className="col-span-3 justify-self-center">
                        <h3 className="text-[32px] font-inter-bold">
                            CJElectronics
                        </h3>
                    </div>
                    <div className="col-span-6">
                        <ul className="flex gap-8">
                            <li className="text-lg font-inter-light">Home</li>
                            <li className="text-lg font-inter-light">
                                Our Services
                            </li>
                            <li className="text-lg font-inter-light">
                                About Us
                            </li>
                            <li className="text-lg font-inter-light">
                                More links
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-3 justify-self-center bg-red-200 ">
                        <button className="text-lg text-white font-inter-bold bg-black rounded-md px-[22px] py-[10px]">
                            JOIN
                        </button>
                    </div>
                </nav>
            </div>

            {/* <Navbar />
            <Hero />
            <About />
            <Feature />
            <Testimonials />
            <Contact />
            <Footer /> */}
        </div>
    );
};

export default App;
