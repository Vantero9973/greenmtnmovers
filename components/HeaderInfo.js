import Link from "next/link";
import Image from "next/image";
import stock from "../public/media/stock.jpg";
import stock2 from "../public/media/stock2.jpg";
import stock3 from "../public/media/stock3.jpg";
import stock4 from "../public/media/stock4.jpg";
import stock5 from "../public/media/stock5.jpg";
import moving from "../public/media/moving-6.jpg";
import moving2 from "../public/media/moving-2.jpg";
import moving3 from "../public/media/moving-8.jpg";

export default function HeaderInfo() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
              Moving Services
            </h2>
            <h2 className="text-4xl font-bold">
              Premier Full Service Moving Company in Denver
            </h2>
          </div>
          <p>
            As Denver's leading full service moving company, Green Mountain
            Movers prides itself on offering comprehensive moving services that
            cater to all your relocation needs. Whether you're looking for
            efficient movers to manage a local move or require expert assistance
            for a complex long-distance relocation, our dedicated team ensures
            every move is handled with precision and care. We know that moving
            can be a daunting task, so our moving services are designed to
            provide you with a seamless and{" "}
            <strong>stress-free experience</strong>. From packing and loading to
            transportation and unpacking, our movers are equipped with
            state-of-the-art moving vans and trucks to deliver unparalleled
            service. Recognizing that each move is unique, our moving companies
            tailor services to meet your specific circumstances. Trust Green
            Mountain Movers, a moving company synonymous with reliability and
            excellence, for your next move, and join the multitude of satisfied
            clients who've experienced the ease and convenience of our moving
            services.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1 h-full">
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 h-full">
                <Image
                  alt="Seamless Moving Process with Expert Moving Service"
                  src={stock}
                  className="object-cover object-center !h-full !w-auto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Seamless Moving Process with Expert Moving Service
              </h3>
              <p className="mt-2 text-[15px] text-gray-500">
                At Green Mountain Movers, we pride ourselves on delivering a
                seamless moving process to our clients. Our expert team is
                committed to providing top-tier moving services, ensuring every
                move is handled with precision and care. Whether you're looking
                for local moves or long-distance moves, our services are
                tailored to meet your specific needs. We understand that every
                move is unique, and our moving services strive to assure clients
                of a stress-free experience. Our movers are seasoned
                professionals, adept at maneuvering through the complexities of
                the moving process. With every move, we aim to surpass
                expectations, delivering excellence in moving service. Trust in
                Green Mountain Movers, your expert mover, to transform the
                traditionally daunting task of relocation into a smooth,
                efficient process. Choose us as your moving company and
                experience the pinnacle of seamless moving services.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-8 xl:col-start-9 h-full">
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 h-full">
                <Image
                  alt="Professional Furniture Assembly and Junk Hauling for Your Move"
                  src={stock2}
                  className="object-cover object-center !h-full !w-auto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-1">
              <h3 className="text-lg font-semibold text-gray-900">
                Professional Furniture Assembly and Junk Hauling for Your Move
              </h3>
              <p className="mt-2 text-[15px] text-gray-500">
                At Green Mountain Movers, we’re not just professional movers; we
                excel in furniture assembly and junk hauling to streamline your
                move. Our expert team provides comprehensive moving services,
                ensuring your furniture is meticulously dismantled and
                reassembled at your new home. Dealing with unwanted items? Our
                junk hauling services facilitate removal, making your moving
                process clutter-free. With Green Mountain Movers, hauling away
                the non-essentials is handled with the same professionalism as
                the rest of your move, leaving you to focus on transitioning
                into your home. Our movers are adept at handling all your
                belongings with care, ensuring everything arrives intact.
                Whether it's within{" "}
                <a
                  href="https://maps.app.goo.gl/H9Cw6onAuoGFBZcJ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 visited:text-purple-900 cursor-pointer underline"
                >
                  Denver
                </a>{" "}
                or beyond, our moving services are synonymous with reliability.
                When you trust Green Mountain Movers for your move, every
                aspect, from furniture assembly to junk hauling, is executed
                flawlessly. Experience an impeccable move as we prioritize the
                safety of your home and belongings.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1 h-full">
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 h-full">
                <Image
                  alt="Lakewood's Trusted Movers"
                  src={stock3}
                  className="object-cover object-center !h-full !w-auto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Lakewood's Trusted Movers
              </h3>
              <p className="mt-2 text-[15px] text-gray-500">
                When planning your upcoming relocation, choosing the right
                movers is crucial, and Green Mountain Movers is your best choice
                in Lakewood. Our services are customized to meet the unique
                needs of each move, providing a seamless process from packing to
                transportation. Our experienced movers handle every aspect with
                the highest level of care, whether you're moving locally or
                long-distance. We take pride in offering a stress-free
                relocation experience, with comprehensive services that include
                professional furniture assembly and responsible junk hauling.
                For more information about the specific areas we serve, visit
                our{" "}
                <Link href="/areas-served" className="custom-link">
                  Areas Served
                </Link>{" "}
                page. Contact us today for a free moving quote and see why we're
                Lakewood's top choice for moving services.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-8 xl:col-start-9 h-full">
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 h-full">
                <Image
                  alt="Moving With Our Team: A Commitment to Excellence in Every Move"
                  src={stock4}
                  className="object-cover object-center !h-full !w-auto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-1">
              <h3 className="text-lg font-semibold text-gray-900">
                Moving With Our Team: A Commitment to Excellence in Every Move
              </h3>
              <p className="mt-2 text-[15px] text-gray-500">
                Choosing Green Mountain Movers ensures you're partnering with a
                team that embodies a steadfast commitment to excellence with
                every move. Our moving services are carefully curated to meet
                the unique needs of each home we assist. Whether you're in need
                of comprehensive local movers for an efficient transition within{" "}
                <a
                  href="https://www.denver.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 visited:text-purple-900 cursor-pointer underline"
                >
                  Denver
                </a>
                , or seeking movers skilled in navigating the complexities of a
                long-distance move, our service portfolio is designed to offer
                reliability and excellence. Each mover on our team is a seasoned
                professional, focused on providing a seamless moving process,
                inclusive of services like professional furniture assembly and
                even junk hauling to streamline your relocation.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1 h-full">
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 h-full">
                <Image
                  alt="Debris Removal Service"
                  src={stock5}
                  className="object-cover object-center !h-full !w-auto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Debris Removal Service
              </h3>
              <p className="mt-2 text-[15px] text-gray-500">
                At Green Mountain Movers, we understand that moving isn't just
                about transporting your belongings from one home to another; it
                involves the comprehensive clearing of debris and unwanted items
                as well. That's why we offer a specialized debris removal
                service to alleviate the stress of post-move clean-up. Whether
                you're decluttering before a move, or require swift removal
                afterward, our debris-hauling experts ensure your space is
                spotless. Our removal service extends beyond simply moving your
                possessions; it is an essential part of the moving process to
                provide a truly seamless transition into your new home. With our
                movers adept at handling removal tasks of any size, you can
                confidently entrust us with the debris—and the move—knowing our
                service commitment is to leave you with nothing but
                satisfaction. Let Green Mountain Movers be your chosen movers
                and company that doesn't just move your items but cares for the
                entirety of your relocation experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-20">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0e5933]">
            Moving Services
          </h2>
          <h1 className="text-4xl font-bold">
            Lakewood Movers | Top-Rated Moving Company in Lakewood, CO | Green
            Mountain Movers
          </h1>
        </div>

        <div className="mt-16 space-y-16">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1 h-full">
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 h-full">
                <Image
                  alt="Comprehensive Moving Services for Your Relocation Needs"
                  src={moving}
                  className="object-cover object-center !h-full !w-auto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Comprehensive Moving Services for Your Relocation Needs
              </h3>
              <p className="mt-2 text-[15px] text-gray-500">
                At Green Mountain Movers, we're proud to be known as Denver's
                premier moving company, offering an unparalleled spectrum of
                moving services designed to ensure a seamless relocation
                experience. Whether you're seeking residential or commercial
                movers, our team of expert movers is fully equipped to handle
                every facet of your move with precision and care. We understand
                that{" "}
                <Link
                  href="/"
                  className="text-blue-500 visited:text-purple-900 cursor-pointer underline"
                >
                  moving services
                </Link>{" "}
                are not one-size-fits-all, which is why our moving service is{" "}
                <i>customized</i> to the individual requirements of each client.
                From packing to transporting and unpacking, our service moving
                solutions cater to all your moving needs. Our reputation as one
                of the leading moving companies in Denver is built on our
                commitment to providing reliable and efficient moving services.
                As a trusted moving company, we're devoted to making your next
                move smooth and stress-free with our professional movers'
                expertise. Select Green Mountain Movers and experience the
                excellence of top-tier moving service firsthand.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-8 xl:col-start-9 h-full">
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 h-full">
                <Image
                  alt="Efficient Local Moving Services by Denver's Top Movers"
                  src={moving2}
                  className="object-cover object-center !h-full !w-auto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-1">
              <h3 className="text-lg font-semibold text-gray-900">
                Efficient Local Moving Services by Denver's Top Movers
              </h3>
              <p className="mt-2 text-[15px] text-gray-500">
                When it comes to{" "}
                <Link
                  href="https://greenmtnmovers.com/local-moving"
                  className="custom-link"
                >
                  local moving services
                </Link>
                , Green Mountain Movers is Denver's top choice for providing
                seamless relocation experiences. Our team of expert movers
                understands that a local move is more than just a change of
                address; it's the transition of your home and everything in it
                to a new beginning. We prioritize efficient, reliable moving
                services designed to make your local move as smooth as possible.
                As a seasoned moving company, we've mastered the art of home
                relocation, ensuring each move is tailored to meet your specific
                needs. Let our company's meticulous attention to detail and
                unparalleled commitment to customer satisfaction lift the weight
                of moving off your shoulders. Whether you're moving across the
                street or across the city, you can count on our local services
                to get you settled into your new home with ease.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1 h-full">
              <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 h-full">
                <Image
                  alt="Long-Distance Moving: Your Reliable Interstate Moving Company"
                  src={moving3}
                  className="object-cover object-center !h-full !w-auto"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Long-Distance Moving: Your Reliable Interstate Moving Company
              </h3>
              <p className="mt-2 text-[15px] text-gray-500">
                When faced with the complexities of a long-distance move, you
                need a moving company that's well-versed in the nuances of
                interstate transitions. Green Mountain Movers offers excellence
                in moving services that extend well beyond Denver's borders. Our
                skilled{" "}
                <Link
                  href="https://greenmtnmovers.com/long-distance-moving"
                  className="custom-link"
                >
                  long distance movers
                </Link>{" "}
                understand that your possessions aren't just 'things' – they are
                the threads of your life's tapestry. As a premier moving
                company, we're committed to providing seamless service moving
                experiences. Whether you're crossing state lines or navigating
                the intricacies of service lines, our movers ensure every detail
                is managed with precision. We’re not just any moving services
                provider; we’re a mover that treasures the trust you place in
                our hands. Our interstate moving services are designed to
                alleviate the burden off your shoulders, enabling you to move
                forward with confidence. Trust Green Mountain Movers—a moving
                company that values punctuality, efficiency, and meticulous care
                in every move we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12273.566273921322!2d-105.1118836!3d39.7308543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d50c0a7bbc9c15%3A0x2227dd3fdd89cee0!2sGreen%20Mountain%20Movers!5e0!3m2!1sen!2sus!4v1702307905897!5m2!1sen!2sus"
          className="mt-20"
          width="100%"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
