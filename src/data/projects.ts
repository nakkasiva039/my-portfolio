export const projects = [
  {
    title: "WeRize Field Force Application",
    description:
      "WeRize Field Force Application used by agents to manage loan cases, track customer interactions, and handle overdue collections efficiently.",
    details: [
      "Built using React, TypeScript, Redux, and Tailwind CSS with focus on performance and usability.",
      "Enabled agents to manage assigned cases, track overdue payments, and update call/visit dispositions.",
      "Developed key modules like Case Management, Tasks, Notifications, and Analytics Dashboard.",
      "Designed reusable UI components and optimized performance for smooth user experience.",
    ],
    module: {
      title: "Case Management Module",
      points: [
        "Displays complete loan case details including customer info, overdue amount, EMI schedules, and transaction history.",
        "Structured UI using reusable components for better readability and navigation.",
        "Allows actions like calling customers, sending SMS/WhatsApp, starting visits, and updating dispositions.",
      ],
    },
    tech: ["React", "Redux", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },

  {
    title: "LAP Document Portal",
    description:
      "Tablet-based application used by field agents to capture and verify customer loan details across multiple structured sections before submission.",

    details: [
      "Built a multi-step form-based application for external and internal agents to collect customer loan data.",
      "Implemented tab-based workflow including Application Info, Business Assessment, Income & Liabilities, Household Property, Risk Remarks, and Upload sections.",
      "Used React, TypeScript, and Context API for efficient state management across multiple tabs.",
      "Enabled real-time data validation and seamless navigation between sections for better user experience.",
      "Developed document preview (image viewer) feature to verify uploaded details before final submission.",
    ],

    module: {
      title: "Multi-Step Form & Document Verification",
      points: [
        "Designed tab-based UI to handle large forms in structured sections.",
        "Managed shared state across tabs using Context API.",
        "Implemented document upload and preview functionality for verification before submission.",
        "Ensured smooth user flow for field agents using tablet devices.",
      ],
    },

    tech: ["React", "TypeScript", "Context API", "Tailwind"],
    github: "#",
    demo: "#",
  },

  {
    title: "Lender Portal",
    description:
      "Internal portal for managing end-to-end loan processing with multiple financial institutions (lenders) through structured workflows and API integrations.",

    details: [
      "Built a multi-step loan processing flow integrating lenders like Utkarsh, Northern Arc, and Vivriti.",
      "Implemented rule engine validations, Aadhaar verification, VKYC, NACH, and agreement workflows.",
      "Handled API integrations for lender-specific processes and dynamic flow handling.",
      "Developed reusable UI components and ensured smooth state management across complex workflows.",
      "Optimized user experience for Ops teams to track loan status, resolve errors, and re-initiate processes.",
    ],

    module: {
      title: "Loan Processing Workflow",
      points: [
        "Integrated rule engine to validate eligibility and control flow progression.",
        "Implemented Aadhaar verification and VKYC flow using external lender APIs.",
        "Enabled loan initiation, status tracking, and real-time updates via API responses.",
        "Handled NACH mandate setup for EMI auto-debit and agreement generation workflows.",
        "Built final customer profile sync to ensure updated data before loan disbursement.",
      ],
    },

    tech: ["React", "JavaScript", "API Integration", "Bootstrap"],
    github: "#",
    demo: "#",
  },

  {
    title: "Partner Application",
    description:
      "Application used by partners to onboard themselves and create customer loan applications across multiple products with structured workflows.",

    details: [
      "Developed partner onboarding journey including personal details, KYC verification, selfie capture, and bank details.",
      "Enabled partner creation flow after successful onboarding with validation and API integration.",
      "Built multi-product loan application flows including Personal Loan, Unsecured Business Loan, and LAP.",
      "Implemented dynamic form handling based on selected product with different workflows and validations.",
      "Integrated document upload functionality for both partner and customer applications.",
    ],

    module: {
      title: "Partner Onboarding & Loan Application Flow",
      points: [
        "Designed onboarding flow with step-by-step data capture and KYC verification.",
        "Handled partner lifecycle from onboarding to customer acquisition.",
        "Implemented product-based dynamic forms with conditional rendering.",
        "Enabled document upload and verification for loan processing.",
        "Ensured smooth user experience across different loan journeys.",
      ],
    },

    tech: ["React", "JavaScript", "API Integration", "Form Handling"],
    github: "#",
    demo: "#",
  },

  {
    title: "CAM Dashboard",
    description:
      "Credit analysis dashboard used to evaluate customer financial data including income, liabilities, banking transactions, and bureau reports for loan decision-making.",

    details: [
      "Developed a comprehensive dashboard to analyze customer financial and credit data in a structured manner.",
      "Implemented multiple modules including Checklist, Summary, Liability, Employment, Banking, PD Sheet, Bureau, and Customer Dashboard.",
      "Built banking analysis features to track transactions, perform financial analysis, and monitor FCU (Fraud Control Unit) status.",
      "Integrated bureau data including CIBIL and CRIF reports for credit score evaluation.",
      "Designed reusable UI components to display complex financial data in a clear and user-friendly format.",
    ],

    module: {
      title: "Credit Analysis & Financial Dashboard",
      points: [
        "Designed tab-based layout to organize financial and credit data efficiently.",
        "Handled large datasets including banking transactions, liabilities, and employment details.",
        "Integrated credit bureau APIs to fetch and display CIBIL and CRIF reports.",
        "Implemented analysis views for banking transactions and fraud status tracking.",
        "Ensured smooth navigation and performance optimization for data-heavy UI.",
      ],
    },

    tech: [
      "React",
      "JavaScript",
      "Data Visualization",
      "API Integration",
      "Bootstrap",
    ],
    github: "#",
    demo: "#",
  },
];
