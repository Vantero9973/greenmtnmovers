"use client";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function PlanLocalMoveFAQ() {
  return (
    <div className="divide-y divide-zinc-900/10 py-10">
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
                    What should be included in my local moving checklist?
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
                  Your local moving checklist should include a range of tasks,
                  from organizing and decluttering to securing packing supplies
                  and dismantling furniture. It should cover arranging utility
                  transfers, updating your address, and planning the logistics
                  of moving day. Green Mountain Movers can assist you in
                  creating a comprehensive checklist tailored to your specific
                  moving needs.
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
                    How do I prepare for packing when moving locally?
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
                  Begin by categorizing your items to determine what to keep,
                  donate, or discard. Invest in high-quality packing materials
                  such as sturdy boxes, bubble wrap, and packing tape. Label
                  each box with its contents and the room it belongs in,
                  disassemble furniture where possible, and protect everything
                  with proper packing supplies.
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
                    Why should I choose Green Mountain Movers for my local move
                    in Denver?
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
                  Green Mountain Movers is renowned for reliability,
                  professionalism, and efficiency. With an exceptional track
                  record of customer satisfaction, we tailor our services to
                  your individual needs. We are well-versed in Denver’s
                  localities, ensuring a seamless transition to your new home.
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
                    What measures do Green Mountain Movers take to ensure a
                    successful local move?
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
                  Green Mountain Movers is committed to providing a stress-free
                  moving experience. Our professional team handles all
                  belongings with care, and our robust preparation strategies
                  are designed to make your move as efficient and organized as
                  possible.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </dl>
    </div>
  );
}
