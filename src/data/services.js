// Service detail page content. Each entry drives /services/:slug via
// ServiceDetail.jsx — add a slug here, to the build-script route list and the
// sitemap, and the page exists. KES has its own bespoke view (KitchenExhaust.jsx).

export const SERVICE_PAGES = {
  "grease-filter-exchange": {
    code: "SVC.02",
    title: "Grease filter exchange on a scheduled cycle.",
    meta: {
      title: "Grease Filter Exchange Adelaide | Scheduled Service | Elmac",
      desc: "Scheduled grease filter exchange with cleaning at a fully SA Water approved facility. Swap-out service — your kitchen never waits. Honeycomb, baffle and electrostatic, metro and outer-metro collection and delivery.",
    },
    lead: "Filters carry the first and heaviest grease load in your kitchen. Our exchange program swaps them on a scheduled cycle — cleaned at a fully SA Water approved facility using deep-soak, hot-wash and rinse practice — so the canopy keeps drawing the way it should and your kitchen never waits on drying filters.",
    image: "svc-filters.jpg",
    risks: [
      {
        t: "Fire load above the flame",
        b: "A saturated filter is fuel sitting directly over the cooktop. A short, kept cycle is the cheapest fire-risk reduction in the building.",
      },
      {
        t: "Canopy performance collapses",
        b: "Blocked filters choke airflow. Heat, smoke and odour stay in the kitchen exactly when service is busiest.",
      },
      {
        t: "Grease migrates downstream",
        b: "What the filter doesn't catch loads the plenum and duct — accelerating the cost and frequency of full system cleans.",
      },
    ],
    scope: {
      heading: "How the exchange service runs",
      items: [
        "Scheduled collection & delivery — metro and outer-metro runs",
        "Swap-out exchange stock: clean filters in, loaded filters out, zero downtime",
        "Deep-soak, hot-wash & rinse at a fully SA Water approved facility",
        "All types and sizes — honeycomb, stainless baffle, electrostatic",
        "Damaged and mismatched filters reported, replacements supplied",
        "Multi-site scheduling on a single cadence and invoice",
      ],
      note: "Filters that come back damaged or past service life get flagged with a replacement recommendation — not silently rotated back in.",
    },
    cycles: [
      ["Heavy grease load", "Solid fuel · charcoal · wok cooking", "2-weekly"],
      ["Standard commercial", "Most restaurant, hotel & pub kitchens", "4-weekly"],
      ["Light use", "Low-grease or limited-hours kitchens", "4–8-weekly"],
    ],
    who: "Restaurants and cafés, hotels, pubs and clubs, hospitality groups and facility managers running multiple kitchens on one cadence.",
    related: [
      ["Kitchen exhaust cleaning", "/services/kitchen-exhaust-cleaning"],
      ["Scheduled maintenance programs", "/services/scheduled-maintenance-programs"],
    ],
    cta: { label: "Book grease filter exchange", to: "/contact" },
  },

  "commercial-kitchen-deep-cleaning": {
    code: "SVC.03",
    title: "Commercial kitchen deep cleaning & detail.",
    meta: {
      title: "Commercial Kitchen Deep Cleaning Adelaide | Elmac",
      desc: "Full kitchen deep clean and detail — equipment, behind and beneath, walls, ceilings, floors and drains. Pre-council inspection, end-of-lease, post-fitout and pizza oven programs. Night works available, quoted by inspection.",
    },
    lead: "A different service from exhaust cleaning — and a different result from nightly cleaning. A full reset of the kitchen: equipment detailed, behind and beneath cleared and degreased, walls, ceilings, floors and drains brought back to standard. The right tool before a council inspection, after fit-out, at end of lease, or whenever the kitchen has drifted.",
    image: "svc-commercial.jpg",
    slider: "svc-pizza-oven.jpg",
    risks: [
      {
        t: "Inspection findings",
        b: "EHOs look where nightly cleaning doesn't reach — behind equipment, under benches, above the line. That's exactly where a deep clean works.",
      },
      {
        t: "Hygiene & pest pressure",
        b: "Accumulated grease and debris behind equipment is harbourage. Clearing it is hygiene control, not presentation.",
      },
      {
        t: "Handover and lease exposure",
        b: "End-of-lease and post-fitout kitchens get judged on detail. A documented deep clean is the clean exit or the clean start.",
      },
    ],
    scope: {
      heading: "What a deep clean covers",
      items: [
        "Cooking equipment teardown, degrease, detail and rebuild",
        "Pizza oven programs — teardown, deep clean, rebuild and polish",
        "Behind and beneath equipment — moved, cleared, degreased",
        "Walls, ceilings, glass, stainless and touchpoints",
        "Floors and drains degreased and reset",
        "Builders' post-construction presentation and handover cleans",
      ],
      note: "Scope is set at inspection and quoted fixed — anything outside it (repairs, pest treatment, canopy internals) is named and quoted separately, not absorbed and skimped.",
    },
    cycles: [
      ["Pre-audit / pre-inspection", "Council visit or landlord audit coming up", "As required"],
      ["Operational uplift", "High-volume kitchens holding standard", "Quarterly – 6-monthly"],
      ["Transition", "End of lease · post-fitout · new operator", "One-off, documented"],
    ],
    who: "Venues preparing for council inspections or audits, operators taking over or handing back kitchens, and groups pairing periodic deep cleans with their exhaust cycle. Main pizza-oven cleaning contractor to Domino's and Pizza Hut in SA & NT.",
    related: [
      ["Kitchen exhaust cleaning", "/services/kitchen-exhaust-cleaning"],
      ["Grease filter exchange", "/services/grease-filter-exchange"],
    ],
    cta: { label: "Request a quote by inspection", to: "/contact" },
  },

  "pressure-washing": {
    code: "SVC.04",
    title: "Commercial pressure washing — hot, cold and high-restriction.",
    meta: {
      title: "Commercial Pressure Washing Adelaide | Elmac Cleaning Services",
      desc: "Trailer-mounted hot-wash pressure cleaning to 4,500 PSI — bin rooms, loading docks, grease-affected concrete, carparks, building exteriors, roofs and solar. Runoff-aware practice, after-hours available.",
    },
    lead: "Commercial external and hard-surface cleaning — not driveway washing. Trailer-mounted hot-wash systems to 4,500 PSI for the areas that carry a site's grease, grime and presentation risk: bin rooms, docks, back-of-house concrete, carparks and building exteriors. Wash-down and runoff handled properly, after hours where the site needs it.",
    image: "svc-pressure.jpg",
    slider: "svc-pressure.jpg",
    risks: [
      {
        t: "Slip and grease hazards",
        b: "Grease-affected concrete at back-of-house is a recorded incident waiting for a date. Hot-wash removal is the fix, not signage.",
      },
      {
        t: "Bin room load",
        b: "Odour, vermin pressure and staining build fast in waste areas — and they're the first thing an auditor smells.",
      },
      {
        t: "Asset presentation",
        b: "Facades, carparks and common areas set tenant and customer expectations. Scheduled washdowns keep the standard without capital works.",
      },
    ],
    scope: {
      heading: "Where we work",
      items: [
        "Bin rooms, waste corrals and compactor pads",
        "Loading docks and service yards",
        "Grease-affected concrete and pavers",
        "Building exteriors, awnings and shopfronts",
        "Carparks, roofs and solar arrays",
        "Runoff capture and wash-down planning per site",
      ],
      note: "Wash-down water is managed to the site's trade-waste arrangements — planned before the trigger gets pulled, not explained after.",
    },
    cycles: [
      ["Waste & dock areas", "High-traffic hospitality and retail", "Monthly – quarterly"],
      ["Common areas & carparks", "Centres and managed property", "Quarterly – 6-monthly"],
      ["Exteriors, roofs & solar", "Whole-of-asset presentation", "6-monthly – annual"],
    ],
    who: "Shopping centres, facility and property managers, venues with grease-affected back-of-house, and sites needing after-hours or weekend windows.",
    related: [
      ["High access & facade cleaning", "/services/high-access-facade-cleaning"],
      ["Scheduled maintenance programs", "/services/scheduled-maintenance-programs"],
    ],
    cta: { label: "Request a commercial quote", to: "/contact" },
  },

  "high-access-facade-cleaning": {
    code: "SVC.05",
    title: "High access & facade cleaning, planned properly.",
    meta: {
      title: "High Access & Facade Cleaning Adelaide | Elmac Cleaning Services",
      desc: "EWP-coordinated facade, external window, louvre and signage cleaning for commercial property — permits, risk assessment and access planning handled as part of the job.",
    },
    lead: "At height, the access plan is the product. We coordinate the EWP, the permits, the risk assessment and the traffic or pedestrian controls — then do the cleaning: facades and cladding, external windows and louvres, signage and high-level structures on commercial property.",
    image: "svc-install.jpg",
    risks: [
      {
        t: "Unmanaged work-at-height risk",
        b: "High access without SWMS, permits and the right plant isn't a cheaper quote — it's your site carrying someone else's shortcut.",
      },
      {
        t: "Permit non-compliance",
        b: "CBD and centre work needs council permits, site inductions and sometimes traffic control. Missing paperwork stops the job at your cost.",
      },
      {
        t: "Asset degradation",
        b: "Facades, louvres and signage weather fast when ignored — and cleaning deferred long enough becomes restoration priced.",
      },
    ],
    scope: {
      heading: "Capability",
      items: [
        "EWP and knuckle-boom coordination and operation",
        "External windows and louvres — high-access",
        "Facade and cladding washdown, including composite panels",
        "Signage and high-level structure cleaning",
        "Council permits, site inductions and traffic-control coordination",
        "SWMS and site-specific risk assessment on every job",
      ],
      note: "Weather, anchor points and ground conditions get assessed before we commit a date — a postponed lift beats an unsafe one.",
    },
    cycles: [
      ["Street-facing facades", "CBD and high-visibility frontages", "6-monthly – annual"],
      ["Windows & louvres", "Commercial and institutional buildings", "6-monthly – annual"],
      ["Signage & structures", "As presentation requires", "Annual"],
    ],
    who: "Property managers, corporate and institutional sites, shopping centres and building owners with high-access presentation or maintenance needs.",
    related: [
      ["Pressure washing", "/services/pressure-washing"],
      ["Scheduled maintenance programs", "/services/scheduled-maintenance-programs"],
    ],
    cta: { label: "Request a site inspection", to: "/contact" },
  },

  "kes-installation": {
    code: "SVC.06",
    title: "Kitchen exhaust & extraction installation.",
    meta: {
      title: "Kitchen Exhaust Installation Adelaide | PGE342023 | Elmac",
      desc: "Full-scope kitchen exhaust and extraction installation — custom design, manufacture, air-flow engineering and licensed installation to AS1668 & AS1668.2 under PGE342023.",
    },
    lead: "Inception to completion: custom design, manufacture, air-flow analysis engineering and installation of kitchen exhaust and extraction systems — delivered under Plumbing, Gas and Electrical contractor licensing (PGE342023) for confidence in the conformance AS1668 and AS1668.2 require.",
    image: "svc-install.jpg",
    risks: [
      {
        t: "Non-conforming systems fail certification",
        b: "An undersized or badly designed system fails sign-off and chokes the kitchen — and retrofit costs multiples of doing it right once.",
      },
      {
        t: "Airflow decides the kitchen",
        b: "Capture velocity, make-up air and duct sizing determine whether the canopy actually works on a Friday night. That's engineering, not guesswork.",
      },
      {
        t: "Unlicensed work is your liability",
        b: "Gas, electrical and plumbing connections on exhaust systems need licensed contractors — certification depends on it.",
      },
    ],
    scope: {
      heading: "Full-scope delivery",
      items: [
        "System design and air-flow analysis engineering",
        "Custom canopy and duct manufacture",
        "Licensed installation — plumbing, gas and electrical (PGE342023)",
        "Conformance to AS1668 & AS1668.2",
        "Exhaust fan, cowl and make-up air supply",
        "Commissioning, then handover onto a maintenance cycle",
      ],
      note: "Every install is handed over with its cleaning and filter cycle already mapped — the system arrives compliant and stays that way.",
    },
    cycles: [
      ["New venue fitout", "Design → manufacture → install → commission", "Project"],
      ["System upgrade", "Capacity, compliance or layout changes", "Project"],
      ["Post-install maintenance", "Filters + KES cycle from day one", "Scheduled"],
    ],
    who: "New venues and fitouts, operators upgrading undersized systems, builders and shopfitters needing a licensed exhaust contractor.",
    related: [
      ["Kitchen exhaust cleaning", "/services/kitchen-exhaust-cleaning"],
      ["Scheduled maintenance programs", "/services/scheduled-maintenance-programs"],
    ],
    cta: { label: "Discuss an installation", to: "/contact" },
  },

  "scheduled-maintenance-programs": {
    code: "SVC.07",
    title: "Scheduled maintenance programs — a year of compliance on one planner.",
    meta: {
      title: "Scheduled Cleaning Maintenance Programs Adelaide | Elmac",
      desc: "Annual maintenance planning across kitchen exhaust cleaning, filter exchange, deep cleans and pressure washing — one contact, consolidated reporting, venue-by-venue cycles for groups and facility managers.",
    },
    lead: "The end state for every site we service: one financial-year planner carrying every cycle — filters on their short cadence, KES cleans on the risk-based cycle, deep cleans and washdowns where they belong, and an annual review across the lot. You see the year; we run it; the documents accumulate on their own.",
    image: "hero-canopy.jpg",
    risks: [
      {
        t: "Memory-driven maintenance misses",
        b: "When the schedule lives in someone's head or inbox, services slip — and the gap only surfaces at audit, renewal or claim time.",
      },
      {
        t: "Vendor sprawl",
        b: "Different contractors per service and per venue means inconsistent pricing, inconsistent standards and admin nobody costs honestly.",
      },
      {
        t: "Compliance blind spots",
        b: "Across multiple venues, the question isn't whether one site is compliant — it's whether you can see them all at once. A planner makes it visible.",
      },
    ],
    scope: {
      heading: "How a program works",
      items: [
        "Site-by-site audit: systems, load, access, current cycles",
        "One FY planner: filters, KES, deep cleans, washdowns, review",
        "Venue-by-venue cycles — each site on its own right cadence",
        "One point of contact, consistent pricing across sites",
        "Consolidated invoicing and a single report stream",
        "Annual review: cycles adjusted to what the reports actually found",
      ],
      note: "This is the same planner model already running Elmac's largest multi-venue clients — productised, not invented for the website.",
    },
    cycles: [
      ["Filter exchange", "Per kitchen, by grease load", "2–8-weekly"],
      ["KES cleaning", "Per system, by risk class", "Quarterly – annual"],
      ["Deep cleans & washdowns", "Where the sites need them", "Scheduled"],
    ],
    who: "Hospitality groups, franchise operators, facility and property managers — anyone responsible for more kitchens than one calendar can hold.",
    related: [
      ["Compliance & reporting", "/compliance-reporting"],
      ["Kitchen exhaust cleaning", "/services/kitchen-exhaust-cleaning"],
    ],
    cta: { label: "Discuss a multi-site program", to: "/contact?type=multi-site" },
  },
};
