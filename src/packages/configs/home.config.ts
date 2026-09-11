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

    items: [
      {
        id: "gst",
        title: "GST Registration & Filing",
        shortTitle: "GST",
        description:
          "GST registration, return filing, amendments, invoice guidance and ongoing GST support.",
        href: "/services/gst",
      },
      {
        id: "income-tax",
        title: "Income Tax Return",
        shortTitle: "ITR",
        description:
          "ITR filing, tax calculation, refund assistance and practical income tax guidance.",
        href: "/services/income-tax",
      },
      {
        id: "trademark",
        title: "Trademark Registration",
        shortTitle: "TM",
        description:
          "Protect your business name, logo or brand with trademark registration assistance.",
        href: "/services/trademark",
      },
      {
        id: "msme",
        title: "MSME Registration",
        shortTitle: "MSME",
        description:
          "Udyam/MSME registration support with documentation and application assistance.",
        href: "/services/msme",
      },
      {
        id: "iec",
        title: "Import Export Code",
        shortTitle: "IEC",
        description:
          "IEC registration support for businesses starting or expanding import-export activities.",
        href: "/services/iec",
      },
      {
        id: "fssai",
        title: "FSSAI Registration",
        shortTitle: "FSSAI",
        description:
          "Food business registration and compliance assistance for eligible businesses.",
        href: "/services/fssai",
      },
      {
        id: "pf-esi",
        title: "PF / ESI Registration",
        shortTitle: "PF",
        description:
          "Employee-related statutory registration and compliance support.",
        href: "/services/pf-esi",
      },
      {
        id: "business-registration",
        title: "Business Registration",
        shortTitle: "BUS",
        description:
          "Business setup and registration guidance based on your business requirements.",
        href: "/services/business-registration",
      },
    ],
  },

  pricing: {
    eyebrow: "POPULAR SERVICES",
    title: "Simple pricing. No surprises.",

    items: [
      {
        service: "GST Registration",
        price: "₹499",
        href: "/services/gst",
      },
      {
        service: "Trademark Registration",
        price: "₹999",
        href: "/services/trademark",
      },
      {
        service: "GST Return / ITR",
        price: "₹499",
        href: "/services/income-tax",
      },
    ],

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

    offices: [
      {
        city: "Kanpur",
        title: "Kanpur Office",
        address:
          "116/652, Ganesh Nagar, Rawatpur, Kanpur-208019, Uttar Pradesh",
        phone: ["+91-9305468480", "+91-8299404744"],
      },
      {
        city: "Delhi",
        title: "Delhi Office",
        address: "RFZ-32, Nihal Vihar, Nangloi, New Delhi, Delhi 110041",
        phone: ["+91-8299329104"],
      },
    ],

    email: "info@thetaxguru.in",

    workingHours: "Monday – Sunday · 10:00 AM – 07:00 PM",
  },

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
        items: [
          {
            label: "GST Registration",
            href: "/services/gst",
          },
          {
            label: "Income Tax Return",
            href: "/services/income-tax",
          },
          {
            label: "Trademark Registration",
            href: "/services/trademark",
          },
          {
            label: "MSME Registration",
            href: "/services/msme",
          },
          {
            label: "IEC Registration",
            href: "/services/iec",
          },
        ],
      },
      {
        title: "Resources",
        items: [
          {
            label: "Tax Resources",
            href: "/resources",
          },
          {
            label: "Tax Calculator",
            href: "/tax-calculator",
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
} as const;
