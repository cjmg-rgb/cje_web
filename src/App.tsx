import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div className="px-8">
            <Navbar />
            <Hero />
            <About />
            <Feature />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
