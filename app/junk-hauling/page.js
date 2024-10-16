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
  UsersIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../components/ContactForm";
import BookingProcess from "../../components/BookingProcess";
import JunkHaulingCards from "./Cards";
import Navbar from "../../components/Navbar";
import JunkHaulingFAQ from "./FAQ";

export const metadata = {
  title:
    "Top-Rated Junk Hauling Services in Lakewood, CO | Green Mountain Movers",
  description:
    "Looking for reliable junk hauling services in Lakewood, CO? Green Mountain Movers offers top-rated, affordable junk removal. Serving Lakewood and the greater Denver area, our experienced team ensures quick and eco-friendly disposal. Contact us today for a free quote!",
};

const features = [
  {
    description: "Flat rate pricing for transparent and predictable costs.",
    icon: CurrencyDollarIcon,
  },
  {
    description:
      "Detailed estimate with a breakdown of every part of your haul.",
    icon: ClipboardDocumentIcon,
  },
  {
    description: "Eco-friendly disposal with recycling and donation options.",
    icon: CubeIcon,
  },
  {
    description:
      "No hidden fees, so you don’t have to worry about surprise costs.",
    icon: NoSymbolIcon,
  },
  {
    description:
      "Experienced and reliable team handling every aspect of your junk removal.",
    icon: UsersIcon,
  },
  {
    description:
      "Customer satisfaction and professionalism every step of the way.",
    icon: CheckCircleIcon,
  },
];

export default function JunkHauling() {
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
                        href="/junk-hauling"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Junk Hauling
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Junk Hauling Services
              </h1>
            </div>

            <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-2 lg:items-start mt-10 sm:mt-20">
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  alt="junk hauling"
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
                      As your trusted partner for junk hauling in Colorado,
                      Green Mountain Movers is dedicated to providing efficient
                      and eco-friendly junk removal services. Whether you're
                      cleaning out a house, clearing out construction debris, or
                      removing unwanted office equipment, our team is here to
                      help. We handle all types of junk hauling while keeping
                      our community and environment in mind.
                    </p>
                    <div className="lg:max-w-lg mt-6">
                      <h4 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Your Local Junk Hauling Experts in Denver
                      </h4>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Green Mountain Movers is committed to being your go-to
                      junk hauling company in Denver. Our comprehensive junk
                      removal services cover everything from residential
                      cleanouts to commercial junk disposal. Whether you’re
                      clearing out a home, office, or construction site, we
                      provide a reliable and eco-friendly solution.
                    </p>
                    <p className="mt-6">
                      We pride ourselves on ensuring that every job is handled
                      with care. Our team is equipped to haul large and small
                      items, from furniture and appliances to construction
                      debris. No matter the size of your job, we have the tools
                      and expertise to get it done efficiently and responsibly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Hire a Professional Junk Hauling Service?
              </h4>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Hiring a professional junk hauling service can save you time and
                effort while ensuring proper disposal of your unwanted items.
                Whether you're tackling a large home cleanout or need help
                clearing out construction debris, our team is here to handle the
                heavy lifting. Plus, we prioritize eco-friendly practices,
                recycling and donating as much as possible to reduce landfill
                waste.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                <strong>Trust Green Mountain Movers</strong> for efficient junk
                removal services in Lakewood and Denver. We offer transparent
                pricing and flexible scheduling to accommodate your needs. Let
                us take the hassle out of your junk removal project.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Junk Hauling Services
                </h4>
                <p className="mt-4 leading-6 text-gray-600">
                  We offer a wide range of junk hauling services to meet your
                  needs. Whether you're clearing out an entire home, getting rid
                  of old office furniture, or cleaning up a construction site,
                  we have you covered. Explore our services below to learn more.
                </p>

                <JunkHaulingCards />
                <JunkHaulingFAQ />
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
              Get a Quote for Junk Hauling Services
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to clear out your unwanted items? Contact us today to
              receive a free quote for our junk hauling services. We provide
              detailed estimates that are tailored to your specific needs, with
              no hidden fees or surprises.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Our team is ready to help you with fast, efficient, and
              environmentally responsible junk removal. Get in touch today to
              start your junk hauling project with Green Mountain Movers!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="service-areas-clippath-bg flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center gap-3 py-20 px-5 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Junk Hauling Service Areas
          </h2>
          <p className="mx-auto mt-6 leading-8 text-gray-200">
            We provide junk hauling services throughout the greater Denver area,
            including Lakewood, Aurora, and surrounding communities. Whether you
            need help with a large property cleanout or a small junk removal
            project, our team is here to help.
          </p>
          <p className="mx-auto mt-6 leading-8 text-gray-200">
            For reliable junk hauling in Colorado, look no further than Green
            Mountain Movers. Get in touch today for a free quote and start your
            project with confidence!
          </p>
        </div>
      </div>
    </>
  );
}
