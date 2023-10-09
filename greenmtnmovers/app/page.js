import Header from "../components/Header";
import Cards from "../components/Cards";
import Testimonials from "../components/Testimonials";
import FaqComponent from "../components/FaqComponent";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import NavbarAbsolute from "../components/NavbarAbsolute";

export default function Home() {
  return (
    <>
      <NavbarAbsolute />
      <Header />
      <div className="responsive-padding">
        <Cards />
        <Testimonials />
        <FaqComponent />
        <Stats />
        <Contact />
      </div>
    </>
  );
}
