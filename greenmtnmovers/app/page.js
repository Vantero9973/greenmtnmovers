import Header from "../components/Header";
import Cards from "../components/Cards";
import Testimonials from "../components/Testimonials";
import FaqComponent from "../components/FaqComponent";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

export default function Home() {
  return (
    <div>
      <Header />
      <div className="responsive-padding">
        <Cards />
        <Testimonials />
        <FaqComponent />
        <Stats />
        <Contact />
      </div>
    </div>
  );
}
