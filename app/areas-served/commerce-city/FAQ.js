"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Frequently Asked Questions (FAQ): Your Questions, Answered
      </h3>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 border-y border-gray-900/10">
        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-base font-semibold leading-7">
                What do movers move first?
              </span>
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
              Movers typically start by loading large and heavy items like
              furniture and appliances to ensure a stable load.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-base font-semibold leading-7">
                How early should you start packing for a move?
              </span>
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
              Ideally, start packing 2-3 weeks before your move. Begin with
              non-essential items and gradually work toward daily necessities.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-base font-semibold leading-7">
                How do I choose a moving day?
              </span>
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
              Mid-week and mid-month moves are often more flexible and
              affordable. Consider your schedule, availability, and any
              potential traffic or weather issues.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-base font-semibold leading-7">
                Do movers expect you to help?
              </span>
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
              No, movers do not expect you to help. However, it’s important to
              be available for questions or special instructions during the
              process.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="py-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-base font-semibold leading-7">
                Is it proper etiquette to tip movers?
              </span>
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
              Yes, tipping movers is common. Typically, 10-15% of the total cost
              is an appropriate tip, depending on the complexity of the move.
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </dl>
    </div>
  );
}
