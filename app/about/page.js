import Navbar from "../../components/NavbarAbsolute";
import Image from "next/image";
import aboutImg from "../../public/media/test.jpg";
import { BsYelp, BsGoogle } from "react-icons/bs";
import { SiThumbtack } from "react-icons/si";

export default function Example() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <main className="isolate">
          <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-[#0e5933]/40 pt-14">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                  We’re a passionate group of people working to improve the
                  moving experience.
                </h1>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="text-lg leading-8 text-gray-600">
                    At Green Mountain Movers, we understand that moving isn't
                    just about transporting belongings from one place to
                    another; it's about creating new beginnings, memories, and
                    opportunities. Our commitment to making your move as smooth
                    and stress-free as possible has made us a trusted name in
                    the industry.
                  </p>
                </div>
                <Image
                  src={aboutImg}
                  alt=""
                  placeholder="blur"
                  className="shadow-lg shadow-[#0e5933]/25 mt-10 aspect-[6/5] w-full object-cover max-w-lg rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>

          {/* Logo cloud */}
          <div className="mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-[#0e5933] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our customers love us
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Take a moment to look over the reviews from our collaborations
                with different platforms
              </p>
              <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
                <a
                  href="www.google.com"
                  className="flex items-center gap-3 text-white text-xl font-bold"
                >
                  <BsGoogle className="w-10 h-10" />
                  Google
                </a>
                <a
                  href="www.yelp.com"
                  className="flex items-center gap-3 text-white text-xl font-bold"
                >
                  <BsYelp className="w-10 h-10" />
                  Yelp
                </a>
                <a
                  href="www.thumbtack.com"
                  className="flex items-center gap-3 text-white text-xl"
                >
                  <SiThumbtack className="w-[40px] h-[40px]" />
                  Thumbtack
                </a>
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src=""
                  alt="Yellowpages"
                  placeholder="blur"
                  width={158}
                  height={48}
                />{" "}
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src=""
                  alt="Something else idk"
                  placeholder="blur"
                  width={158}
                  height={48}
                />
              </div>
              <div
                className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-white to-[#0e5933] opacity-25"
                  style={{
                    clipPath:
                      "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="my-32 overflow-hidden sm:mt-40">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Our people
                  </h2>
                  <p className="mt-6 text-xl leading-8 text-gray-600">
                    Quasi est quaerat. Sit molestiae et. Provident ad dolorem
                    occaecati eos iste. Soluta rerum quidem minus ut molestiae
                    velit error quod. Excepturi quidem expedita molestias quas.
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat. Quasi aperiam sit non sit neque
                    reprehenderit.
                  </p>
                </div>
                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                    <img
                      src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                      <img
                        src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                      <img
                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                        alt=""
                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                      <img
                        src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                        alt=""
                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
