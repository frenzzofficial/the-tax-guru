/**
 * Canonical service catalog — the SINGLE source of truth for every
 * service offered. Every other place that needs service data
 * (homepage service grid, pricing strip, footer nav, contact-form
 * select options, the lead API enum + WhatsApp label lookup, the
 * sitemap) reads from THIS array. Never redefine a service list
 * anywhere else — add/edit it here only.
 */
export const services = [
  {
    id: "gst",
    title: "GST Registration & Filing",
    shortTitle: "GST",
    description:
      "GST registration, return filing, amendments, invoice guidance and ongoing GST support.",
    href: "/services/gst",
    price: "₹499",
  },
  {
    id: "income-tax",
    title: "Income Tax Return",
    shortTitle: "ITR",
    description:
      "ITR filing, tax calculation, refund assistance and practical income tax guidance.",
    href: "/services/income-tax",
    price: "₹499",
  },
  {
    id: "trademark",
    title: "Trademark Registration",
    shortTitle: "TM",
    description:
      "Protect your business name, logo or brand with trademark registration assistance.",
    href: "/services/trademark",
    price: "₹999",
  },
  {
    id: "msme",
    title: "MSME Registration",
    shortTitle: "MSME",
    description:
      "Udyam/MSME registration support with documentation and application assistance.",
    href: "/services/msme",
    price: null,
  },
  {
    id: "iec",
    title: "Import Export Code",
    shortTitle: "IEC",
    description:
      "IEC registration support for businesses starting or expanding import-export activities.",
    href: "/services/iec",
    price: null,
  },
  {
    id: "fssai",
    title: "FSSAI Registration",
    shortTitle: "FSSAI",
    description:
      "Food business registration and compliance assistance for eligible businesses.",
    href: "/services/fssai",
    price: null,
  },
  {
    id: "pf-esi",
    title: "PF / ESI Registration",
    shortTitle: "PF",
    description:
      "Employee-related statutory registration and compliance support.",
    href: "/services/pf-esi",
    price: null,
  },
  {
    id: "business-registration",
    title: "Business Registration",
    shortTitle: "BUS",
    description:
      "Business setup and registration guidance based on your business requirements.",
    href: "/services/business-registration",
    price: null,
  },
] as const;
