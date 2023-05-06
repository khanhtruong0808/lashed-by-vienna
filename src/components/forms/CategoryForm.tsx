import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const categories = [
  {
    id: 1,
    name: "Mini-Fill",
    price: "$20 - $40",
  },
  {
    id: 2,
    name: "Fill (2 Weeks)",
    price: "$45 - $90",
  },
  {
    id: 3,
    name: "Fill (3 weeks)",
    price: "$65 - $110",
  },
  {
    id: 4,
    name: "Full Set",
    price: "$80 - $125",
  },
];

interface Props {
  category: {
    name: string;
    price: string;
  } | null;
  setCategory: (arg0: any) => void;
}

export const CategoryForm = ({ category, setCategory }: Props) => {
  return (
    <RadioGroup value={category} onChange={setCategory}>
      <RadioGroup.Label className="text-base font-semibold leading-6 text-emerald-900">
        Select a category
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
        {categories.map((category) => (
          <RadioGroup.Option
            key={category.id}
            value={category}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-emerald-300" : "border-gray-300",
                active ? "border-emerald-600 ring-2 ring-emerald-600" : "",
                "relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-emerald-900"
                    >
                      {category.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-emerald-700"
                    ></RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-sm font-medium text-emerald-900"
                    >
                      {category.price}
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-emerald-600"
                  )}
                  aria-hidden="true"
                />
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
