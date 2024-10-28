import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Navbar from "../../components/Navbar";

export default function MovingChecklist() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex mt-5">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <Link href="/" className="text-gray-500 hover:text-gray-600">
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
                  href="/moving-checklist"
                  className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"
                >
                  Moving Checklist
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Moving Checklist
        </h1>
        <p className="text-base leading-7 text-gray-700 mt-4">
          Prepare for your move with this comprehensive moving checklist. From
          organizing your documents to scheduling your movers, these steps will
          ensure a smooth and stress-free move. Stay on track with these
          recommended tasks, starting weeks in advance and continuing right up
          to moving day.
        </p>
        <div className="mt-10">
          <dl className="divide-y divide-gray-100">
            <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                6 to 8 Weeks Before Moving Date
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="list-disc list-inside">
                  <li>
                    Create a budget for your moving expenses and keep track of
                    it throughout the process.
                  </li>
                  <li>
                    Research local moving companies, including Green Mountain
                    Movers, and collect moving quotes.
                  </li>
                  <li>
                    Organize a folder (either physical or digital) for all
                    moving-related documents.
                  </li>
                  <li>
                    Declutter your belongings by hosting a garage/online sale or
                    donating to charity.
                  </li>
                  <li>
                    Arrange for school and medical records to be transferred to
                    your new location.
                  </li>
                </ul>
              </dd>
            </div>

            <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                4 to 6 Weeks Before Moving Date
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="list-disc list-inside">
                  <li>
                    Choose Green Mountain Movers and schedule your move. The
                    earlier you book, the more date options you'll have.
                  </li>
                  <li>
                    Gather packing supplies, including boxes and wrapping
                    materials. Consider using free boxes from liquor stores or
                    online listings.
                  </li>
                  <li>
                    Inform your friends about your upcoming move through social
                    media or personal communication.
                  </li>
                  <li>
                    Start packing seasonal or infrequently used items, and
                    remember to label boxes appropriately.
                  </li>
                  <li>
                    Update accounts with your new address, including banks,
                    subscriptions, insurance, and utilities.
                  </li>
                </ul>
              </dd>
            </div>

            <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                2 to 4 Weeks Before Moving Date
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="list-disc list-inside">
                  <li>
                    Continue packing and organizing your belongings, avoiding
                    last-minute rushes.
                  </li>
                  <li>
                    If downsizing, arrange for storage near your new home with
                    Green Mountain Movers.
                  </li>
                  <li>
                    Notify the post office of your move through their online
                    form or in person.
                  </li>
                  <li>
                    Separate valuable items that you plan to transport
                    personally.
                  </li>
                  <li>
                    If moving long distance, make hotel arrangements for your
                    journey.
                  </li>
                </ul>
              </dd>
            </div>

            <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                1 to 2 Weeks Before Moving Date
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="list-disc list-inside">
                  <li>
                    Pack essential items for a 2-day stay, ensuring you have
                    immediate access to necessities upon arrival.
                  </li>
                  <li>
                    Make an inventory list of the items you'll be moving with
                    Green Mountain Movers.
                  </li>
                  <li>
                    Reconfirm your move with Green Mountain Movers, verifying
                    contact details, address, date, and time.
                  </li>
                  <li>
                    Clean out your safe deposit box if you're changing bank
                    locations.
                  </li>
                </ul>
              </dd>
            </div>

            <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Moving Day
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="list-disc list-inside">
                  <li>
                    Keep your moving folder handy for expense verification
                    during tax filing.
                  </li>
                  <li>
                    Before leaving, ensure all utilities are turned off, windows
                    and doors are closed, and keys are left behind.
                  </li>
                  <li>
                    Stay attentive and assist the Green Mountain Movers team
                    with any questions they may have.
                  </li>
                  <li>
                    Guide the movers to your new location and sign any required
                    paperwork.
                  </li>
                  <li>
                    Take one last look at your old house and prepare for your
                    new journey at your new home.
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
