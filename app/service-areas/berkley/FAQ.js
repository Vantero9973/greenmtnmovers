"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 border-y border-gray-900/10">
        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                What Day is Cheapest to Hire Long-Distance Movers?
              </h3>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              If you're looking to save money on your move, consider scheduling
              it during weekdays. Typically, moving companies have lower rates
              on weekdays compared to weekends due to lower demand. This simple
              tip can help you reduce your moving costs significantly.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h2 className="text-base font-semibold leading-7">
                What is the Average Cost of Movers Berkley?
              </h2>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              The cost of hiring local movers can vary based on several factors,
              including the size of your home, the volume of items being moved,
              and any additional services required. On average, you can expect
              to pay between $80 and $120 per hour for a team of movers. For a
              more accurate estimate, contact us for a personalized quote.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                How to Reduce Your Moving Costs in Colorado?
              </h3>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              Here are some tips to help you minimize your moving expenses:
            </p>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Pack Yourself
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Save on packing services by doing it yourself.
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Declutter
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Move fewer items by getting rid of things you no longer
                    need.
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Be Flexible
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Schedule your move during off-peak times to take advantage
                    of lower rates.
                  </dd>
                </div>
              </dl>
            </div>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                Can You Negotiate with Movers in Berkley?
              </h3>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              Yes, you can negotiate with a moving company. Discuss your budget
              and see if there are ways to reduce costs. Some companies may
              offer discounts for flexible scheduling or for booking during
              off-peak times.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="py-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                How Much Does It Cost to Move Goods for Relocation?
              </h3>
              <span className="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 group-data-[open]:hidden"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-5 sm:pr-12">
            <p className="text-sm leading-6 text-gray-600">
              The cost of moving goods depends on several factors, including the
              distance of the move, the volume of items, and any additional
              services required. On average, long-distance moves can cost
              between $2,000 and $5,000. For a detailed estimate, contact us to
              discuss your specific needs.
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </dl>
    </div>
  );
}
