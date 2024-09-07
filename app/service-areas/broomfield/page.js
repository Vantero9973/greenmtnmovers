import Image from "next/image";
import Link from "next/link";
import moving from "../../../public/media/moving-6.jpg";
import moving3 from "../../../public/media/moving-8.jpg";
import {
  BriefcaseIcon,
  ChevronRightIcon,
  ClockIcon,
  HomeIcon,
  HandThumbUpIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import Cards from "./Cards";
import FAQ from "./FAQ";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title: "Movers in Broomfield CO - Your Reliable Moving Company in Colorado",
  description:
    "Looking for reliable movers in Broomfield, CO? Our top-rated moving services ensure a stress-free experience. Get a free quote today and move with confidence!",
};

const features = [
  {
    name: "Professionalism",
    description:
      "Our team is highly trained, experienced, and dedicated to making your move as smooth as possible. We arrive on time, in uniform, and ready to work. You can trust us to handle your belongings with care and efficiency.",
    icon: BriefcaseIcon,
  },
  {
    name: "Efficiency",
    description:
      "We understand that time is money, which is why we work quickly and efficiently without sacrificing quality. Our streamlined process ensures that your move is completed on time and within budget.",
    icon: ClockIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "Don’t just take our word for it—our satisfied customers speak for us. With countless positive reviews and testimonials, we’ve built a reputation for being the go-to movers in Broomfield, CO. We take pride in our work, and it shows in everything we do.",
    icon: HandThumbUpIcon,
  },
];

