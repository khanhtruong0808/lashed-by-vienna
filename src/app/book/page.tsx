"use client";
import { CategoryForm } from "@/components/forms/CategoryForm";
import { ExtrasForm } from "@/components/forms/ExtrasForm";
import { StyleForm } from "@/components/forms/StyleForm";
import { useState } from "react";

export default function BookPage() {
  const [category, setCategory] = useState(null);
  const [style, setStyle] = useState(null);
  const [extras, setExtras] = useState(null);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold tracking-tight text-emerald-900 sm:text-6xl">
            Book Appointment
          </h2>
          <p className="text-lg leading-8 text-emerald-600">
            Please be aware of the{" "}
            <a
              target="_blank"
              href="/policy"
              className="font-bold underline hover:text-emerald-700"
            >
              policy
            </a>{" "}
            before moving forward.
          </p>
          <CategoryForm category={category} setCategory={setCategory} />
          {category && <StyleForm style={style} setStyle={setStyle} />}
          {category && style && (
            <>
              <ExtrasForm />
              <button
                type="submit"
                className="self-start rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
