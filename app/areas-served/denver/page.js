import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/moving-6.jpg";
import {
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CubeIcon,
  CurrencyDollarIcon,
  FaceSmileIcon,
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title: "Movers in Denver CO - Trusted Moving Company in Denver, Colorado",
  description:
    "Looking for reliable movers in Denver CO? Our expert moving services include local and long-distance moves, furniture assembly, and more. Get a free moving quote today!",
};

const features = [
  {
    name: "Professional and Experienced Team",
    description:
      "Our movers are trained professionals with years of experience in handling all types of moves, from residential moving to commercial moving.",
    icon: UserGroupIcon,
  },
  {
    name: "Reliable and On-Time",
    description:
      "We understand the importance of punctuality. Our team arrives on time and works efficiently to ensure your move stays on schedule.",
    icon: ClockIcon,
  },
  {
    name: "Personalized Moving Plans",
    description:
      "Every move is different, and we tailor our services to meet your unique needs, from local moves to long-distance relocations.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Careful Handling of Belongings",
    description:
      "We treat every item, from fragile antiques to bulky furniture, as if it were our own, ensuring safe transportation. Our amazing mover team also offers packing services and provides the necessary supplies to make the process easier.",
    icon: CubeIcon,
  },
  {
    name: "Affordable Moving",
    description:
      "We provide top-quality service without the hefty price tag. Our affordable moving rates ensure that you receive the best value for your money, with no hidden fees.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Clear Communication",
    description:
      "We keep you informed at every step of the process, so you always know what to expect.",
    icon: ChatBubbleLeftRightIcon,
  },
];

const featuresTwo = [
  {
    name: "Safety and Care",
    description:
      "Moving can be risky, especially when it comes to heavy or fragile items. Our team is trained to handle your belongings with care, reducing the risk of damage during the move.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Efficiency and Time-Saving",
    description:
      "With professional movers, your move is completed faster and more efficiently than if you were to do it on your own. We handle everything from start to finish, allowing you to focus on settling into your new space.",
    icon: ClockIcon,
  },
  {
    name: "Stress-Free Experience",
    description:
      "Moving can be stressful, but it doesn’t have to be. With Green Mountain Movers, you can relax knowing that every detail is being taken care of by experienced professionals.",
    icon: FaceSmileIcon,
  },
  {
    name: "Professional Equipment and Expertise",
    description:
      "We have all the right tools and equipment to ensure a smooth move, from dollies to moving blankets. Plus, our team is trained in the best practices for safe and efficient moving.",
    icon: WrenchScrewdriverIcon,
  },
];

const featuresThree = [
  {
    name: "Experienced Team",
    description:
      "Our movers have years of experience and are trained to handle any type of move with care and professionalism.",
    icon: UserGroupIcon,
  },
  {
    name: "Personalized Approach",
    description:
      "We take the time to understand your unique needs and customize our services to meet them.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Commitment to Customer Satisfaction",
    description:
      "We’re not happy until you’re happy. From start to finish, we make sure every aspect of your move goes smoothly.",
    icon: HeartIcon,
  },
];

