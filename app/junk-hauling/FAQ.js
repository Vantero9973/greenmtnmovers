"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function JunkHaulingFAQ() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 border-y border-gray-900/10">
        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                What kind of junk do you haul?
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
              We haul all types of junk, including old furniture, appliances,
              yard waste, construction debris, electronics, and much more. Our
              team is equipped to handle large and small items, providing
              comprehensive junk removal services for residential and commercial
              needs.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                How do you dispose of the junk you collect?
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
              We strive to dispose of junk in the most environmentally friendly
              way possible. This includes recycling materials, donating reusable
              items to local charities, and responsibly disposing of
              non-recyclable waste at designated facilities. Our goal is to
              minimize landfill impact and maximize the reuse of materials.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                Do you provide same-day junk removal?
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
              Yes, we offer same-day junk removal services when available. If
              you need immediate help clearing out unwanted items, give us a
              call, and we’ll do our best to accommodate your schedule.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="py-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h3 className="text-base font-semibold leading-7">
                How much does junk hauling cost?
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
              The cost of junk hauling depends on the volume and type of items
              you need removed. We offer free, no-obligation estimates based on
              your specific junk removal needs. Our pricing is transparent with
              no hidden fees.
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </dl>
    </div>
  );
}
