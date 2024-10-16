import Image from "next/image";
import Link from "next/link";
import moving from "../../public/media/moving-9.jpg";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ClipboardDocumentIcon,
  CubeIcon,
  CurrencyDollarIcon,
  HomeIcon,
  NoSymbolIcon,
  ShieldCheckIcon,
  TruckIcon,
  UsersIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../components/ContactForm";
import BookingProcess from "../../components/BookingProcess";
import Cards from "./Cards";
import Navbar from "../../components/Navbar";
import FAQ from "./FAQ";

export const metadata = {
  title: "Top-Rated Local Movers in Lakewood, CO | Green Mountain Movers",
  description:
    "Looking for reliable local movers in Lakewood, CO? Green Mountain Movers offers top-rated, affordable local moving services. Serving Lakewood and the greater Denver area, our experienced team ensures a smooth and stress-free move. Contact us today for a free quote!",
};

const features = [
  {
    description:
      "Flat rate pricing available for transparent and predictable costs.",
    icon: CurrencyDollarIcon,
  },
  {
    description:
      "Detailed estimate with a breakdown of every part of your move, so you know exactly what to expect.",
    icon: ClipboardDocumentIcon,
  },
  {
    description:
      "Free use of high-quality moving blankets for added protection of your furniture and belongings.",
    icon: ShieldCheckIcon,
  },
  {
    description:
      "Expert disassembly and reassembly of furniture at no additional charge, saving you time and effort.",
    icon: WrenchIcon,
  },
  {
    description:
      "No fuel surcharge, so you don’t have to worry about hidden fees.",
    icon: NoSymbolIcon,
  },
  {
    description:
      "Flexible packing services, whether you need full-service packing or assistance with specific items.",
    icon: CubeIcon,
  },
  {
    description:
      "Our team consists of knowledgeable, experienced, and reliable movers who treat your possessions with the utmost care.",
    icon: UsersIcon,
  },
  {
    description:
      "Specialized custom moving trucks equipped with all necessary equipment and materials for a safe and efficient move.",
    icon: TruckIcon,
  },
  {
    description:
      "We take pride in our commitment to punctuality, professionalism, and customer satisfaction, ensuring a stress-free moving experience.",
    icon: CheckCircleIcon,
  },
];

