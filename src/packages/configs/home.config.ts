import { appConfig } from "./app.config";

export const homeConfig = {
  meta: appConfig.metadata,
  hero: {
    eyebrow: "TAX & COMPLIANCE MADE SIMPLE",

    title: {
      lineOne: "Grow your business.",
      lineTwo: "We'll handle the compliance.",
      highlight: "compliance.",
    },

    description:
      "GST, income tax, registrations and business compliance with expert guidance, secure technology and upfront pricing.",

    actions: {
      primary: {
        label: "Get Started",
        href: "/contact",
      },
      secondary: {
        label: "Explore Services",
        href: "/services",
      },
    },

    trustPoints: [
      "15+ Years Experience",
      "500+ Satisfied Clients",
      "Online + Offline Support",
    ],

    visual: {
      eyebrow: "YOUR COMPLIANCE SNAPSHOT",
      title: "This month's priorities",

      items: [
        {
          title: "GST Return",
          description: "Review documents before filing",
          status: "Ready",
        },
        {
          title: "Income Tax",
          description: "ITR preparation & review",
          status: "Next",
        },
        {
          title: "Trademark",
          description: "Brand protection support",
          status: "Start",
        },
      ],

      cta: {
        label: "Talk to a Tax Expert",
        href: "/contact",
      },
    },
  },

  stats: [
    {
      value: "15+",
      label: "Years Experience",
      description: "Auditing & taxation experience",
    },
    {
      value: "500+",
      label: "Satisfied Clients",
      description: "Across multiple industries",
    },
    {
      value: "India",
      label: "Service Reach",
      description: "Online & offline support",
    },
    {
      value: "10 AM – 7 PM",
      label: "Support Hours",
      description: "Monday to Sunday",
    },
  ],

  services: {
    eyebrow: "OUR SERVICES",

    title: "Everything your business needs",

    description:
      "From registrations to recurring filings, get practical support from one trusted tax and compliance partner.",

    // Sourced directly from appConfig.services — the canonical
    // catalog. Add/edit a service in app.config.ts, not here.
    items: appConfig.services,
  },

  pricing: {
    eyebrow: "POPULAR SERVICES",
    title: "Simple pricing. No surprises.",

    // Only services with a listed starting price show up here —
    // sourced from appConfig.services.
    items: appConfig.services
      .filter((service) => service.price !== null)
      .map((service) => ({
        service: service.title,
        price: service.price,
        href: service.href,
      })),

    note: "Starting prices. Final pricing may vary depending on requirements.",
  },

  process: {
    eyebrow: "HOW IT WORKS",

    title: "Compliance without the complexity",

    description:
      "A clear, guided experience designed for individuals, freelancers and growing businesses.",

    steps: [
      {
        number: "01",
        title: "Tell us your requirement",
        description: "Share your service requirement with our team.",
      },
      {
        number: "02",
        title: "Get expert guidance",
        description:
          "We understand your case and recommend the right solution.",
      },
      {
        number: "03",
        title: "Documents & processing",
        description:
          "We help organize documents and handle the required process.",
      },
      {
        number: "04",
        title: "Stay compliant",
        description:
          "Get updates and continued support for your compliance needs.",
      },
    ],
  },

  audience: {
    eyebrow: "WHO WE SERVE",

    title: "Built for real business needs",

    description:
      "Whether you're working independently or growing a business, our services are designed around your requirements.",

    items: [
      {
        title: "Corporate Employees",
        description: "Income tax filing and personal compliance support.",
      },
      {
        title: "Freelancers",
        description:
          "Tax, GST and business compliance for independent professionals.",
      },
      {
        title: "Small Business Owners",
        description: "Registrations, GST, taxation and recurring compliance.",
      },
      {
        title: "Growing Businesses",
        description:
          "Business setup, statutory registrations and ongoing support.",
      },
    ],

    action: {
      label: "Talk to an Expert",
      href: "/contact",
    },
  },

  about: {
    eyebrow: "ABOUT THE TAX GURU",

    title: "A single partner for tax, accounting & compliance.",

    description:
      "The Tax Guru brings taxation, accounting, registration and advisory services together so individuals and businesses can focus on what they do best.",

    experience: "15+ Years",

    experienceLabel: "Tax & compliance experience",

    clients: "500+",

    clientsLabel: "Satisfied clients",

    industries: [
      "Banking & Finance",
      "Manufacturing",
      "Chemicals",
      "Food & Beverage",
      "Pharmaceuticals",
      "Technology",
    ],

    action: {
      label: "About The Tax Guru",
      href: "/about",
    },
  },

  testimonials: {
    eyebrow: "CLIENT STORIES",

    title: "Trusted because the work gets done.",

    description: "Feedback from clients who have worked with The Tax Guru.",

    items: [
      {
        name: "Naresh Gupta",
        service: "Partnership Registration",
        quote:
          "They were very helpful during my company’s partnership registration and I would certainly recommend them to others.",
      },
      {
        name: "Kiran Gujjar",
        service: "GST Services",
        quote:
          "True professionals with expert knowledge and experience. Got my GST work done from them within a single day.",
      },
      {
        name: "Simran Makwana",
        service: "Import Export Code",
        quote:
          "Their consultants are very supportive and guided me at every step while getting my Import Export Code.",
      },
    ],
  },

  contactCta: {
    eyebrow: "LET'S SOLVE YOUR NEXT COMPLIANCE TASK",

    title: "Not sure which service you need?",

    description:
      "Tell us what you're trying to achieve. We'll help you find a practical, cost-effective solution.",

    actions: {
      primary: {
        label: "Schedule an Appointment",
        href: "/contact",
      },
      secondary: {
        label: "Call Us",
        href: "tel:+919305468480",
      },
    },
  },

  contact: {
    eyebrow: "GET IN TOUCH",

    title: "Let's talk about your requirement.",

    description:
      "Share your requirement and our team will help you find the right solution.",

    form: {
      fields: [
        {
          name: "name",
          label: "Name",
          placeholder: "Your name",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "Email Address",
          placeholder: "you@example.com",
          type: "email",
          required: true,
        },
        {
          name: "phone",
          label: "Mobile Number",
          placeholder: "+91",
          type: "tel",
          required: true,
        },
        {
          name: "service",
          label: "Required Service",
          placeholder: "Select a service",
          type: "select",
          required: true,
          // Sourced from appConfig.services — always in sync.
          options: appConfig.services.map((service) => ({
            label: service.title,
            value: service.id,
          })),
        },
        {
          name: "message",
          label: "Query",
          placeholder: "Tell us briefly what you need help with",
          type: "textarea",
          required: false,
        },
      ],

      submitLabel: "Submit Enquiry",
    },

    // Sourced from appConfig.contact — always matches the env-driven
    // phone numbers instead of drifting from a hardcoded copy.
    offices: appConfig.contact.offices,

    email: appConfig.contact.email,

    workingHours: `${appConfig.contact.workingHours.days} · ${appConfig.contact.workingHours.time}`,
  },

  // Footer content lives in appConfig.footer only — it's a shared
  // layout component, not homepage-specific. Read it from there
  // (`import { appConfig } from "./app.config"`) rather than
  // duplicating it here.
} as const;
