

import { z } from "zod";

/**
 * Login Form Schema
 */
export const loginFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Please enter a valid email." })
      .trim(),

    password: z
      .string()
      .min(1, { message: "Password must not be empty." })
      .trim(),
  
  });

/**
 * Dashboard Product(marchandise) Form Schema
 */
//ps:Maryam25 =Passw0rd
// merchandiseFormSchema 


export const merchSchema = z.object({
  image: z.string().min(1, "Image is required"), // image URL or base64
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Price must be a positive number",
    }),
});

export type MerchInput = z.infer<typeof merchSchema>;


export const RegisterFormSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z
      .string()
      .min(1, { message: "Not be empty" })
      .min(5, { message: "Be at least 5 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password fields do not match.",
        path: ["confirmPassword"],
      });
    }
  });