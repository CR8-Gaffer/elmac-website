// Industry page content — drives /industries/:slug via IndustryDetail.jsx
// and the /industries overview grid.

export const INDUSTRY_PAGES = {
  "restaurants-cafes": {
    name: "Restaurants & cafés",
    meta: {
      title: "Kitchen Exhaust & Cleaning for Restaurants | Elmac Adelaide",
      desc: "Kitchen exhaust cleaning, grease filter exchange and deep cleaning for restaurants and cafés — scheduled around trade, documented for council and insurance. Adelaide, SA & NT.",
    },
    reality:
      "Tight margins, no downtime to give, and an EHO who can walk in any lunchtime. Your kitchen can't stop for its own maintenance — so the maintenance has to move around the kitchen.",
    pains: [
      "Council inspections that judge what nightly cleaning can't reach",
      "Grease odour and smoke hanging in the room at peak service",
      "Canopy draw fading exactly when the line is busiest",
      "Cleaning contractors who turn up during prep",
    ],
    program: [
      ["Kitchen exhaust clean", "6-monthly (quarterly for heavy cooking)"],
      ["Grease filter exchange", "4-weekly swap-out — kitchen never waits"],
      ["Deep clean / detail", "Before audits, after fitouts, as standards drift"],
    ],
    why: [
      "Early-morning, after-close and night windows as standard, not as favours",
      "Photo report and certificate after every compliance clean — your evidence drawer fills itself",
      "One contractor across exhaust, filters, oven and deep cleaning",
    ],
    cta: { label: "Book a site inspection", to: "/contact?service=kes" },
  },

  "hotels-pubs-clubs": {
    name: "Hotels, pubs & clubs",
    meta: {
      title: "KES Cleaning for Hotels, Pubs & Clubs | Elmac Adelaide",
      desc: "Multi-kitchen exhaust cleaning, filter exchange and deep cleaning for hotels, pubs and clubs — mapped per kitchen, scheduled around functions and trade, documented for insurers.",
    },
    reality:
      "Multiple kitchens, bistro and function loads that swing by season, and an insurance renewal that asks harder questions every year. Every kitchen carries its own grease load — one cycle doesn't fit them all.",
    pains: [
      "Different kitchens on different (or forgotten) cycles",
      "Functions calendar colliding with maintenance windows",
      "Insurance audits requesting servicing evidence",
      "Bin rooms, kegs areas and beer gardens carrying presentation risk",
    ],
    program: [
      ["Site-mapped KES cycles", "Each kitchen on its own risk-based cadence"],
      ["Filter exchange", "4-weekly across all kitchens, one visit"],
      ["Deep cleans & pressure washing", "Scheduled into quiet weeks"],
    ],
    why: [
      "Scheduling built around your functions calendar and trade patterns",
      "One report stream per venue — renewal evidence in one place",
      "Group planner available when there's more than one venue",
    ],
    cta: { label: "Plan around your venue calendar", to: "/contact" },
  },

  "shopping-centres": {
    name: "Shopping centres",
    meta: {
      title: "Shopping Centre Cleaning Contractor | KEF Programs | Elmac",
      desc: "Centre-wide kitchen exhaust fan programs, tenancy grease management, common-area pressure washing and high access cleaning — permit-to-work fluent, night works standard.",
    },
    reality:
      "Permits, inductions, night-works-only windows and common exhaust infrastructure that serves tenants who've never seen it. Centre work is coordination first, cleaning second — contractors who don't get that cost you management time.",
    pains: [
      "Common exhaust fans and risers nobody owns until they fail",
      "Tenancy grease migrating into common ducts and neighbouring tenancies",
      "Contractors who stall at PTW, induction and access-key process",
      "Food-court load: bins, docks and hard surfaces on constant cycle",
    ],
    program: [
      ["Centre-wide KEF program", "Common fans and risers, per-asset documentation"],
      ["Tenancy support", "KES and filter programs offered per food tenant"],
      ["Common areas", "Pressure washing, bin rooms, docks, high access"],
    ],
    why: [
      "Permit-to-work, induction and night-access process is routine for our crews",
      "Per-asset reports with defects flagged straight to centre management",
      "Grease-leak investigation capability when tenancy issues surface",
    ],
    cta: { label: "Speak with operations", to: "/contact" },
  },

  "food-production": {
    name: "Food production & manufacturing",
    meta: {
      title: "Industrial Kitchen & Food Production Cleaning | Elmac Adelaide",
      desc: "Exhaust system cleaning, high-level cleaning and shutdown-window deep cleans for food production and manufacturing sites — WHS-led, audit-ready documentation.",
    },
    reality:
      "Audit regimes, WHS gates and production lines that only stop when the schedule says so. Cleaning happens in shutdown windows, documented to the standard your auditors expect — or it doesn't happen at all.",
    pains: [
      "Audit findings on overhead and extraction infrastructure",
      "Short, fixed shutdown windows that can't blow out",
      "Contractors whose SWMS don't survive the site induction",
      "Grease and particulate load in high-level structures",
    ],
    program: [
      ["Shutdown-window cleaning", "Planned, crewed and completed inside the window"],
      ["Exhaust & extraction systems", "Risk-based cycle with full documentation"],
      ["High-level & structural cleaning", "Access-planned, WHS-led"],
    ],
    why: [
      "SWMS and risk assessment quality that passes hard site inductions",
      "Photo documentation aligned to your audit evidence needs",
      "Crews sized to finish inside the window you actually have",
    ],
    cta: { label: "Request a compliance clean", to: "/contact?intent=compliance" },
  },

  "facility-property-managers": {
    name: "Facility & property managers",
    meta: {
      title: "Cleaning Contractor for Facility & Property Managers | Elmac",
      desc: "Scheduled kitchen exhaust and building cleaning programs with consolidated documentation — Form 3 support, defect reporting and grease-leak investigation for FM and property portfolios.",
    },
    reality:
      "Your principals and owners don't want assurances — they want the document trail. Every service needs to arrive with its evidence attached, every defect needs to surface before it becomes a finding, and the contractor needs to be the least of your problems.",
    pains: [
      "Chasing contractors for reports that should arrive unprompted",
      "Form 3 and ESM evidence obligations to principals",
      "Tenant grease issues becoming building problems",
      "Procurement needing insurance, SWMS and capability documents on demand",
    ],
    program: [
      ["Scheduled programs", "Per-asset cycles with consolidated reporting"],
      ["Defect & risk visibility", "Issues flagged in-report with recommendations"],
      ["Investigations", "Grease leaks and exhaust faults diagnosed and remediated"],
    ],
    why: [
      "Documentation designed to be handed straight up the chain",
      "Form 3 support on essential safety measure servicing",
      "One contractor across exhaust, filters, washdowns and high access",
    ],
    cta: { label: "Request documentation support", to: "/contact?intent=compliance" },
  },

  "multi-site-groups": {
    name: "Multi-site groups & franchises",
    meta: {
      title: "Multi-Site Cleaning Programs for Hospitality Groups | Elmac",
      desc: "One annual planner across every venue — consistent pricing, consolidated reporting, venue-by-venue service cycles. The maintenance program hospitality groups actually keep.",
    },
    reality:
      "Every venue added multiplies the vendors, the invoices and the ways a compliance date slips through. The fix isn't more chasing — it's one planner that holds every venue's cycles and one partner accountable for the lot.",
    pains: [
      "Different contractors, prices and standards at every venue",
      "No single view of which sites are due, overdue or exposed",
      "Admin load of quotes, bookings and invoices multiplying per site",
      "One venue's lapse becoming the group's insurance problem",
    ],
    program: [
      ["FY annual planner", "Every venue, every service, every cycle — visible"],
      ["Consistent pricing", "One rate structure across the group"],
      ["Consolidated reporting", "One stream of certificates and photo reports"],
    ],
    why: [
      "This is the exact model running Elmac's largest group clients today",
      "New venues onboard onto the planner, not onto a new negotiation",
      "Priority response across the group when something urgent lands",
    ],
    cta: { label: "Discuss a multi-site program", to: "/contact?type=multi-site" },
  },
};
