import Image from "next/image";
import Link from "next/link";
import westminsterImage from "../../../public/media/movers.jpg";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import MovingTips from "../../../components/MovingTips";
import ServiceAreasCards from "../../../components/ServiceAreasCards";
import Navbar from "../../../components/Navbar";

export default function Westminster() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-4 sm:px-6 lg:px-8 z-1 relative">
        <div className="mx-auto max-w-7xl">
          <section id="westminster" className="my-10">
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
                        href="/areas-served"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Areas Served
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
                        href="/areas-served/westminster"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Westminster
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Expert Moving Services in Westminster, Colorado
              </h2>
            </div>
            <div className="flex max-md:flex-col-reverse items-stretch justify-between gap-5 md:gap-10 mb-5 mt-10 sm:mt-20">
              <div className="flex flex-col justify-start gap-3 w-full md:w-2/4 lg:w-3/5">
                <h2 className="text-2xl font-semibold max-md:hidden">
                  Trusted Westminster Moving Company - Local & Long-Distance
                  Moves
                </h2>
                <p className="text-gray-700">
                  Welcome to Green Mountain Movers, your trusted Westminster, CO
                  moving company. We are dedicated to providing top-notch moving
                  services to the beautiful city of Westminster and its
                  surrounding areas. Whether you're planning a local or
                  long-distance move, our team of licensed and insured
                  professionals is here to ensure a smooth and hassle-free
                  transition for you and your belongings.
                </p>
                <p className="text-gray-700">
                  Westminster is a vibrant city located in the Denver
                  metropolitan area. Our Westminster moving services are
                  designed to cater to the specific needs of this diverse
                  community.
                </p>
                <p className="text-gray-700">
                  At Green Mountain Movers, we understand that every move is
                  unique. Whether you're moving to or from Westminster, our team
                  is committed to providing a seamless and stress-free
                  experience. We have extensive knowledge of the local
                  neighborhoods and can navigate the city's streets with ease.
                </p>
              </div>
              <div className="flex items-start w-full md:w-2/4 lg:w-2/5">
                <Image
                  src={westminsterImage}
                  alt="Westminster"
                  placeholder="blur"
                  className="object-cover h-full rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h3 className="text-2xl font-semibold mt-8">
                Comprehensive Moving Services in Westminster, CO
              </h3>
              <ServiceAreasCards />
            </div>

            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pr-5">
                <h3 className="text-xl font-semibold mt-8">
                  Westminster, Colorado Zip Codes We Serve
                </h3>
                <p className="text-gray-700">
                  Our service area covers a wide range of Westminster zip codes,
                  including 80003, 80020, 80021, 80030, and more. If you're in
                  the Westminster area, Green Mountain Movers has you covered.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pl-5">
                <h3 className="text-lg font-semibold mt-8">
                  Residential and Commercial Moving Solutions in Westminster
                </h3>
                <p className="text-gray-700">
                  Welcome to Green Mountain Movers, your trusted partner for
                  seamless residential and commercial moves in Westminster,
                  Colorado. Whether you're relocating your home or office, we
                  take pride in offering tailored moving solutions that cater to
                  your unique needs.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pr-5">
                <h3 className="text-lg font-semibold mt-8">
                  Westminster Residential Moving Services
                </h3>
                <p className="text-gray-700">
                  Our Westminster residential moving services are designed to
                  make your transition to a new home a stress-free experience.
                  Our dedicated team understands the sentimental value of your
                  belongings, and we handle them with utmost care. From packing
                  and loading to transportation and unpacking, we ensure every
                  step of your residential move is executed flawlessly. Our
                  services are backed by years of experience and a commitment to
                  customer satisfaction.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pl-5">
                <h3 className="text-lg font-semibold mt-8">
                  Commercial Moving Expertise in Westminster
                </h3>
                <p className="text-gray-700">
                  At Green Mountain Movers, we recognize the importance of
                  minimizing downtime during office relocations. Our commercial
                  moving expertise is geared towards ensuring your business can
                  resume operations as quickly as possible. We specialize in
                  handling valuable equipment and sensitive documents, making
                  your office relocation in Westminster secure and efficient.
                  Trust us to handle your commercial move with precision,
                  allowing you to focus on what matters most - your business.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pr-5">
                <h3 className="text-xl font-semibold mt-8">
                  Furniture Assembly Services in Westminster
                </h3>
                <p className="text-gray-700">
                  In addition to our top-notch moving services, we proudly offer
                  professional furniture assembly services in Westminster. Our
                  skilled team is adept at quickly and efficiently assembling
                  your furniture, whether it's for your new home or office. We
                  understand that assembling furniture can be a time-consuming
                  and frustrating task, and our goal is to save you time and
                  hassle. With our expertise, your furniture will be ready for
                  use in no time, ensuring a comfortable and functional living
                  or working space.
                </p>
              </div>
              <div className="flex flex-col justify-start gap-3 md:w-2/4 md:pl-5">
                <h3 className="text-xl font-semibold mt-8">
                  Junk Hauling Services in Westminster
                </h3>
                <p className="text-gray-700">
                  Green Mountain Movers goes beyond just moving. We also provide
                  reliable junk hauling services in Westminster to help you
                  declutter your space and dispose of unwanted items
                  responsibly. Whether it's old furniture, appliances,
                  electronics, or general household clutter, our team is here to
                  assist. We take pride in eco-friendly disposal methods,
                  ensuring that items are recycled or donated whenever possible.
                  Let us help you regain valuable space in your home or office
                  while contributing to a greener environment.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch">
              <div className="flex flex-col justify-start gap-3 w-full md:pr-5">
                <h3 className="text-xl font-semibold mt-8">
                  More About Westminster
                </h3>
                <p className="text-gray-700">
                  Westminster, Colorado, is more than just a city; it's a
                  dynamic and diverse community that holds a special place in
                  the heart of the state. Known for its cultural diversity and
                  rich history, Westminster is a city that truly embraces the
                  spirit of Colorado living. One of Westminster's standout
                  features is its vibrant cultural tapestry. It's a melting pot
                  of cultures, home to people from various backgrounds, and it
                  celebrates this diversity. As you settle into your new life in
                  Westminster, you'll have the opportunity to explore a
                  kaleidoscope of traditions, cuisines, and festivals from
                  around the world. It's a place where different cultures
                  converge, creating a unique and inclusive atmosphere. If you
                  love the outdoors, Westminster won't disappoint. The city
                  offers an abundance of recreational activities, ensuring that
                  there's something for everyone. From hiking in the nearby
                  natural parks to enjoying a day at one of the city's many golf
                  courses or taking in the arts at local galleries, Westminster
                  has it all. Whether you're moving to or from Westminster, our
                  experienced team is here to ensure a smooth transition for you
                  and your family or business, so you can fully immerse yourself
                  in the vibrant life that this city has to offer.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <BookingProcess />
      <MovingTips />
      <div className="flex justify-center items-center pt-10 pb-20 px-5 md:px-10 z-1 relative">
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <div className="flex flex-col justify-center gap-3">
            <h3 className="text-2xl font-semibold mt-8">
              Request a Free Moving Quote in Westminster, Colorado
            </h3>
            <p className="text-gray-700">
              Obtaining a free moving quote from Green Mountain Movers is a
              straightforward process. Our dedicated business representatives
              are ready to work with you to determine the services you need,
              providing an accurate moving estimate based on your specific
              requirements. Whether you're moving within Westminster or across
              the country, our experienced team is here to assist you. Contact
              us today via phone, email, or the convenient contact form on this
              page to request your free moving quote. We look forward to
              ensuring a successful move for you!
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-base leading-7 text-gray-700">
              <div className="flex gap-x-4">
                <PhoneIcon
                  className="h-7 w-6 text-gray-700"
                  aria-hidden="true"
                />
                <a className="hover:text-gray-900" href="tel:7196801538">
                  (719) 680-1538
                </a>
              </div>
              <div className="flex gap-x-4">
                <EnvelopeIcon
                  className="h-7 w-6 text-gray-700"
                  aria-hidden="true"
                />
                <a
                  className="hover:text-gray-900"
                  href="mailto:greenmtnmovers@gmail.com"
                >
                  greenmtnmovers@gmail.com
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          width="100%"
          height="400"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Westminster,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}