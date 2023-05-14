import { extras } from "@/app/menu/page";
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
