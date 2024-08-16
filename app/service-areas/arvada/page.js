import Image from "next/image";
import Link from "next/link";
import arvadaImage from "../../../public/media/movers.jpg";
import moving1 from "../../../public/media/moving-1.jpg";
import moving2 from "../../../public/media/moving-2.jpg";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import ContactForm from "../../../components/ContactForm";
import BookingProcess from "../../../components/BookingProcess";
import ServiceAreasCards from "../../../components/ServiceAreasCards";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title: "Movers in Arvada CO: Top Moving Company in Colorado",
  description:
    "Looking for reliable movers in Arvada, CO? Our full-service moving company offers local, long-distance, and specialty moving services. Get tips on reducing costs and learn how to choose the best movers. Contact us for a free quote today!",
};

export default function Arvada() {
  return (
    <>
      <Navbar />
      <div className="service-areas-clippath-bg flex justify-center items-center relative h-[200px] max-md:hidden">
        <div className="mtnBorder--bottom absolute bottom-0 shadow" />
        <header className="text-5xl font-semibold h-max w-full absolute p-10 text-center mb-10 drop-shadow-3xl opacity-90 text-white">
          Arvada Moving Services
        </header>
      </div>
      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative">
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <section id="arvada" className="my-10">
            <h1 className="text-3xl font-semibold">
              Movers in Arvada CO: Top Moving Company in Colorado
            </h1>
            <div className="flex max-md:flex-col-reverse items-stretch justify-between gap-5 md:gap-10 my-5 pt-8">
              <div className="flex flex-col justify-start gap-3 w-full md:w-2/4 lg:w-3/5">
                <h2 className="text-2xl font-semibold">
                  Professional Arvada Moving Services
                </h2>
                <p className="text-gray-700">
                  Moving can be one of the most stressful events in life. I
                  remember when I first moved to Arvada, CO; I was overwhelmed
                  by the sheer amount of planning and coordination it required.
                  Fortunately, with the help of fantastic moving services, the
                  process was smoother than I could have imagined. This
                  experience is why I always emphasize the importance of
                  choosing the right movers. A reliable moving company can make
                  all the difference, transforming a potentially chaotic
                  situation into a seamless and even enjoyable transition.
                </p>
                <p className="text-gray-700">
                  When I talk to people about moving, I often hear stories of
                  "mover nightmares"—broken belongings, hidden fees, and
                  unprofessional behavior. These horror stories make finding a
                  trustworthy mover even more critical. But don't worry, I've
                  got you covered! In this guide, I'll share everything you need
                  to know about finding the best movers in Arvada, CO, and
                  ensuring your move is as stress-free as possible.
                </p>
                <p className="text-gray-700">
                  Let's explore the qualities that make a moving company stand
                  out and how to prepare for a successful move. From
                  understanding the range of services offered to knowing the
                  right questions to ask, this guide will equip you with all the
                  information you need to make an informed decision when it is
                  time to hire. Whether you're moving across town or across the
                  state, you'll find valuable and friendly insights and tips to
                  help you every step of the way.
                </p>
              </div>
              <div className="flex items-start w-full md:w-2/4 lg:w-2/5">
                <Image
                  src={arvadaImage}
                  alt="Arvada"
                  className="object-cover h-full rounded-2xl"
                />
              </div>
            </div>

            <div className="flex flex-row-reverse max-md:flex-col-reverse items-stretch justify-between gap-5 md:gap-10 my-5 pt-8">
              <div className="flex flex-col justify-start gap-3 w-full md:w-2/4 lg:w-3/5">
                <h2 className="text-2xl font-semibold">
                  Why Choose Our Acclaimed Arvada Movers?
                </h2>
                <p className="text-gray-700">
                  When searching for movers in Arvada, CO, you’ll come across
                  many options. However, not all Arvada moving companies are
                  created equal. Our movers stand out for several reasons, and
                  I’d like to share a story that perfectly illustrates why.
                </p>
                <p className="text-gray-700">
                  A friend of mine recently moved into a new home in Arvada and
                  was understandably anxious about the process. They had several
                  delicate items, including a cherished family heirloom—a large,
                  antique mirror. The moving crew not only handled the mirror
                  with the utmost care, wrapping it securely, but they also went
                  above and beyond by carefully positioning it in the new home
                  to avoid any risk of damage. This attention to detail and
                  respect for personal belongings is a hallmark of our service
                  and why so many of our happy customers recommend our moving
                  services.
                </p>
                <p className="text-gray-700">
                  What makes our movers exceptional? It’s not just the ability
                  to transport items from point A to point B. It’s about
                  providing peace of mind. From the initial consultation to the
                  final delivery, our team is committed to making the moving
                  experience as smooth and stress-free as possible. We offer a
                  full range of services, including packing, unpacking, and even
                  furniture assembly, so you don’t have to worry about a thing.
                  Plus, we provide a free estimate for all our services,
                  ensuring transparency and no hidden costs.
                </p>
                <p className="text-gray-700">
                  But don’t just take my word for it. Many customers have shared
                  their experiences, highlighting the professionalism,
                  efficiency, and friendliness of our team. One customer
                  mentioned how relieved they felt after hiring our movers,
                  especially after a previous bad experience with another
                  company. This sense of relief and satisfaction is something we
                  aim to deliver with every move.
                </p>
              </div>
              <div className="flex items-start w-full md:w-2/4 lg:w-2/5">
                <Image
                  src={moving1}
                  alt="Arvada"
                  className="object-cover h-full rounded-2xl"
                />
              </div>
            </div>

            <div className="flex max-md:flex-col-reverse items-stretch justify-between gap-5 md:gap-10 my-5 pt-8">
              <div className="flex flex-col justify-start gap-3 w-full md:w-2/4 lg:w-3/5">
                <h2 className="text-2xl font-semibold">
                  Full-Service Moving in Arvada, CO: What to Expect
                </h2>
                <p className="text-gray-700">
                  One of the most significant advantages of hiring a
                  full-service moving company is the comprehensive care and
                  attention given to every aspect of your move. When you choose
                  full-service movers in Arvada, CO, you’re not just hiring
                  people to transport your belongings; you're gaining a team of
                  professionals dedicated to making your move as smooth as
                  possible.
                </p>
                <p className="text-gray-700">
                  Imagine this: It's moving day, and instead of the usual chaos,
                  you find a well-organized team already at work. They arrive on
                  time, equipped with all the necessary tools and packing
                  materials. From the smallest knick-knacks to large furniture
                  pieces, everything is handled with the utmost care. Our movers
                  meticulously pack each item, ensuring it's protected for the
                  journey. They use high-quality packing materials, including
                  padded blankets for furniture and special boxes for fragile
                  items, so nothing is left to chance.
                </p>
                <p className="text-gray-700">
                  One customer recently shared their experience of moving with a
                  full-service package. They were moving their elderly parents
                  into a smaller home and were concerned about the stress it
                  might cause. Our team took care of everything—from packing up
                  decades' worth of belongings to setting up the new home just
                  the way the parents wanted. The family was overjoyed with how
                  easy and stress-free the process was, thanks to the movers'
                  professionalism and attention to detail.
                </p>
                <p className="text-gray-700">
                  Full-service movers also offer additional services like
                  furniture assembly and disassembly, which can be a huge
                  relief. No more worrying about how to take apart that bulky
                  bed frame or reassemble it correctly in the new place. We
                  handle it all, so you can focus on settling into your new
                  home.
                </p>
                <p className="text-gray-700">
                  In summary, when you opt for full-service movers, you’re
                  investing in a hassle-free moving experience. From packing and
                  loading to transportation and unpacking, every step is handled
                  with care and expertise. It’s not just about moving your
                  stuff; it’s about moving your life with minimal disruption.
                </p>
              </div>
              <div className="flex items-start w-full md:w-2/4 lg:w-2/5">
                <Image
                  src={moving2}
                  alt="Arvada"
                  className="object-cover h-full rounded-2xl"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 mt-5">
              <h3 className="text-2xl font-semibold mt-8">
                Comprehensive Moving Services in Arvada, CO
              </h3>
              <ServiceAreasCards />
            </div>

            <div className="mt-5">
              <div>
                <h2 className="text-2xl font-semibold">
                  Moving Company in Arvada, Colorado: Services Offered
                </h2>
                <p className="text-gray-700 mt-2">
                  Our moving services in{" "}
                  <Link
                    href="https://www.arvadaco.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Arvada, Colorado
                  </Link>
                  , offers a wide range of services tailored to meet the unique
                  needs of each customer. Whether you're moving locally or
                  long-distance, we have the expertise and resources to handle
                  your move efficiently. Here’s a breakdown of the services we
                  offer:
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-bold mt-2">
                    Local Moves:{" "}
                    <span className="font-normal">
                      Expertise in navigating the streets of Arvada and
                      surrounding areas.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Long-Distance Moves:{" "}
                    <span className="font-normal">
                      Specialized handling for moves across state lines.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Residential Movers:{" "}
                    <span className="font-normal">
                      Careful packing and transport of household items.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Commercial Moves:{" "}
                    <span className="font-normal">
                      Efficient relocation of office equipment and furniture.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Packing and Unpacking Services:{" "}
                    <span className="font-normal">
                      Professional packing to ensure the safety of your
                      belongings.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Specialty Item Handling:{" "}
                    <span className="font-normal">
                      Expertise in moving pianos, artwork, and other delicate
                      items.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mt-8">
                  Quality Movers and Relocation Services Near You
                </h3>
                <p className="text-gray-700 mt-2">
                  Choosing quality movers is{" "}
                  <i>crucial for a successful move</i>. Our team is trained to
                  handle all types of moves with precision and care. Here are a
                  few reasons why our services stand out:
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-bold mt-2">
                    Professionalism:{" "}
                    <span className="font-normal">
                      Our movers are courteous, punctual, and dedicated to
                      providing excellent service.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Experience:{" "}
                    <span className="font-normal">
                      Years of experience in the industry ensure that we handle
                      all aspects of the move professionally.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Customer-Centric Approach:{" "}
                    <span className="font-normal">
                      We prioritize customer satisfaction, tailoring our
                      services to meet individual needs.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mt-8">
                  Finding The Best Mover In Arvada, Colorado: Tips and Tricks
                </h3>
                <p className="text-gray-700 mt-2">
                  Finding the right{" "}
                  <Link
                    href="https://greenmtnmovers.com/areas-served"
                    className="custom-link"
                  >
                    Arvada movers
                  </Link>{" "}
                  can be daunting, but these tips can help you make an informed
                  decision:
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-bold mt-2">
                    Check Reviews and References:{" "}
                    <span className="font-normal">
                      Look for consistent positive feedback and specific
                      praises.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Verify Licenses and Insurance:{" "}
                    <span className="font-normal">
                      Ensure the company is licensed and insured for peace of
                      mind.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Get Detailed Estimates:{" "}
                    <span className="font-normal">
                      Request a comprehensive quote to avoid hidden fees and
                      understand the scope of the{" "}
                      <strong>relocation services</strong> offered.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mt-8">
                  How Much Are Movers in Colorado?
                </h3>
                <p className="text-gray-700 mt-2">
                  The cost of hiring movers in Colorado can vary based on
                  several factors, including the size of the move and the
                  distance. Here's a rough estimate:
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-bold mt-2">
                    Local Moves:{" "}
                    <span className="font-normal">
                      Typically charge by the hour, with rates ranging from $100
                      to $200 per hour.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Long-Distance Moves:{" "}
                    <span className="font-normal">
                      Charged based on the weight of the items and the distance,
                      usually costing $2,000 to $5,000.
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-2">
                  When requesting <strong>moving quotes</strong>, it's essential
                  to provide accurate information about the volume of items and
                  any special requirements to receive the most precise estimate.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div>
                <h2 className="text-2xl font-semibold">
                  How to Reduce Your Moving Costs
                </h2>
                <p className="text-gray-700 mt-2">
                  Moving can be expensive, but there are ways to cut costs:
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-bold mt-2">
                    Declutter:{" "}
                    <span className="font-normal">
                      Reduce the number of items to move by donating or selling
                      what you no longer need.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Pack Yourself:{" "}
                    <span className="font-normal">
                      Save on packing services by doing it yourself.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Schedule Wisely:{" "}
                    <span className="font-normal">
                      Moving during the off-peak season can result in lower
                      rates.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mt-8">
                  Can You Negotiate with a Mover?
                </h3>
                <p className="text-gray-700 mt-2">
                  Yes, you can negotiate with moving companies. Here are some
                  tips:
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-bold mt-2">
                    Get Multiple Quotes:{" "}
                    <span className="font-normal">
                      Use competing offers as leverage.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Ask for Discounts:{" "}
                    <span className="font-normal">
                      Inquire about available discounts or promotions.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Negotiate Add-Ons:{" "}
                    <span className="font-normal">
                      See if you can get free packing materials or additional
                      services included.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mt-8">
                  What Should I Do Before the Movers Come?
                </h3>
                <p className="text-gray-700 mt-2">
                  Preparation is key to a smooth move. Here’s a checklist:
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-bold mt-2">
                    Label Boxes:{" "}
                    <span className="font-normal">
                      Clearly label each box with its contents and the room it
                      belongs in.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Pack Essentials Separately:{" "}
                    <span className="font-normal">
                      Keep important documents and essentials handy.
                    </span>
                  </li>
                  <li className="font-bold mt-2">
                    Clear the Pathways:{" "}
                    <span className="font-normal">
                      Ensure easy access for the movers by clearing hallways and
                      doorways.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mt-8">
                  Do Movers Expect You to Help?
                </h3>
                <p className="text-gray-700 mt-2">
                  Generally, movers do not expect help from the customer.
                  However, small gestures like offering water or guiding them to
                  the correct rooms can be appreciated.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold">
                Exploring Arvada, CO: A Community on the Move
              </h2>
              <p className="text-gray-700 mt-2">
                Arvada, Colorado, is a vibrant city located just northwest of
                Denver. Known for its rich history and picturesque landscapes,
                Arvada offers a unique blend of small-town charm and modern
                amenities. The city is home to the beautiful{" "}
                <Link
                  href="http://www.oldetownarvada.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  Olde Town Arvada
                </Link>
                , a historic district filled with quaint shops, restaurants, and
                cultural events. It's also known for its strong community spirit
                and active lifestyle, with numerous parks and trails perfect for
                outdoor enthusiasts. Whether you're a long-time resident or new
                to the area, there's always something to explore and enjoy in
                Arvada.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold">
                Why Local Residents Benefit from Professional Residential Movers
              </h2>
              <p className="text-gray-700 mt-2">
                For residents of Arvada, CO, moving services are a valuable
                resource. The city’s growth and the influx of new residents have
                made moving a common necessity. Local movers are well-acquainted
                with the area's layout, traffic patterns, and community
                regulations, making the moving process more efficient and less
                stressful. Whether you're relocating within the city or moving
                to a nearby area, having a professional moving team can save you
                time and effort, allowing you to focus on settling into your new
                home and enjoying all that Arvada has to offer.
              </p>
            </div>
          </section>
        </div>
      </div>
      <BookingProcess />

      <div className="flex justify-center items-center py-5 px-5 md:px-10 z-1 relative mt-5">
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <div>
            <h2 className="text-2xl font-semibold">
              Top Attractions in Arvada
            </h2>
            <ol className="list-decimal list-inside mt-5">
              <li className="font-bold mt-2">
                Olde Town Arvada
                <p className="font-normal">
                  A charming historic district featuring a variety of shops,
                  restaurants, and cultural events. It's the perfect place for a
                  leisurely stroll or a day of shopping.
                </p>
              </li>
              <li className="font-bold mt-2">
                Arvada Center for the Arts and Humanities{" "}
                <p className="font-normal">
                  A cultural hub offering theater performances, art exhibitions,
                  and educational programs. It's a great place to experience the
                  local arts scene. Visit the{" "}
                  <Link
                    href="http://www.arvadacenter.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Arvada Center
                  </Link>{" "}
                  today!
                </p>
              </li>
              <li className="font-bold mt-2">
                Apex Center{" "}
                <p className="font-normal">
                  The{" "}
                  <Link
                    href="https://maps.app.goo.gl/BUmrKDs1iz6VNjEf8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Apex Center
                  </Link>{" "}
                  is a state-of-the-art recreational facility with pools, ice
                  rinks, fitness classes, and more. Ideal for families and
                  fitness enthusiasts.
                </p>
              </li>
              <li className="font-bold mt-2">
                Majestic View Nature Center & Park{" "}
                <p className="font-normal">
                  <Link
                    href="https://maps.app.goo.gl/Y9h1BpA7eFUVGHKZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    This park
                  </Link>{" "}
                  offers beautiful views, walking trails, and educational
                  programs about local wildlife and conservation efforts.
                </p>
              </li>
              <li className="font-bold mt-2">
                Cussler Museum{" "}
                <p className="font-normal">
                  A unique museum featuring a collection of rare and classic
                  cars owned by author Clive Cussler. A must-visit for car
                  enthusiasts. Visit the{" "}
                  <Link
                    href="http://www.cusslermuseum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Cussler Museum
                  </Link>{" "}
                  today!
                </p>
              </li>
              <li className="font-bold mt-2">
                Ralston Central Park{" "}
                <p className="font-normal">
                  <Link
                    href="https://maps.app.goo.gl/jnHsgctK73Pz5nAo8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    A popular park
                  </Link>{" "}
                  with a splash pad, playgrounds, picnic areas, and walking
                  paths. Great for families and outdoor activities.
                </p>
              </li>
              <li className="font-bold mt-2">
                Indian Tree Golf Club{" "}
                <p className="font-normal">
                  A well-maintained golf course offering a challenging round of
                  golf with beautiful mountain views. Tee off at{" "}
                  <Link
                    href="http://www.indiantree.apexprd.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Indian Tree Golf Club
                  </Link>{" "}
                  soon!
                </p>
              </li>
              <li className="font-bold mt-2">
                Red Rocks Community College{" "}
                <p className="font-normal">
                  A{" "}
                  <Link
                    href="http://www.rrcc.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    reputable educational institution
                  </Link>{" "}
                  offering a variety of degree programs and continuing education
                  courses.
                </p>
              </li>
              <li className="font-bold mt-2">
                The Bluegrass Lounge{" "}
                <p className="font-normal">
                  A popular local spot known for its extensive whiskey selection
                  and live{" "}
                  <Link
                    href="http://www.bluegrasslounge.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    bluegrass music
                  </Link>
                  . Perfect for a relaxed night out.
                </p>
              </li>
              <li className="font-bold mt-2">
                Two Ponds National Wildlife Refuge{" "}
                <p className="font-normal">
                  A serene natural area offering trails, birdwatching, and
                  environmental education programs.{" "}
                  <Link
                    href="http://www.fws.gov/refuge/two_ponds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Two Ponds National Wildlife Refuge
                  </Link>{" "}
                  is a hidden gem for nature lovers.
                </p>
              </li>
            </ol>
            <p className="text-gray-700 mt-5">
              These attractions highlight the diverse and vibrant community of
              Arvada, making it a wonderful place to live and explore. Whether
              you're new to the area or a longtime resident, these spots offer
              something for everyone. And if you're planning a move within or to
              Arvada, our professional movers are here to help you get settled
              quickly and efficiently so you can start enjoying all the city has
              to offer.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-semibold">
              Local Movers are Here to Help
            </h2>
            <p className="text-gray-700 mt-2">
              Ready to make your move in Arvada, CO? Contact us today for a
              free, no-obligation quote and experience a stress-free move with
              our professional team. Let us take the hassle out of moving so you
              can focus on settling into your new home. You may also be
              interested in seeing our services for the neighboring community of{" "}
              <Link
                href="https://greenmtnmovers.com/service-areas/aurora"
                className="custom-link"
              >
                Aurora CO
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pb-20 px-5 md:px-10 z-1 relative">
        <div className="flex flex-col items-center justify-center max-w-screen-xl">
          <div className="flex flex-col justify-center gap-3">
            <h3 className="text-2xl font-semibold mt-8">
              Request a Free Moving Quote in Arvada, Colorado
            </h3>
            <p className="text-gray-700">
              Obtaining a free moving quote from Green Mountain Movers is a
              straightforward process. Our dedicated business representatives
              are ready to work with you to determine the services you need,
              providing an accurate moving estimate based on your specific
              requirements. Whether you're moving within Arvada or across the
              country, our experienced team is here to assist you. Contact us
              today via phone, email, or the convenient contact form on this
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Arvada,%20CO&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
