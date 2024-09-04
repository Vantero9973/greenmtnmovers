"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Frequently asked questions
      </h3>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 border-y border-gray-900/10">
        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h4 className="text-base font-semibold leading-7">
                How Much Are Movers in Colorado?
              </h4>
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
              Moving costs in Colorado can vary depending on several factors,
              including the size of your home, the distance of the move, and the
              services you require. At Green Mountain Movers, we offer
              competitive rates and transparent pricing, so you know exactly
              what to expect. Our team will work with you to create a moving
              plan that fits your budget without sacrificing quality.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h4 className="text-base font-semibold leading-7">
                How to Reduce Your Moving Costs?
              </h4>
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
              There are several ways to <i>save money on your move</i>. One of
              the most effective strategies is to declutter your home before the
              move, reducing the number of items that need to be transported.
              Scheduling your move during off-peak times and being flexible with
              your moving date can also help lower costs. At Green Mountain
              Movers, we’re happy to work with you to find cost-effective
              solutions that meet your needs.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h4 className="text-base font-semibold leading-7">
                Can You Negotiate with a Mover?
              </h4>
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
              Yes, it is possible to negotiate with a moving company, especially
              for larger moves or if you have specific requirements. We believe
              in fair and transparent pricing, and we’re open to discussing your
              needs to find a solution that works for you. Whether you’re
              looking for additional services or need to adjust your moving
              plan, we’re here to help.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h4 className="text-base font-semibold leading-7">
                How Far in Advance Should You Schedule Local Movers?
              </h4>
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
              To ensure availability, it’s best to schedule your move as far in
              advance as possible, especially during peak moving seasons. For
              local moves within Boulder, we recommend booking at least 4-6
              weeks in advance. This allows us to secure your preferred moving
              date and ensures that we have the resources needed to make your
              move a success.
            </p>
          </Disclosure.Panel>
        </Disclosure>

        <Disclosure as="div" className="py-6">
          <dt>
            <Disclosure.Button className="group flex w-full items-start justify-between text-left text-gray-900">
              <h4 className="text-base font-semibold leading-7">
                What is the Most Expensive Month to Move?
              </h4>
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
              Moving costs tend to be higher during the summer months, as this
              is the busiest time of year for the moving industry. If you have
              the flexibility to move during the off-season, such as late fall
              or winter, you may be able to take advantage of lower rates.
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </dl>
    </div>
  );
}
