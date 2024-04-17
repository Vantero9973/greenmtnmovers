"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function LocalMovingFAQ() {
  return (
    <div className="divide-y divide-zinc-900/10 pb-10">
      <h2 className="text-2xl font-semibold leading-10 tracking-tight text-zinc-900">
        Frequently asked questions
      </h2>
      <dl className="mt-5 space-y-6 divide-y divide-zinc-900/10">
        <Disclosure as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-zinc-900">
                  <span className="text-base font-semibold leading-7">
                    What is considered local moving?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-zinc-600">
                  Local moving typically refers to a move within the same city
                  or county. For example, moving from Denver to Colorado Springs
                  would be considered a local move in Colorado.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-zinc-900">
                  <span className="text-base font-semibold leading-7">
                    How Much Does a Denver Local Move Cost?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-zinc-600">
                  The cost of a local move in Denver can vary depending on
                  several factors, including the distance of your move, the size
                  of your home or office, and any additional services you may
                  need. Green Mountain Movers offers competitive prices and
                  customized quotes to fit your budget.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-zinc-900">
                  <span className="text-base font-semibold leading-7">
                    What Makes Green Mountain Movers Stand Out?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-zinc-600">
                  At Green Mountain Movers, we pride ourselves on our
                  exceptional customer service, attention to detail, and
                  efficient moving process. Our team is highly trained and
                  experienced in handling all{" "}
                  <Link
                    href="https://www.military.com/pcs/types-of-moves.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link w-fit"
                  >
                    types of moves
                  </Link>{" "}
                  within Colorado.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-zinc-900">
                  <span className="text-base font-semibold leading-7">
                    Are My Belongings Safe During the Move?
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-zinc-600">
                  Yes, at Green Mountain Movers, we take great care in handling
                  your belongings during the entire moving process. We use
                  high-quality packing materials and secure loading techniques
                  to ensure the safety of your items.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </dl>
    </div>
  );
}
