import { z } from "zod";
import { appConfig } from "../configs/app.config";
import {
  emailRules,
  fullnameRules,
  phoneRules,
} from "../configs/schema.config";

const SERVICE_IDS = appConfig.services.map((service) => service.id);

export const leadSchema = z.object({
  fullname: fullnameRules,
  phone: phoneRules,
  email: emailRules,
  service: z.enum([...SERVICE_IDS, "other"]),
  message: z.string().max(500).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
