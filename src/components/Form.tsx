import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { email, z } from "zod";
import "../styles/form.css";
import { useCountries } from "../hooks/useCountries";
import { Select } from "./Select";
import { schema } from "../models/schema";
import { DEFAULT_FORM_VALUES } from "../constants/formValues";
import { Input } from "./Input";

type FormFields = z.infer<typeof schema>;
const Schema = schema;

export function Form() {
  const { countries } = useCountries();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(Schema),
    defaultValues: DEFAULT_FORM_VALUES,
  });
  const countrySelected = watch("country");
  const statesFormCountrySelected = countries.find(
    (c) => c.name === countrySelected,
  );

  const onSumbmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSumbmit)}>
      <fieldset className="fieldset">
        <legend className="legend">Informacion de contacto</legend>
        <Input
          placeholder={"Jhon@gmail.com"}
          register={register}
          errors={errors}
          label={"Correo Electronico"}
          inputValue={"email"}
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="legend">Informacion de envio</legend>
        <Select
          selectName={"Pais"}
          selectedOptionDefault={"seleccione el Pais"}
          register={register}
          elements={countries}
          errors={errors}
        />
        <Select
          selectName={"Estado"}
          selectedOptionDefault={"seleccione el Estado"}
          register={register}
          elements={statesFormCountrySelected?.states || []}
          errors={errors}
        />
        <fieldset className="fieldset name-lastname">
          <Input
            placeholder={"Jhon"}
            register={register}
            errors={errors}
            label={"Nombre"}
            inputValue={"firstName"}
          />
          <Input
            placeholder={"Doe"}
            register={register}
            errors={errors}
            label={"apellidos"}
            inputValue={"LastName"}
          />
        </fieldset>
        <Input
          placeholder={"123th street 21 ave78 "}
          register={register}
          errors={errors}
          label={"Direccion"}
          inputValue={"address"}
        />

        <Input
          placeholder={"apt 202"}
          register={register}
          errors={errors}
          label={"Apartamento"}
          inputValue={"appartment"}
        />

        <fieldset className="fieldset name-lastname">
          <Input
            placeholder={"florida"}
            register={register}
            errors={errors}
            label={"Ciudad"}
            inputValue={"city"}
          />
          <Input
            placeholder={"1234"}
            register={register}
            errors={errors}
            label={"ZipCode"}
            inputValue={"zipCode"}
          />
        </fieldset>
        <Input
          placeholder={"+1 1234 567"}
          register={register}
          errors={errors}
          label={"Telefono"}
          inputValue={"phone"}
        />
      </fieldset>
      <button className="submit-button" disabled={isSubmitting} type="submit">
        {isSubmitting ? "loading..." : "Pagar envio de carrito"}
      </button>
    </form>
  );
}
