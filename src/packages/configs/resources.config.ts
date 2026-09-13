export const resourcesConfig = {
  hero: {
    eyebrow: "RESOURCES",
    title: "Tax & compliance resources",
    description:
      "Practical guides and explainers to help you understand what applies to you — and when.",
  },

  categories: [
    "All",
    "GST",
    "Income Tax",
    "Registrations",
    "Compliance",
  ] as const,

  guides: [
    {
      id: "gst-registration-basics",
      title: "GST Registration: who needs it and when",
      description:
        "Turnover thresholds, mandatory registration cases, and the documents you'll need to get started.",
      category: "GST",
    },
    {
      id: "gst-return-filing-calendar",
      title: "GST return filing — key deadlines to track",
      description:
        "A plain-language rundown of GSTR-1, GSTR-3B and other filings, and how often each is due.",
      category: "GST",
    },
    {
      id: "itr-filing-checklist",
      title: "Income Tax Return filing checklist",
      description:
        "The documents and details to keep ready before filing your ITR — for salaried and self-employed alike.",
      category: "Income Tax",
    },
    {
      id: "old-vs-new-tax-regime",
      title: "Old vs new tax regime — how to decide",
      description:
        "A practical way to compare which regime works out better for your income and deductions.",
      category: "Income Tax",
    },
    {
      id: "trademark-registration-process",
      title: "Trademark registration, step by step",
      description:
        "From search and filing to examination and registration — what actually happens and how long it takes.",
      category: "Registrations",
    },
    {
      id: "msme-udyam-registration",
      title: "MSME (Udyam) registration explained",
      description:
        "Who qualifies, what it unlocks, and how the Udyam registration process works.",
      category: "Registrations",
    },
    {
      id: "iec-import-export-code",
      title: "Import Export Code (IEC): when you need one",
      description:
        "A quick guide to IEC eligibility, the application process, and common use cases.",
      category: "Registrations",
    },
    {
      id: "statutory-compliance-calendar",
      title: "Annual statutory compliance calendar",
      description:
        "The recurring filings and renewals most small businesses need to plan for across the year.",
      category: "Compliance",
    },
  ],

  cta: {
    title: "Can't find what you're looking for?",
    description: "Our team can walk you through your specific situation.",
    action: {
      label: "Talk to an Expert",
      href: "/contact",
    },
  },
} as const;
