import { z } from "zod";
import { VILLA_STAGES, PROPERTY_TYPES } from "./constants.js";

const short = (max = 200) => z.string().trim().max(max);
export const uuid = z.string().uuid();
export const clientFields = z
  .object({
    full_name: short(120).min(2),
    phone: short(40),
    address: short(500),
    country: short(100).min(2),
    occupation: short(120),
    emergency_contact: short(200),
    status: z.enum(["active", "inactive"]),
  })
  .strict();
export const createClientSchema = clientFields.extend({
  client_code: z.string().trim().toUpperCase()
    .refine((value) => value === "" || /^[A-Z0-9][A-Z0-9-]{2,31}$/.test(value), {
      message: "Client ID must be 3-32 letters, numbers or hyphens, starting with a letter or number.",
    }).optional(),
  email: z
    .string()
    .trim()
    .email()
    .max(254)
    .transform((v) => v.toLowerCase()),
});
export const villaSchema = z
  .object({
    client_id: uuid,
    villa_number: short(60).min(1),
    villa_type: z.enum(PROPERTY_TYPES),
    block: short(60),
    plot_size: short(80),
    stage: z.enum(VILLA_STAGES),
    progress: z.number().int().min(0).max(100),
    handover_date: z.union([z.string().date(), z.null()]),
  })
  .strict();
export const updateSchema = z
  .object({
    villa_id: uuid,
    title: short(160).min(2),
    body: short(5000).min(2),
    published: z.boolean(),
  })
  .strict();
export const uploadSchema = z
  .object({
    update_id: uuid,
    resource_type: z.enum(["image", "video"]),
    caption: short(200),
  })
  .strict();
export const readySchema = z.object({ media_id: uuid }).strict();
