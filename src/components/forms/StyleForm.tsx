import { RadioGroup } from "@headlessui/react";

const styles = [
  {
    id: 1,
    name: "Classic",
    description: "Classic lashes is one synthetic lash placed on one natural lash. This will create an everyday natural look.",
  },
  {
    id: 2,
    name: "Light Volume",
    description: "Light volume are flared out fans on one lash. The lash fan contains 12-17 synthetic lashes and is placed onto one natural lash.",
  },
  {
    id: 3,
    name: "Volume",
    description: "Volume lashes are flared out fans on one lash. The lash fan contains 12-17 synthetic lashes and is placed onto one natural lash.",
  },
  {
    id: 4,
    name: "Mega Volume",
    description: "Mega volume lashes are flared out fans on one lash. The lash fan contains 12-17 synthetic lashes and is placed onto one natural lash.",
  },
];

const miniPrices = new Map([
  ["Classic", "$20"],
  ["Light Volume", "$20"],
  ["Volume", "$30"],
  ["Mega Volume", "$40"],
]);

const twoWeekPrices = new Map([
  ["Classic", "$45"],
  ["Light Volume", "$50"],
  ["Volume", "$65"],
  ["Mega Volume", "$90"],
]);

const threeWeekPrices = new Map([
  ["Classic", "$65"],
  ["Light Volume", "$70"],
  ["Volume", "$85"],
  ["Mega Volume", "$110"],
]);

const setPrices = new Map([
  ["Classic", "$80"],
  ["Light Volume", "$85"],
  ["Volume", "$100"],
  ["Mega Volume", "$125"],
]);

const priceSet = new Map([
  ["Mini-Fill", miniPrices],
  ["Fill (2 Weeks)", twoWeekPrices],
  ["Fill (3 Weeks)", threeWeekPrices],
  ["Full Set", setPrices],
]);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  selectedCategory: {
    id: number;
    name: string;
    description: string;
  };
  style: {
    name: string;
    price: string;
  } | null;
  setStyle: (arg0: any) => void;
}

export const StyleForm = ({ selectedCategory, style, setStyle }: Props) => {
  const prices = priceSet.get(selectedCategory.name);

  return (
    <RadioGroup value={style} onChange={setStyle}>
      <RadioGroup.Label className="text-base font-semibold leading-6 text-emerald-900">
        Select a style
      </RadioGroup.Label>
      <div className="mt-4 space-y-4">
        {styles.map((style) => (
          <RadioGroup.Option
            key={style.id}
            value={style.name}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "border-emerald-600 ring-2 ring-emerald-600" : "",
                "relative block cursor-pointer rounded-lg border px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label
                      as="span"
                      className="font-medium text-emerald-900"
                    >
                      {style.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="text-emerald-700"
                    >
                      {style.description}
                    </RadioGroup.Description>
                  </span>
                </span>
                <RadioGroup.Description
                  as="span"
                  className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                >
                  <span className="font-medium text-emerald-900">
                    {prices?.get(style.name)}
                  </span>
                </RadioGroup.Description>
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-emerald-600" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
