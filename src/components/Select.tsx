import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { countriesData, State } from "../models/country";

interface SelectProps {
  selectName: string;
  selectedOptionDefault: string;
  register: UseFormRegister<{
    email: string;
    firstName: string;
    LastName: string;
    address: string;
    city: string;
    zipCode: string;
    phone: string;
    state: string;
    country: string;
    appartment?: string | undefined;
  }>;
  elements: any[];
  errors: FieldErrors<{
    email: string;
    firstName: string;
    LastName: string;
    address: string;
    city: string;
    zipCode: string;
    phone: string;
    state: string;
    country: string;
    appartment?: string | undefined;
  }>;
}

export function Select({
  selectName,
  selectedOptionDefault,
  register,
  elements,
  errors,
}: SelectProps) {
  return (
    <>
      <label htmlFor="country" className="label-form">
        {selectName}
      </label>
      <select
        className="select-form"
        id="country"
        defaultValue=""
        {...register("country")}>
        <option value="" disabled>
          {selectedOptionDefault}
        </option>
        {elements?.map((c, i) => (
          <option key={`${c.name}-${i}`} value={c.name}>
            {c.name}
          </option>
        ))}
        {errors.country && (
          <span className="text-error">este campo es obligatorio</span>
        )}
      </select>
    </>
  );
}
