import { RadioGroup } from "@headlessui/react";

const styles = [
  {
    id: 1,
    name: "Classic",
    description: "Description",
    price: "$40",
  },
  {
    id: 2,
    name: "Light Volume",
    description: "Description",
    price: "$40",
  },
  {
    id: 3,
    name: "Volume",
    description: "Description",
    price: "$40",
  },
  {
    id: 4,
    name: "Mega Volume",
    description: "Description",
    price: "$40",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  style: {
    name: string;
    price: string;
  } | null;
  setStyle: (arg0: any) => void;
}

export const StyleForm = ({ style, setStyle }: any) => {
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
                      description
                    </RadioGroup.Description>
                  </span>
                </span>
                <RadioGroup.Description
                  as="span"
                  className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                >
                  <span className="font-medium text-emerald-900">
                    {style.price}
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
