import Link from "next/link";
import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import { cities } from "../../app/data/cities";

export const metadata = {
  title:
    "Areas We Serve - Green Mountain Movers | Local & Regional Moving Services",
  description:
    "Discover the wide range of cities and towns served by Green Mountain Movers. Our expert team provides seamless and reliable moving services beyond the listed areas. Contact us today to learn more about how we can assist with your local or regional move!",
};

export default function AreasServed() {
  const formattedCityName = (city) => city.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl w-full gap-8 px-6 pt-10 pb-16">
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Areas We Serve - Green Mountain Movers | Local & Regional Moving
          Services
        </h1>
        <p className="text-base leading-7 text-gray-700 mt-4">
          Welcome to Green Mountain Movers' "Areas Served" page! We are proud to
          offer professional and reliable moving services throughout a wide
          range of cities and towns all around the greater Denver, CO area.
          Whether you're relocating across town or to a nearby community, our
          experienced team is here to make your move as smooth and stress-free
          as possible. While we've highlighted some of the primary areas we
          serve, please know that our service area extends beyond these
          locations. If you don't see your city listed, don't hesitate to
          contact us—we're ready to assist you wherever your move takes you!
          Return to our{" "}
          <Link href="https://greenmtnmovers.com/" className="custom-link">
            home page
          </Link>{" "}
          here.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 mt-16">
          {cities.map((city) => {
            return (
              <Link
                href={`/service-areas/${formattedCityName(city)}`}
                key={city}
              >
                <span className="text-sm md:text-base">{city}</span>
              </Link>
            );
          })}
        </div>
        <div className="pt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get A Free Moving Quote Today for Long-Distance Moving Services
          </h2>
          <p className="text-base leading-7 text-gray-700 mt-4">
            Contact Green Mountain Movers today to receive your free quote and,
            if needed, an on-site estimate for your move. Don't trust your
            precious belongings to just any moving company - choose Green
            Mountain Movers for the utmost care and professionalism.
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
