import type { FieldErrors, Path, UseFormRegister } from "react-hook-form";

// Definimos la interfaz del formulario para no repetirla
interface FormFields {
  email: string;
  firstName: string;
  LastName: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  state: string;
  country: string;
  appartment?: string;
}

interface InputProps {
  placeholder: string;
  label: string;
  inputValue: Path<FormFields>; // <-- CRÍTICO: Indica que es una llave válida del form
  type?: string; // Agregamos una prop para el tipo de input (text, email, etc.)
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

export function Input({
  register,
  errors,
  label,
  inputValue,
  placeholder,
}: InputProps) {
  const error = errors[inputValue];
  return (
    <>
      <label
        htmlFor={`${inputValue}`}
        style={error ? { color: "red" } : { color: "var(--primary-color)" }}
        className="label-form">
        {label}
        <input
          autoComplete="true"
          placeholder={`${placeholder}`}
          id={`${inputValue}`}
          className="input-form"
          {...register(inputValue)}
          type={`${inputValue}`}
        />
        {error && (
          <div className="text-error" style={{ color: "red" }}>
            {error.message}
          </div>
        )}
      </label>
    </>
  );
}