export default function LocalMoving() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="berkley" className="mt-5 sm:mt-10 mb-10">
            <div className="mx-auto max-w-4xl lg:mx-0">
              <nav aria-label="Breadcrumb" className="flex">
                <ol className="flex items-center space-x-4">
                  <li>
                    <div>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-600"
                      >
                        <HomeIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <span className="sr-only">Home</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-gray-500"
                      />
                      <Link
                        href="/local-moving"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Local Moving
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Top-Rated Local Movers in Lakewood, CO | Green Mountain Movers
              </h1>
            </div>

            <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-2 lg:items-start mt-10 sm:mt-20">
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  alt="movers"
                  src={moving}
                  placeholder="blur"
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h4 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Welcome to Green Mountain Movers
                      </h4>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      As your trusted partner for local moves in Colorado, Green
                      Mountain Movers is dedicated to providing seamless and
                      stress-free relocation experiences. With a deep
                      understanding of Colorado's diverse landscapes and cities,
                      we offer a wide range of services tailored to your
                      specific needs. Let's explore how we can make your
                      Colorado move an unforgettable journey.
                    </p>
                    <div className="lg:max-w-lg mt-6">
                      <h4 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Your Trusted Local Moving Company in Denver
                      </h4>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Amidst Denver's bustling life, you'll find Green Mountain
                      Movers, a beacon of reliability in the world of home
                      moving. As premier Denver local movers,{" "}
                      <strong>we've built a foundation of trust </strong>
                      with our community through dedicated local moving services
                      that prioritize your peace of mind. Whether you're
                      transitioning to a new neighborhood or relocating your
                      residence within the city's vibrant borders, our movers
                      are equipped to handle every aspect of your moving
                      experience.
                    </p>
                    <p className="mt-6">
                      At Green Mountain Movers, we understand that every move is
                      unique, which is why our mover specialists craft
                      personalized plans tailored to your specific needs. Our
                      local moving company stands out for our meticulous
                      attention to detail and commitment to making your moving
                      process seamless and stress-free.
                    </p>
                    <p className="mt-6">
                      When the time comes for you to embark on your local moving
                      journey, let us help elevate the experience. You deserve a
                      local moving company that's as invested in your new
                      beginnings as you are. With Green Mountain Movers by your
                      side, your local move is in the hands of trusted
                      professionals every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Hire a Denver Professional Local Mover
              </h4>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Hiring a professional local mover like Green Mountain Movers can
                make all the difference when it comes to local home or
                residential moving in Denver. Moving to a new local apartment or
                house can be overwhelming, but with our team of dedicated mover
                specialists, you can rest assured that your move will be handled
                with care and precision. From packing to transport and
                unpacking, we offer tailored services to meet your specific
                needs, ensuring a seamless and stress-free moving experience.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Heavy lifting is always difficult and can result in injury or
                damage if not done properly. Our professional movers are trained
                and equipped to easily handle all types of furniture,
                appliances, and boxes, making sure your belongings are safe and
                secure throughout the process.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                <strong>Trust Green Mountain Movers</strong> to be your partner
                in this journey of new beginnings. Let us take the lead so you
                can easily focus on settling into your new local space.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Discover the Local Moving Services We Offer
                </h4>
                <p className="mt-4 leading-6 text-gray-600">
                  We provide a wide range of residential moving services
                  tailored to meet the unique needs of our local communities.
                  Whether you're moving within the same city or to a nearby
                  town, our team is here to ensure a smooth and hassle-free
                  experience.
                </p>

                <Cards />
                <FAQ />
              </div>
            </div>
          </section>
        </div>
      </div>
      <BookingProcess />

      <div className="flex justify-center items-center pb-5 px-5 md:px-10 z-1 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Green Mountain Movers?
            </h2>
            <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 text-[#0e5933]/80"
                    />
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get a Quote for Local Moving Services
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Planning your local move in Colorado starts with gathering quotes
              from reputable moving companies. Green Mountain Movers offers{" "}
              <i>complimentary estimates</i> tailored to your unique needs. Our
              detailed quotes provide a breakdown of every aspect of your move,
              ensuring transparency and clarity throughout the process.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Colorado's diverse terrain and cities require customized moving
              solutions. Our team considers factors such as distance, location,
              and the size of your move when providing quotes. Contact Green
              Mountain Movers today to receive your free quote and, if needed,
              an on-site estimate for your Colorado move.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="service-areas-clippath-bg flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center gap-3 py-20 px-5 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Local Move Information
          </h2>
          <p className="mx-auto mt-6 leading-8 text-gray-200">
            A local move in Colorado typically stays within a 100-mile radius
            and remains within the state of origin. With its diverse geography,
            Colorado offers a unique backdrop for your move, whether you're
            exploring the majestic mountains or the vibrant cities. Various
            factors, including your level of preparedness, packing, and
            proximity to the truck, influence the final cost of your move. If
            your searching for “
            <Link
              href="https://greenmtnmovers.com/"
              className="underline hover:text-[#0000ee]"
            >
              moving services near me
            </Link>
            ” in Colorado, look no further than our reliable and trusted team.
          </p>
          <p className="mx-auto mt-6 leading-8 text-gray-200">
            Green Mountain Movers is your trusted partner for a seamless and
            stress-free local move in beautiful Colorado. We have a deep
            understanding of the state's geography and are committed to
            providing you with a memorable moving experience in this stunning
            part of the country. Still unsure{" "}
            <Link
              href="https://greenmtnmovers.com/how-do-you-plan-a-local-move"
              className="underline hover:text-[#0000ee]"
            >
              how do you plan a local move
            </Link>
            ? or{" "}
            <Link
              href="https://greenmtnmovers.com/how-do-i-find-the-best-local-movers"
              className="underline hover:text-[#0000ee]"
            >
              how do I find the best local movers
            </Link>
            ? Check out our blog posts for expert tips and advice on local move
            preparation.
          </p>
        </div>
      </div>
    </>
  );
}