export default function Broomfield() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative max-lg:overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <section id="broomfield" className="mt-5 sm:mt-10 mb-10">
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
                        href="/service-areas"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Service Areas
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
                        href="/service-areas/broomfield"
                        className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        Broomfield
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Movers in Broomfield CO - Your Reliable Moving Company in
                Colorado
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
                      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Introduction to Broomfield Movers
                      </h2>
                    </div>
                  </div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
                    <p>
                      Moving can be one of the most stressful experiences in
                      life. We’ve all heard the stories or perhaps even lived
                      through them—the endless packing, the heavy lifting, and
                      the worry that something might get lost or damaged along
                      the way. At Green Mountain Movers, we understand these
                      concerns because we've been there ourselves. Whether it
                      was helping a close friend move into their first home or
                      relocating our own families, we've seen firsthand the
                      challenges and emotions that come with moving.
                    </p>
                    <p className="mt-6">
                      That’s why we’ve made it{" "}
                      <i>
                        our mission to turn what could be a stressful day into a
                        smooth, hassle-free experience
                      </i>
                      . Picture this: it's moving day, and instead of feeling
                      overwhelmed, you're sipping your coffee, and watching the
                      sunrise over the Rockies while our professional team takes
                      care of everything. From carefully packing your most
                      treasured belongings to ensuring that everything arrives
                      at your new home safe and sound, we handle it all with the
                      care and attention you'd expect from a company that treats
                      every move as if it were their own.
                    </p>
                    <p className="mt-6">
                      Our Broomfield mover's commitment to top-notch service is
                      more than just a promise—it's the reason we've become the
                      go-to movers in{" "}
                      <Link
                        href="https://maps.app.goo.gl/wQyU6LEaWms3mepo8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-link"
                      >
                        Broomfield, CO
                      </Link>
                      . We know how much is riding on getting this move right,
                      and we’re here to make sure that’s exactly what happens.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Professional Movers in Broomfield CO
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                At Green Mountain Movers, we don’t just move boxes; we move
                lives. We understand that every item we touch has a story, a
                memory attached to it. Whether it’s your grandmother’s antique
                dresser or your child’s first bike, we treat each piece with the
                care and respect it deserves. Our team is trained to handle
                every aspect of your relocation with professionalism and
                dedication, making your transition as seamless as possible.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We’ve made it our number one priority to provide a moving
                service that you can rely on. From the first phone call to the
                final delivery, we work tirelessly to ensure that every detail
                is perfect. Our clients in Broomfield, CO, have come to trust us
                not just because of our expertise but because of our commitment
                to putting their needs first.{" "}
                <i>
                  When you choose our mover team, you’re choosing peace of mind.
                </i>
              </p>
            </div>

            <div className="overflow-hidden bg-white mt-10 sm:mt-20">
              <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
                <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                  <div>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Why Choose Us for Your Relocation in Broomfield, CO?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Choosing a moving company when moving in Broomfield is
                      about more than just finding someone with a truck. It’s
                      about finding a partner who will take the stress out of
                      moving, someone who will treat your belongings with the
                      same care and respect that you do. Here’s why our{" "}
                      <Link
                        href="https://greenmtnmovers.com/service-areas/broomfield"
                        className="custom-link"
                      >
                        Broomfield Movers
                      </Link>{" "}
                      is the top choice for your move in Broomfield, CO:
                    </p>
                    <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                              aria-hidden="true"
                              className="absolute left-1 top-1 h-5 w-5 text-[#0e5933]/80"
                            />
                            {feature.name}
                          </dt>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="flex items-start justify-end lg:order-first">
                  <Image
                    alt="movers moving things"
                    src={moving3}
                    placeholder="blur"
                    width={2432}
                    height={1442}
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Green Mountain Movers - Your Trusted Moving Company in
                Broomfield Colorado
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Broomfield Colorado is more than just a location on a map—it’s a
                community, and we’re proud to be a part of it. As local experts,
                we know the area like the back of our hand, which means we can
                navigate the streets, understand the neighborhoods and provide a
                personalized moving experience that national chains simply can’t
                match.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We’ve built our reputation on being the moving company in
                Broomfield that residents can trust. Our clients often tell us
                how relieved they are after working with us, especially after
                past experiences with other movers. We’ve handled everything
                from small apartment moves to large family home relocations,
                always with the same level of care and attention to detail. With
                Green Mountain Movers, you’re not just hiring a moving company—
                <i>
                  you’re partnering with neighbors who care about your move as
                  much as you do.
                </i>
              </p>
            </div>

            <div className="mt-10 sm:mt-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Comprehensive Moving Services
                </h2>
                <p className="mt-4 leading-6 text-gray-600">
                  At Green Mountain Movers, we offer a full range of moving
                  services tailored to meet your unique needs. No matter the
                  size or complexity of your move, we’ve got you covered.
                </p>
                <Cards />
              </div>
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
                Discover Broomfield, CO
              </h2>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Broomfield, CO, is a vibrant city nestled between Denver and
                Boulder, known for its scenic beauty and welcoming community.
                With a population that enjoys both the perks of urban life and
                the tranquility of nature, Broomfield offers a little something
                for everyone. The city spans several zip codes, including 80020,
                80021, 80023, and 80038, each representing different
                neighborhoods with their own unique charm.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                <i>Broomfield is rich in history</i>, boasting a blend of modern
                amenities and historic sites, making it an ideal place to call
                home. As a hub of good growth and development, the area
                continues to attract new residents, many of whom benefit greatly
                from our professional moving services.
              </p>
            </div>
            <h3 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Attractions in Broomfield, CO
            </h3>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Broomfield County Commons Park
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Spanning over 300 acres,{" "}
                    <Link
                      href="https://maps.app.goo.gl/M77STkNyozPSdLcA8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Broomfield County Commons Park
                    </Link>{" "}
                    is a favorite destination for locals seeking outdoor
                    activities. The park features sports fields, walking trails,
                    and picnic areas, making it a perfect spot for a family
                    outing or a peaceful walk.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    1stBank Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    The{" "}
                    <Link
                      href="https://www.efirstbank.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      1stBank Center
                    </Link>{" "}
                    is Broomfield's premier event venue, hosting a wide array of
                    concerts, sporting events, and family shows. Known for its
                    excellent acoustics and diverse entertainment lineup, it’s a
                    cultural hotspot in the area.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Broomfield Depot Museum
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Immerse yourself in the city’s rich history at the{" "}
                    <Link
                      href="https://broomfield.org/3515/Broomfield-Depot-Museum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Broomfield Depot Museum
                    </Link>
                    , which showcases the area's railroad history and early
                    20th-century life. Housed in a historic train depot, the
                    museum offers an authentic and educational experience.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    FlatIron Crossing Mall
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Shoppers will love exploring{" "}
                    <Link
                      href="https://www.flatironcrossing.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      FlatIron Crossing Mall
                    </Link>
                    , a large shopping center with a mix of high-end retailers,
                    popular chains, and a variety of dining options. It’s a
                    go-to destination for a full day of shopping and
                    entertainment.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Omni Interlocken Resort Golf Club
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Golf enthusiasts can enjoy a round at the{" "}
                    <Link
                      href="https://maps.app.goo.gl/tA8R9CfFYMFWcafd6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Omni Interlocken Resort Golf Club
                    </Link>
                    , a 27-hole championship course that offers breathtaking
                    views of the Rocky Mountains. It’s an ideal spot for both
                    relaxation and recreation.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Paul Derda Recreation Center
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Stay active at the{" "}
                    <Link
                      href="https://maps.app.goo.gl/Yj7XkAtps1rVY85P7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Paul Derda Recreation Center
                    </Link>
                    , a state-of-the-art facility featuring an indoor pool,
                    climbing wall, and various fitness classes. It’s a community
                    hub for residents of all ages.
                  </dd>
                </div>
                <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Broomfield Auditorium
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Experience the arts at the{" "}
                    <Link
                      href="https://www.broomfield.org/243/Rent-the-Auditorium"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      Broomfield Auditorium
                    </Link>
                    , which hosts a variety of performances, including concerts,
                    plays, and lectures. This venue brings culture and
                    entertainment to the heart of Broomfield.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 sm:mt-20">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How Denver Locals Benefit from Our Broomfield Movers
              </h3>
              <p className="text-base leading-7 text-gray-700 mt-6">
                Living in Broomfield means enjoying a high quality of life with
                easy access to both Denver and Boulder, but it also means
                navigating the challenges of moving within or to this bustling
                area. Whether you're relocating to one of Broomfield’s
                family-friendly neighborhoods or downsizing as you move closer
                to the city’s center, our moving services are designed to meet
                the specific needs of local residents.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We understand the local landscape, from the suburban streets
                lined with beautiful homes to the bustling commercial districts,
                and we tailor our services to ensure a smooth and stress-free
                move. With our expert knowledge of the area, we can efficiently
                plan your move, avoiding common pitfalls and ensuring your
                belongings arrive safely at your new home.
              </p>
              <p className="text-base leading-7 text-gray-700 mt-6">
                We also work with families in the{" "}
                <Link
                  href="https://www.greenmtnmovers.com/service-areas/castle-pines"
                  className="custom-link"
                >
                  Castle Pines
                </Link>{" "}
                area.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Move? Contact the Top Broomfield Moving Company Today!
            </h3>
            <p className="text-base leading-7 text-gray-700 mt-4">
              We’re here to make your move stress-free. At Green Mountain
              Movers, we’re committed to providing top-notch service that
              exceeds your expectations. Contact us today for a free,
              no-obligation quote and experience the difference with the best
              movers in Broomfield, CO.{" "}
              <i>
                Let us handle the heavy lifting so you can focus on settling
                into your new home.
              </i>
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Broomfield,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
