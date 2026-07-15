import * as z from "zod";

export const createMobileSchema = z.object({
  brand: z.string().min(1, "Выберите бренд"),

  name: z.string().min(1, "Введите модель"),

  price: z.coerce.number().min(1, "Введите цену"),

  storage: z.coerce.number().min(1, "Выберите память"),

  color: z.string().min(1, "Введите цвет"),

  logo: z.string().min(1, "Введите ссылку на логотип"),

  title: z.string().min(1, "Введите описание"),
});

export type ICreateMobileSchema = z.infer<typeof createMobileSchema>;
