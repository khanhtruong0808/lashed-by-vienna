const menu = [
  {
    style: "Classic",
    set: "$80",
    threeWeeks: "$65",
    twoWeeks: "$45",
    mini: "$20",
  },
  {
    style: "Light Volume",
    set: "$85",
    threeWeeks: "$70",
    twoWeeks: "$50",
    mini: "$20",
  },
  {
    style: "Volume",
    set: "$100",
    threeWeeks: "$85",
    twoWeeks: "$65",
    mini: "$30",
  },
  {
    style: "Mega Volume",
    set: "$125",
    threeWeeks: "$110",
    twoWeeks: "$90",
    mini: "$40",
  },
];

export const extras = [
  {
    name: "Color",
    note: "Let me know what color you're interested in so I could confirm with you.",
    exception: "",
    price: "$5",
  },
  {
    name: "Full Set Color",
    note: "",
    exception: "",
    price: "$20",
  },
  {
    name: "Wispy/Spikes",
    note: "",
    exception: "",
    price: "$10",
  },
  {
    name: "Removal",
    note: "If there's a buildup of makeup, bacteria removal required",
    exception: "$15 with full set",
    price: "$20",
  },
  {
    name: "Lash Bath",
    note: "From lash glue or mascara",
    exception: "",
    price: "$10",
  },
  {
    name: "Aftercare kit",
    note: "Includes lash wash, brush, and spoolie",
    exception: "$10 for refill",
    price: "$15",
  },
  {
    name: "Late fee",
    note: "",
    exception: "",
    price: "$10",
  },
  {
    name: "Foreign Fill",
    note: "Please check in with me because I have the right to refuse foreign fills",
    exception: "",
    price: "$30",
  },
  {
    name: "Same Day Appointment",
    note: "",
    exception: "",
    price: "$50",
  },
  {
    name: "Squeeze In Appointment",
    note: "",
    exception: "",
    price: "$20",
  },
];

export default function Menu() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold leading-10 tracking-tight text-emerald-900">
          Lash Menu
        </h2>
        <p className="text-xs text-emerald-950">
          Mini fill within 6 days of your last appointment
        </p>
        <p className="text-xs text-emerald-950">
          Fill 7-21 days (if I count the amount of lashes on your eyes, it is a
          full set)
        </p>
        <p className="text-xs text-emerald-950">
          ** if you plan to remove your colors and get a fill then it is
          considered a full set
        </p>
        <dl className="space-y-6 divide-y divide-emerald-900/10">
          <table className="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-emerald-900 sm:pl-0"
                ></th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-emerald-900 sm:pl-0"
                >
                  Set
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-emerald-900 sm:pl-0"
                >
                  3 Weeks
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-emerald-900 sm:pl-0"
                >
                  2 Weeks
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-emerald-900 sm:pl-0"
                >
                  Mini
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {menu.map((item) => (
                <tr key={item.style}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-emerald-900 sm:pl-0">
                    {item.style}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-emerald-900 sm:pl-0">
                    {item.set}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-emerald-900 sm:pl-0">
                    {item.threeWeeks}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-emerald-900 sm:pl-0">
                    {item.twoWeeks}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-emerald-900 sm:pl-0">
                    {item.mini}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </dl>
        <h2 className="mt-4 text-3xl font-bold leading-10 tracking-tight text-emerald-900">
          Extras
        </h2>
        <dl className="mt-4 space-y-6 divide-y divide-emerald-900/10">
          <table className="min-w-full divide-y divide-gray-300">
            <tbody className="divide-y divide-emerald-100">
              {extras.map((extra) => (
                <tr key={extra.name}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-emerald-900 sm:pl-0">
                    {extra.name}
                    <dt className="sr-only">Note</dt>
                    <dd className="truncate text-[0.5rem] text-emerald-950 sm:mt-1 sm:text-xs">
                      {extra.note}
                    </dd>
                    <dt className="sr-only">Exception Price</dt>
                    <dd className="mt-1 table-cell truncate text-xs text-emerald-950 sm:hidden">
                      {extra.exception}
                    </dd>
                  </td>
                  <td className="hidden whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-emerald-900 sm:table-cell sm:pl-0">
                    {extra.exception}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-emerald-900 sm:pl-0">
                    {extra.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </dl>
      </div>
    </div>
  );
}
