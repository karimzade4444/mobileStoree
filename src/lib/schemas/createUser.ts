import * as z from "zod";

export const createUserSchema = z.object({
  login: z.email().min(1, "Логин обязателен"),
  password: z.coerce.number<number>(),
});

export type ICreateUserSchema = z.infer<typeof createUserSchema>;
