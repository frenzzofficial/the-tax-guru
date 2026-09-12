import { z } from "zod";
import { emailRules, phoneRules } from "../configs/schema.config";

// ✅ Load environment variables from .env file
// ✅ Define schema with defaults and transformations
const envConfigSchema = z.object({
  NEXT_PUBLIC_CONTACT_PHONE: phoneRules.default(""),
  NEXT_PUBLIC_CONTACT_PHONE_ALT: phoneRules.optional().default(""),
  NEXT_PUBLIC_CONTACT_PHONE_KANPUR: phoneRules.optional().default(""),
  NEXT_PUBLIC_CONTACT_PHONE_DELHI: phoneRules.optional().default(""),

  NEXT_PUBLIC_CONTACT_EMAIL: emailRules.default("contact@thetaxguru.in"),

  // WhatsApp Cloud API (Meta Graph API) — server-only, never expose to client
  WHATSAPP_TOKEN: z.string().min(1).default("your_token_here"),
  WHATSAPP_PHONE_NUMBER_ID: z
    .string()
    .min(1)
    .default("your_phone_number_id_here"),
  WHATSAPP_RECIPIENT_NUMBER: z
    .string()
    .min(10)
    .default("your_recipient_number_here"), // owner's number that receives leads"
  WHATSAPP_API_VERSION: z.string().default("v20.0"),
  WHATSAPP_MESSAGE_TEMPLATE: z.string().default("default"),
});

// ✅ Validate process.env safely
const parsed = envConfigSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid Contact environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`,
  );
}

// ✅ Export validated config
export const envContactConfig = Object.freeze({
  CONTACT_PHONE: parsed.data.NEXT_PUBLIC_CONTACT_PHONE,
  CONTACT_PHONE_ALT: parsed.data.NEXT_PUBLIC_CONTACT_PHONE_ALT,
  CONTACT_PHONE_KANPUR: parsed.data.NEXT_PUBLIC_CONTACT_PHONE_KANPUR,
  CONTACT_PHONE_DELHI: parsed.data.NEXT_PUBLIC_CONTACT_PHONE_DELHI,

  CONTACT_EMAIL: parsed.data.NEXT_PUBLIC_CONTACT_EMAIL,

  WHATSAPP_TOKEN: parsed.data.WHATSAPP_TOKEN,
  WHATSAPP_PHONE_NUMBER_ID: parsed.data.WHATSAPP_PHONE_NUMBER_ID,
  WHATSAPP_RECIPIENT_NUMBER: parsed.data.WHATSAPP_RECIPIENT_NUMBER,
  WHATSAPP_API_VERSION: parsed.data.WHATSAPP_API_VERSION,
  WHATSAPP_MESSAGE_TEMPLATE: parsed.data.WHATSAPP_MESSAGE_TEMPLATE,
});

// ✅ Optional: Export type
export type EnvContactConfig = z.infer<typeof envConfigSchema>;
