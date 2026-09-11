import { z } from "zod";
import { appConfig } from "../configs/app.config";
import {
  emailRules,
  fullnameRules,
  phoneRules,
} from "../configs/schema.config";

export const leadSchema = z.object({
  fullname: fullnameRules,
  phone: phoneRules,
  email: emailRules,
  service: z.enum([...appConfig.services, "other"]),
  message: z.string().max(500).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
