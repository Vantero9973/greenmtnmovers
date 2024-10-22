import Header from "../components/Header";
import HeaderServicesInfo from "../components/HeaderServicesInfo";
import HeaderInfo from "../components/HeaderInfo";
import Cards from "../components/Cards";
import Testimonials from "../components/Testimonials";
import FaqComponent from "../components/FaqComponent";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Blog from "../components/Blog";

export const metadata = {
  title:
    "Lakewood Movers | Top-Rated Moving Company in Lakewood, CO | Green Mountain Movers",
  description:
    "Looking for reliable movers in Lakewood, CO? Green Mountain Movers offers top-rated, affordable moving services tailored to your needs. Serving Lakewood and the greater Denver area, our experienced team ensures a hassle-free move whether you're moving locally or long-distance. Contact us today for a free quote!",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div>
        <Cards />
        <FaqComponent />
        <Testimonials />
        <Stats />
        <Contact />
        <Blog />
        <HeaderServicesInfo />
        <HeaderInfo />
      </div>
    </>
  );
}
