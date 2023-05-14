
const extras = [
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
    name: "Foreign Fill",
    note: "Please check in with me because I have the right to refuse foreign fills",
    exception: "",
    price: "$30",
  },
];
export const ExtrasForm = () => {
  return (
    <fieldset>
      <h1 className="mb-4 text-base font-semibold leading-6 text-emerald-900">
        Add Extras (Optional)
      </h1>
      <legend className="sr-only">Extras</legend>
      <div className="space-y-5">
        {extras.map((extra) => 
        <div key={extra.name} className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-emerald-900">
              {extra.name} ({extra.price}{extra.exception && `, or ${extra.exception}`})
            </label>
            <p id="comments-description" className="text-emerald-800">
              {extra.note}
            </p>
          </div>
        </div>)}
      </div>
    </fieldset>
  );
};