export default function Columbine() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="denver" className="mt-5 sm:mt-10 mb-10">
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
                        href="/areas-served/denver"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Denver
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Denver CO - Trusted Moving Company in Denver, Colorado
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
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Introduction to Denver Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      When it comes to moving, we've all heard horror
                      stories—damaged furniture, late arrivals, or even worse,
                      no-shows on moving day. At Green Mountain Movers, we’ve
                      seen it all, and we understand the stress that comes with
                      relocating. That's why our mission as a moving company is
                      to make your experience as smooth and stress-free as
                      possible. Whether you’re moving across{" "}
                      <Link
                        href="https://maps.app.goo.gl/CkfoMKaobecU1Ln77"
                        className="custom-link"
                      >
                        Denver
                      </Link>{" "}
                      or across the state, our team is here to take the weight
                      off your shoulders, literally and figuratively.
                    </p>
                    <p className="mt-6">
                      Think of your move as an adventure, and just like any
                      great adventure, you want a reliable guide. That’s where
                      we come in. With our years of experience in the Denver
                      area, we've helped countless families and businesses
                      navigate the ups and downs of moving with ease. From
                      packing up cherished family heirlooms to transporting
                      bulky furniture, we handle each item with care. We know
                      every move is unique, just like every home or office, and
                      we tailor our moving services to fit your specific needs.
                    </p>
                    <p className="mt-6">
                      At Green Mountain Movers, we pride ourselves on being more
                      than just{" "}
                      <Link
                        href="https://greenmtnmovers.com/areas-served"
                        className="custom-link"
                      >
                        Denver movers
                      </Link>
                      —<i>we’re your partners in this journey</i>. Whether it’s
                      a local move across town or a distance moving trek, you
                      can count on us to provide top-notch service, clear
                      communication, and peace of mind every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Choose Our Movers in Denver CO?
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  Moving is more than just packing boxes and loading trucks.
                  It’s about making sure that every part of your life
                  transitions smoothly from one place to another. At Green
                  Mountain Movers, we understand that a successful move requires
                  attention to detail, clear communication, and, most
                  importantly, care for your belongings.
                </p>
                <p className="mt-4 leading-6 text-gray-600">
                  <i>
                    We don’t just move items—we move lives. Here's why you
                    should trust us with your next move:
                  </i>
                </p>
              </div>
              <div className="mt-6">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none text-[#0e5933]/90"
                        />
                        {feature.name}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Comprehensive Services as a Denver Moving Company
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we understand that no two moves are
                  alike. Whether you're relocating your home or business, we
                  offer a range of services designed to fit your unique needs.
                </p>
                <Cards />
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Hiring a Moving Company in Denver is the Best Choice
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We’ve all considered doing it ourselves—renting a truck,
                recruiting a few friends, and hoping for the best. But when it
                comes to moving, the DIY route often leads to more stress, more
                work, and sometimes more damage than it’s worth. Hiring
                professional moving companies means less risk and more peace of
                mind.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-4">
                At Green Mountain Movers, we’re not just movers Denver residents
                rely on—we’re specialists in handling your belongings with the
                care they deserve. By choosing a professional moving company in
                Denver, you avoid the physical strain, the time crunch, and the
                possibility of things going wrong. With us, your belongings are
                in experienced hands, and you can focus on what matters—settling
                into your new home or office.
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover Denver, CO
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Denver, Colorado, known as the "Mile-High City," is a bustling
                urban hub nestled against the backdrop of the majestic Rocky
                Mountains. With an elevation of exactly one mile above sea
                level, Denver boasts a unique blend of urban excitement and
                natural beauty. The city is home to diverse neighborhoods,
                cultural landmarks, and a thriving economy. Zip codes that
                encompass Denver include 80202, 80203, 80204, and 80218, among
                others.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Denver's rich history, paired with its growing status as a
                modern city, makes it a prime location for both residents and
                businesses. Whether you’re relocating to take advantage of
                Denver’s job market or moving across town to explore a new
                neighborhood, our movers in Denver CO can make the transition
                seamless and stress-free.
              </p>
            </div>

            <FAQ />
          </section>
        </div>
      </div>
      <BookingProcess />

      <div className="flex justify-center items-center pb-5 px-5 md:px-10 z-1 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 sm:mt-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Locals Can Benefit from Our Moving Services
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                For Denver residents, moving can be a challenge, especially with
                the city’s diverse range of home types—from modern downtown
                apartments to classic Victorian homes in the suburbs. Whether
                you’re upgrading to a larger home, downsizing, or relocating for
                work, our movers in Denver CO are equipped to handle every type
                of move. The growing job market, vibrant cultural scene, and
                proximity to nature make Denver an attractive place to live, and
                we’re here to help locals navigate their transitions with ease.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Our deep knowledge of the area means we understand the unique
                needs of Denver residents, from navigating narrow city streets
                to managing moves in the surrounding mountainous areas.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://www.greenmtnmovers.com/areas-served/eagle/vail"
                  className="custom-link"
                >
                  Eagle Vail
                </Link>{" "}
                area.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Denver, CO
            </h3>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Denver Art Museum
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://www.denverartmuseum.org/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Denver Art Museum
                    </Link>{" "}
                    is a renowned cultural institution known for its impressive
                    collection of Native American art and rotating exhibitions.
                    With a wide array of galleries and programs, it’s a
                    must-visit for art lovers in the area.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Red Rocks Amphitheatre
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Located just outside the city,{" "}
                    <Link
                      href="https://www.redrocksonline.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Red Rocks Amphitheatre
                    </Link>{" "}
                    is a world-famous outdoor concert venue set within stunning
                    natural rock formations. It’s the perfect spot to catch a
                    live show or simply take in the breathtaking views.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Denver Botanic Gardens
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A lush escape within the city, the{" "}
                    <Link
                      href="https://www.botanicgardens.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Denver Botanic Gardens
                    </Link>{" "}
                    offers beautifully curated gardens, seasonal exhibits, and
                    special events. It’s a peaceful retreat for nature
                    enthusiasts.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Union Station
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link
                      href="https://maps.app.goo.gl/eNn5cfpJAWY9AF5AA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Union Station
                    </Link>{" "}
                    is more than just a transportation hub—it’s a vibrant
                    downtown destination. Home to restaurants, shops, and
                    historic architecture, Union Station is a cultural and
                    social hotspot.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Coors Field
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Home to the Colorado Rockies,{" "}
                    <Link
                      href="https://maps.app.goo.gl/bwyQSvtW382UL2hv6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Coors Field
                    </Link>{" "}
                    is the perfect place to enjoy America’s favorite pastime.
                    Located in the heart of downtown, this stadium offers
                    stunning views of the city skyline and the Rocky Mountains.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    16th Street Mall
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://maps.app.goo.gl/yG62VneeXEbEYhTK6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      16th Street Mall
                    </Link>{" "}
                    is a mile-long pedestrian promenade packed with shops,
                    restaurants, and entertainment venues. It’s the ultimate
                    spot for a day of shopping or a casual night out.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Denver Zoo
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    A favorite family destination, the{" "}
                    <Link
                      href="https://denverzoo.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Denver Zoo
                    </Link>{" "}
                    is home to over 3,000 animals and features a variety of
                    exhibits and interactive experiences. It’s a great place to
                    spend a day with the kids.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Colorado State Capitol
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://capitol.colorado.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Colorado State Capitol
                    </Link>
                    , with its gleaming gold dome, is a historic landmark
                    offering tours and an inside look at Colorado’s rich
                    political history. The views from the top steps are
                    unmatched.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Denver Museum of Nature & Science
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://www.dmns.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Denver Museum of Nature & Science
                    </Link>{" "}
                    provides interactive exhibits on everything from dinosaurs
                    to space exploration. It’s a great place for kids and adults
                    alike to learn about the wonders of the natural world.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Cherry Creek Shopping Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link
                      href="https://shopcherrycreek.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Cherry Creek Shopping Center
                    </Link>{" "}
                    features luxury brands, local boutiques, and top-notch
                    dining. It’s a great place to shop, dine, and unwind.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get a Free Moving Quote Today!
            </h2>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Ready to make your move? Contact Green Mountain Movers for a free,
              no-obligation quote. Our team is standing by to help make your
              next move your best move. Call us today and let us handle the
              heavy lifting!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          width="100%"
          height="400"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Denver,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
