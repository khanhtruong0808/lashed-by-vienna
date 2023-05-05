"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

interface LashDescription {
  title: string;
  description: string;
}

const faqs = [
  {
    question: "What is considered a full set?",
    answer:
      "If I can count the number of lashes on you, then that's considered a full set. 22+ days after your last appointment = a full set. Please don't hesitate to send pictures to ask questions.",
  },
  {
    question: "Where do I send my deposit?",
    answer:
      "Please be ready to send your deposit in order to secure your appointment. There will be a $25 non-refundable, non-transferable deposit. Please send it via Zelle, remaining balance will be due in CASH ONLY",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "Please refrain from wearing contacts - the fumes in the glue can cause your contacts to shrink. Be on time with a mask on & a fresh face. PLEASE no caffeine prior to your appointment. No call, no show = no longer accepted.",
  },
  {
    question: "Cancellation",
    answer:
      "Please notify me within 48-72 hours if you need to reschedule and I can try to accomodate you. As stated, your original security deposit is non-refundable and non-transferable. If you ahve tested positive or you're feeling sick, please notify me 48 hours prior to your appointment.",
  },
  {
    question: "How can I book?",
    answer:
      "I will send you my availability via DMs. I don't respond to those who don't follow me or spam accounts.",
  },
  {
    question: "Late Policy",
    answer:
      "After 15 minutes, your papointment will be cancelled. I have a 7 minute grace period, after 7 minutes, I will charge an extra $50.",
  },
  {
    question: "Can you do foreign fills?",
    answer:
      "Yes, but you must send pictures beforehand so I could let you know if I am able to do a foreign fill.",
  },
];

const lashDescription = [
  {
    title: "Classic Lashes",
    description:
      "Classic lashes is one synthetic lash placed on one natural lash. This will create an everyday natural look.",
  },
  {
    title: "Light Volume",
    description:
      "Light volume are flared out fans on one lash. The lash fan contains 12-17 synthetic lashes and is placed onto one natural lash.",
  },
  {
    title: "Volume",
    description:
      "Volume lashes are flared out fans on one lash. The lash fan contains 12-17 synthetic lashes and is placed onto one natural lash.",
  },
  {
    title: "Mega Volume",
    description:
      "Mega volume lashes are flared out fans on one lash. The lash fan contains 12-17 synthetic lashes and is placed onto one natural lash.",
  },
];

export default function PolicyPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl divide-y divide-emerald-900/10">
        <h1 className="text-3xl font-bold leading-10 tracking-tight text-emerald-900">
          Policy
        </h1>
        <dl className="mt-4 space-y-6 divide-y divide-emerald-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-emerald-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-emerald-800">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
          <Disclosure as="div" className="pt-6">
            {({ open }) => (
              <div>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-emerald-900">
                    <span className="text-base font-semibold leading-7">
                      What is the difference between each set?
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-emerald-700">
                    {lashDescription.map((lashDescription: LashDescription) => {
                      return (
                        <div
                          key={lashDescription.title}
                          className="overflow-hidden sm:rounded-lg"
                        >
                          <div className="px-2 py-5 sm:px-4">
                            <h3 className="text-lg font-medium leading-6 text-emerald-900">
                              {lashDescription.title}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-emerald-800">
                              {lashDescription.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </p>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </dl>
      </div>
    </div>
  );
}
