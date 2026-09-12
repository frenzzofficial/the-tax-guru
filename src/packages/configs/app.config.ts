import { envContactConfig } from "../env/contact.env";
import { envPublicConfig } from "../env/public.env";
import { services } from "./services.config";

/**
 * Canonical office list — single source of truth for physical
 * locations. `appConfig.locations` (city slugs, used by the sitemap)
 * is derived from this below. Don't hardcode a second list.
 */
const offices = [
  {
    id: "kanpur",
    city: "Kanpur",
    title: "Kanpur Office",

    address: "116/652, Ganesh Nagar, Rawatpur, Kanpur-208019, Uttar Pradesh",

    phone: [
      envContactConfig.CONTACT_PHONE_KANPUR,
      envContactConfig.CONTACT_PHONE_ALT,
    ],
  },

  {
    id: "delhi",
    city: "Delhi",
    title: "Delhi Office",

    address: "RFZ-32, Nihal Vihar, Nangloi, New Delhi, Delhi 110041",

    phone: [
      envContactConfig.CONTACT_PHONE_DELHI,
      envContactConfig.CONTACT_PHONE_ALT,
    ],
  },
] as const;

export const appConfig = {
  app: {
    name: envPublicConfig.APP_NAME,
    shortName: "The Tax Guru",
    description: envPublicConfig.APP_DESCRIPTION,
    locale: "en-IN",
    language: "en",
    themeColor: "#0C71C3",
  },

  /* ========================================
     Site Identity
  ======================================== */

  site: {
    name: envPublicConfig.APP_NAME,
    legalName: "The Tax Guru",

    tagline: envPublicConfig.SITE_TITLE,

    description: envPublicConfig.APP_DESCRIPTION,

    url: envPublicConfig.SITE_URL,

    logo: {
      src: envPublicConfig.LOGO_URL,
      alt: envPublicConfig.APP_NAME,
      width: 512,
      height: 512,
    },

    favicon: "/favicon.ico",

    brand: {
      primary: "#0C71C3",
      secondary: "#005A87",
      accent: "#12EAA6",
    },
  },

  /* ========================================
     Metadata
  ======================================== */

  metadata: {
    title: `${envPublicConfig.APP_NAME} | Tax & Compliance Services`,
    titleTemplate: "%s | The Tax Guru",

    description: envPublicConfig.APP_DESCRIPTION,

    keywords: [
      "The Tax Guru",
      "GST registration",
      "GST return filing",
      "income tax return",
      "ITR filing",
      "trademark registration",
      "MSME registration",
      "FSSAI registration",
      "Import Export Code",
      "IEC registration",
      "tax consultant",
      "tax consultant Kanpur",
      "compliance services India",
      "GST registration Kanpur",
      "trademark registration India",
      "GST return filing",
      "ITR filing consultant",
      "MSME registration",
      "PF ESI registration",
      "IEC code registration",
      "FSSAI registration",
      "tax consultant Kanpur",
      "tax consultant Delhi",
    ],

    authors: [
      {
        name: envPublicConfig.AUTHOR_NAME,
        email: envPublicConfig.AUTHOR_EMAIL,
      },
    ],

    creator: "The Tax Guru",
    publisher: "The Tax Guru",

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: envPublicConfig.APP_NAME,
      title: `${envPublicConfig.APP_NAME} | Tax & Compliance Services`,
      description: envPublicConfig.APP_DESCRIPTION,
      images: [
        {
          url: envPublicConfig.OG_IMAGE_URL ?? "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${envPublicConfig.APP_NAME} - Tax & Compliance Services`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${envPublicConfig.APP_NAME} | Tax & Compliance Services`,
      description: envPublicConfig.APP_DESCRIPTION,
      images: [envPublicConfig.OG_IMAGE_URL ?? "/og-image.png"],
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  },

  services,

  // City slugs derived from `offices` below — always in sync, never
  // hardcode a second list.
  locations: offices.map((office) => office.id),

  /* ========================================
     Contact
  ======================================== */

  contact: {
    email: envPublicConfig.AUTHOR_EMAIL,

    phone: [envContactConfig.CONTACT_PHONE, envContactConfig.CONTACT_PHONE_ALT],

    whatsapp: envContactConfig.CONTACT_PHONE,

    workingHours: {
      days: "Monday - Sunday",
      time: "10:00 AM - 07:00 PM",
    },

    offices,
  },

  /* ========================================
     Social
  ======================================== */

  social: {
    twitter: envPublicConfig.TWITTER,

    linkedin: envPublicConfig.LINKEDIN,

    github: envPublicConfig.GITHUB,
  },

  /* ========================================
     Routes
  ======================================== */

  routes: {
    home: "/",

    services: "/services",
    service: "/services/[slug]",

    about: "/about",

    contact: "/contact",

    resources: "/resources",
    faq: "/faq",

    privacyPolicy: "/privacy-policy",
    terms: "/terms",
    disclaimer: "/disclaimer",
  },

  /* ========================================
     Navigation
  ======================================== */

  navigation: {
    header: {
      main: [
        {
          label: "Home",
          href: "/",
        },

        {
          label: "Services",
          href: "/services",
        },

        {
          label: "About",
          href: "/about",
        },

        {
          label: "Resources",
          href: "/resources",
        },

        {
          label: "Contact",
          href: "/contact",
        },
      ],

      actions: {
        primary: {
          label: "Get Started",
          href: "/contact",
        },

        phone: {
          label: envContactConfig.CONTACT_PHONE,
          href: `tel:${envContactConfig.CONTACT_PHONE}`,
        },
      },
    },

    mobile: {
      actions: {
        primary: {
          label: "Get Started",
          href: "/contact",
        },

        phone: {
          label: "Call Us",
          href: `tel:${envContactConfig.CONTACT_PHONE}`,
        },
      },
    },
  },

  /* ========================================
     Footer
  ======================================== */

  footer: {
    description:
      "Tax, accounting, registration and compliance support for individuals and businesses across India.",

    navigation: [
      {
        title: "Company",

        items: [
          {
            label: "About Us",
            href: "/about",
          },

          {
            label: "Services",
            href: "/services",
          },

          {
            label: "Contact",
            href: "/contact",
          },
        ],
      },

      {
        title: "Services",

        // Always in sync with the canonical catalog — see `services`
        // at the top of this file.
        items: services.map((service) => ({
          label: service.title,
          href: service.href,
        })),
      },

      {
        title: "Resources",

        items: [
          {
            label: "Tax Resources",
            href: "/resources",
          },

          {
            label: "FAQs",
            href: "/faq",
          },
        ],
      },
    ],

    legal: [
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },

      {
        label: "Terms & Conditions",
        href: "/terms",
      },

      {
        label: "Disclaimer",
        href: "/disclaimer",
      },
    ],

    copyright: "© The Tax Guru. All rights reserved.",
  },

  /* ========================================
     Layout
  ======================================== */

  layout: {
    navbar: {
      height: {
        desktop: "5rem",
        mobile: "4rem",
      },

      sticky: true,

      blur: true,

      border: true,
    },

    container: {
      maxWidth: "80rem",
      padding: {
        mobile: "1rem",
        tablet: "2rem",
        desktop: "4rem",
      },
    },

    content: {
      maxWidth: "80rem",
      readingWidth: "48rem",
    },

    footer: {
      columns: 4,
    },
  },
} as const;
