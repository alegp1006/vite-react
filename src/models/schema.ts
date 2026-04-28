import z from "zod";

export const schema = z.object({
  email: z.email("Correo incorecto"),
  firstName: z
    .string()
    .min(3, "este campo debe tener al menos 3 caracteres")
    .max(18, "este campo no debe sobrepasar los 20 caraceres"),
  LastName: z
    .string()
    .min(3, "este campo debe tener al menos 3 caracteres")
    .max(18, "este campo no debe sobrepasar los 20 caraceres"),
  address: z
    .string()
    .min(5, "este campo debe tener al menos 5 caracteres")
    .max(40, "este campo no debe sobrepasar los 40 caraceres"),
  appartment: z
    .string()
    .min(5, "este campo debe tener al menos 5 caracteres")
    .max(20, "este campo no debe sobrepasar los 20 caraceres")
    .optional(),
  city: z
    .string()
    .min(3, "este campo debe tener al menos 3 caracteres")
    .max(20),
  zipCode: z
    .string()
    .min(3, "este campo debe tener al menos 3 caracteres")
    .max(6),
  phone: z
    .string()
    .min(7, "el numbero de telefono debe tener al menos 7 numeros")
    .max(10, "el numbero de telefono debe tener menos de 10 numeros"),
  state: z.string().min(1, "Selecciona un estado"),
  country: z.string().min(1, "Selecciona un país"),
});
