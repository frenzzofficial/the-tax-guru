/**
 * Builds a WhatsApp "click to chat" deep link (wa.me) from a phone
 * number stored in E.164-ish form (e.g. "+919305468480") and a
 * prefilled message.
 *
 * This is intentionally separate from the Graph API flow in
 * src/app/api/lead — that flow sends a message FROM the server TO the
 * business owner when someone submits the contact form. This link
 * instead opens the VISITOR's own WhatsApp app in a chat with the
 * business number, which is the only thing a public, unauthenticated
 * button can safely do (the Graph API requires a private access
 * token and can't be invoked directly from the browser).
 */
export const buildWhatsAppLink = (phone: string, message: string): string => {
  const digitsOnly = phone.replace(/\D/g, "");

  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
};
