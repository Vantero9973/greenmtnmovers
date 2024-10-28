import Image from "next/image";
import Link from "next/link";
import moving from "../../public/media/furniture-assembly.jpg";
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
  title: "Top-Rated Furniture Assembly in Lakewood, CO | Green Mountain Movers",
  description:
    "Looking for reliable furniture assembly services in Lakewood, CO? Green Mountain Movers offers top-rated, affordable furniture assembly solutions. Serving Lakewood and the greater Denver area, our experienced team ensures fast, efficient assembly. Contact us today for a free quote!",
};

const features = [
  {
    description:
      "Flat rate pricing available for transparent and predictable costs.",
    icon: CurrencyDollarIcon,
  },
  {
    description:
      "Detailed estimate with a breakdown of your assembly project, so you know exactly what to expect.",
    icon: ClipboardDocumentIcon,
  },
  {
    description:
      "Expert assembly and disassembly of all furniture types, saving you time and effort.",
    icon: WrenchIcon,
  },
  {
    description:
      "Free use of protective covers to prevent damage to your floors or furniture during assembly.",
    icon: ShieldCheckIcon,
  },
  {
    description:
      "No hidden fees, so you don’t have to worry about surprise costs.",
    icon: NoSymbolIcon,
  },
  {
    description:
      "Flexible assembly services, from entire rooms to specific furniture pieces.",
    icon: CubeIcon,
  },
  {
    description:
      "Our team consists of skilled, reliable, and experienced professionals.",
    icon: UsersIcon,
  },
  {
    description:
      "We come equipped with all the necessary tools and expertise to complete your assembly job efficiently.",
    icon: TruckIcon,
  },
  {
    description:
      "We take pride in our commitment to punctuality, professionalism, and customer satisfaction.",
    icon: CheckCircleIcon,
  },
];

export default function FurnitureAssembly() {
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
                        href="/furniture-assembly"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Furniture Assembly
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Top-Rated Furniture Assembly
              </h1>
            </div>

            <div className="mx-auto grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-2 lg:items-start mt-10 sm:mt-20">
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image
                  alt="furniture assembly"
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
                      Green Mountain Movers is proud to offer top-quality
                      furniture assembly services across Colorado. From
                      assembling intricate furniture pieces to setting up entire
                      rooms, our team is equipped with the tools and knowledge
                      to get the job done right. Let’s work together to bring
                      your new home or office to life without the stress.
                    </p>
                    <div className="lg:max-w-lg mt-6">
                      <h4 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Reliable Furniture Assembly Experts in Denver
                      </h4>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Whether you're furnishing a new apartment or need help
                      setting up your office,{" "}
                      <strong>we're your go-to assembly professionals.</strong>
                      We specialize in the assembly of all types of furniture,
                      including complex flat-pack items. Green Mountain Movers
                      takes care of every detail so you can relax while we
                      transform your space.
                    </p>
                    <p className="mt-6">
                      We believe that no job is too big or small when it comes
                      to furniture assembly. From single-room setups to entire
                      homes or offices, our experienced team delivers efficient
                      and careful service every step of the way.
                    </p>
                    <p className="mt-6">
                      Let Green Mountain Movers handle the hard work for you.
                      With years of experience, we provide trusted assembly
                      services designed to meet your unique needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Hire a Professional Furniture Assembly Service
              </h4>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Hiring a professional furniture assembly service like Green
                Mountain Movers saves you time, frustration, and potential
                damage to your new furniture. Our team handles all the heavy
                lifting, complex instructions, and assembly tools required to
                ensure a smooth process. From disassembly to reassembly, we make
                sure every piece fits perfectly.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Assembling furniture can be difficult and time-consuming.
                Incorrect assembly can lead to broken pieces or safety hazards.
                Our professionals are trained to handle all types of furniture,
                from home items to office sets, ensuring your belongings are
                treated with care and assembled securely.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                <strong>Trust Green Mountain Movers</strong> for efficient and
                professional furniture assembly services, allowing you to focus
                on enjoying your new space.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Discover Our Furniture Assembly Services
                </h4>
                <p className="mt-4 leading-6 text-gray-600">
                  We offer a wide range of furniture assembly services tailored
                  to meet the unique needs of our clients. Whether you're moving
                  into a new home or office, or simply need help with a complex
                  flat-pack item, we’ve got you covered.
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
              Get a Quote for Furniture Assembly Services
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Planning your furniture assembly project starts with gathering
              quotes from trusted professionals. Green Mountain Movers offers{" "}
              <i>free estimates</i> to help you understand the costs associated
              with your assembly project. Our detailed quotes ensure
              transparency and clear communication.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Whether you're moving into a new space or simply need assistance
              with a complicated assembly, our team is here to make the process
              stress-free. Contact Green Mountain Movers today to receive your
              free quote for furniture assembly services.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="service-areas-clippath-bg flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center gap-3 py-20 px-5 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Furniture Assembly Information
          </h2>
          <p className="mx-auto mt-6 leading-8 text-gray-200">
            Furniture assembly services help you get your home or office set up
            quickly and without stress. Whether you're looking to assemble
            bedroom furniture, office desks, or outdoor equipment, our team of
            skilled professionals ensures each piece is securely put together.
          </p>
          <p className="mx-auto mt-6 leading-8 text-gray-200">
            For reliable furniture assembly services in Colorado, look no
            further than Green Mountain Movers. We provide efficient, precise
            assembly that fits your needs. Still unsure{" "}
            <Link
              href="https://greenmtnmovers.com/how-do-you-plan-furniture-assembly"
              className="underline hover:text-[#0000ee]"
            >
              how do you plan a furniture assembly project
            </Link>
            ? or{" "}
            <Link
              href="https://greenmtnmovers.com/how-do-i-find-the-best-furniture-assembly-service"
              className="underline hover:text-[#0000ee]"
            >
              how do I find the best furniture assembly service
            </Link>
            ? Check out our blog posts for expert tips and advice.
          </p>
        </div>
      </div>
    </>
  );
}
