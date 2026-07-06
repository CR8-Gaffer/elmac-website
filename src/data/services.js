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
      note: "Filters that come back damaged or past service life get flagged with a replacement recommendation — not silently rotated back in. Venues that want the soak process between exchanges run a heated soak tank on site — pots, racks and burners stripped overnight, no one scrubbing them.",
    },
    cycles: [
      ["Heavy grease load", "Solid fuel · charcoal · wok cooking", "2–4-weekly"],
      ["Standard commercial", "Most restaurant, hotel & pub kitchens", "4-weekly"],
      ["Light use", "Low-grease or limited-hours kitchens", "4–8-weekly"],
    ],
    who: "Restaurants and cafés, hotels, pubs and clubs, hospitality groups and facility managers running multiple kitchens on one cadence.",
    related: [
      ["Kitchen exhaust cleaning", "/services/kitchen-exhaust-cleaning"],
      ["Scheduled maintenance programs", "/services/scheduled-maintenance-programs"],
      ["Heated soak tanks — the same soak process, on your site", "/services/heated-soak-tanks"],
    ],
    cta: { label: "Book grease filter exchange", to: "/contact?service=filters" },
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
    sliderBefore: "doc-before-pizza.jpg",
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
    who: "Venues preparing for council inspections or audits, operators taking over or handing back kitchens, and groups pairing periodic deep cleans with their exhaust cycle. Pizza-oven cleaning contractor to two national pizza franchise networks across SA & NT.",
    related: [
      ["Kitchen exhaust cleaning", "/services/kitchen-exhaust-cleaning"],
      ["Grease filter exchange", "/services/grease-filter-exchange"],
      ["Heated soak tanks", "/services/heated-soak-tanks"],
    ],
    cta: { label: "Request a quote by inspection", to: "/contact?service=deep-clean" },
  },

  "pressure-washing": {
    code: "SVC.04",
    title: "Commercial pressure washing — hot, cold and high-restriction.",
    meta: {
      title: "Commercial Pressure Washing Adelaide | Elmac Cleaning Services",
      desc: "Trailer-mounted hot-wash pressure cleaning to 4,500 PSI — bin rooms, loading docks, grease-affected concrete, carparks, building exteriors, roofs and solar. Runoff-aware practice, after-hours available.",
    },
    lead: "Commercial external and hard-surface cleaning — not driveway washing. Trailer-mounted hot-wash systems to 4,500 PSI for the areas that carry a site's grease, grime and presentation risk: bin rooms, docks, back-of-house concrete, carparks and building exteriors. Wash-down and runoff handled properly, after hours where the site needs it.",
    image: "doc-pressure-dawn.jpg",
    slider: "svc-pressure.jpg",
    sliderBefore: "doc-before-pressure.jpg",
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
    cta: { label: "Request a commercial quote", to: "/contact?service=pressure" },
  },

  "high-access-facade-cleaning": {
    code: "SVC.05",
    title: "High access & facade cleaning, planned properly.",
    meta: {
      title: "High Access & Facade Cleaning Adelaide | Elmac Cleaning Services",
      desc: "EWP-coordinated facade, external window, louvre and signage cleaning for commercial property — permits, risk assessment and access planning handled as part of the job.",
    },
    lead: "At height, the access plan is the product. We coordinate the EWP, the permits, the risk assessment and the traffic or pedestrian controls — then do the cleaning: facades and cladding, external windows and louvres, signage and high-level structures on commercial property.",
    image: "doc-highaccess-ewp.jpg",
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
    cta: { label: "Request a site inspection", to: "/contact?service=high-access" },
  },

  "kes-installation": {
    code: "SVC.06",
    title: "Kitchen exhaust & extraction installation.",
    meta: {
      title: "Kitchen Exhaust Installation Adelaide | PGE342023 | Elmac",
      desc: "Full-scope kitchen exhaust and extraction installation — custom design, manufacture, air-flow engineering and licensed installation under PGE342023, with reference to relevant Australian Standards, including AS 1668.2 where applicable.",
    },
    lead: "Inception to completion: custom design, manufacture, air-flow analysis engineering and installation of kitchen exhaust and extraction systems — delivered under Plumbing, Gas and Electrical contractor licensing (PGE342023), with reference to relevant Australian Standards, including AS 1668.2 where applicable.",
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
        "Conformance with relevant Australian Standards, including AS 1668.2",
        "Exhaust fan, cowl and make-up air supply",
        "Commissioning, then handover onto a maintenance cycle",
      ],
      note: "Every install is handed over with its cleaning and filter cycle already mapped — commissioned, certificated, and scheduled so the maintenance evidence starts accumulating from day one.",
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
    cta: { label: "Discuss an installation", to: "/contact?service=install" },
  },

  "scheduled-maintenance-programs": {
    code: "SVC.07",
    title: "Scheduled maintenance programs — a year of compliance on one planner.",
    meta: {
      title: "Scheduled Cleaning Maintenance Programs Adelaide | Elmac",
      desc: "Annual maintenance planning across kitchen exhaust cleaning, filter exchange, deep cleans and pressure washing — one contact, consolidated reporting, venue-by-venue cycles for groups and facility managers.",
    },
    lead: "The end state for every site we service: one financial-year planner carrying every cycle — filters on their short cadence, KES cleans on the risk-based cycle, deep cleans and washdowns where they belong, and an annual review across the lot. You see the year; we run it; the documents accumulate on their own.",
    image: "doc-depot-dawn.jpg",
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
        "Every site's cycles, windows and access requirements held in-system, not in inboxes",
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
    cta: { label: "Discuss a multi-site program", to: "/contact?service=program&type=multi-site" },
  },

  "window-cleaning": {
    code: "SVC.08",
    title: "Commercial window & louvre cleaning.",
    meta: {
      title: "Commercial Window Cleaning Adelaide | High Access | Elmac",
      desc: "Commercial window and louvre cleaning — ground level to high access, EWP-coordinated, scheduled to keep buildings presenting the way their owners intend.",
    },
    lead: "Glass and louvres set a building's standard before anyone walks in. We maintain them on schedule — ground level through to EWP-coordinated high access — so presentation holds without anyone having to remember to book it.",
    image: "svc-commercial.jpg",
    risks: [
      {
        t: "Presentation drift",
        b: "Dirty glass reads as neglect to tenants, customers and prospective lessees — and it compounds quietly until someone important notices.",
      },
      {
        t: "Louvres carry more than dust",
        b: "Ventilation louvres load with grime that restricts airflow and stains facades below them.",
      },
      {
        t: "Access done casually is risk",
        b: "Above ground level, window work is work at height — it needs planning, plant and controls, not a longer pole and hope.",
      },
    ],
    scope: {
      heading: "What the service covers",
      items: [
        "External and internal commercial window cleaning",
        "High-access glass — EWP and boom-coordinated",
        "Ventilation louvre cleaning and degrease",
        "Frames, sills and surrounds detailed with the glass",
        "Shopfronts, offices, institutional and strata buildings",
        "Scheduled cycles or one-off presentation uplifts",
      ],
      note: "Work above ground level runs under the same access planning, SWMS and permit discipline as our facade work — one standard, any height.",
    },
    cycles: [
      ["Street-level shopfronts", "Customer-facing glass", "Fortnightly – monthly"],
      ["Commercial buildings", "Offices, strata, institutional", "Monthly – quarterly"],
      ["High-access glass & louvres", "EWP-planned works", "Quarterly – annual"],
    ],
    who: "Property managers, strata managers, corporate and institutional sites, and venues that want the frontage holding standard year-round.",
    related: [
      ["High access & facade cleaning", "/services/high-access-facade-cleaning"],
      ["Pressure washing", "/services/pressure-washing"],
    ],
    cta: { label: "Request a commercial quote", to: "/contact?service=window" },
  },

  "industrial-cleaning": {
    code: "SVC.09",
    title: "Industrial cleaning for production and heavy-use sites.",
    meta: {
      title: "Industrial Cleaning Adelaide | Production & Heavy Sites | Elmac",
      desc: "Industrial cleaning for production, manufacturing and heavy-use commercial sites — high-level structures, plant areas, shutdown windows, WHS-led delivery with audit-ready documentation.",
    },
    lead: "Production and heavy-use sites accumulate contamination that ordinary cleaning contractors aren't equipped — or inducted — to touch. We maintain the hard parts: high-level structures, plant areas, grease- and particulate-loaded infrastructure, delivered inside shutdown windows under WHS controls that survive real site inductions.",
    image: "doc-roof-array.jpg",
    risks: [
      {
        t: "Audit findings overhead",
        b: "High-level beams, ledges and services collect the contamination auditors photograph — out of daily sight until the finding lands.",
      },
      {
        t: "Windows that can't blow out",
        b: "Shutdown time is production money. Works that overrun their window cost more than the contract ever saved.",
      },
      {
        t: "Contractors who fail the gate",
        b: "If the SWMS doesn't survive your induction process, the clean never starts. Site-readiness is the first deliverable.",
      },
    ],
    scope: {
      heading: "Capability",
      items: [
        "High-level structural cleaning — beams, ledges, services",
        "Plant and production area degrease and washdown",
        "Exhaust and extraction infrastructure servicing",
        "Shutdown-window programs — planned, crewed, completed inside the window",
        "Hot-wash and mechanical cleaning to 4,500 PSI",
        "WHS-led delivery: SWMS, permits, isolation, documented controls",
      ],
      note: "Every industrial job is scoped on-site first — load, access, isolation and window are priced as they actually are, not discovered on day one.",
    },
    cycles: [
      ["Production areas", "Grease and particulate load", "Scheduled per audit cycle"],
      ["High-level structures", "Audit-driven cleaning", "6-monthly – annual"],
      ["Shutdown works", "Planned maintenance windows", "Per shutdown calendar"],
    ],
    who: "Food production and manufacturing sites, breweries, processing facilities and heavy-use commercial infrastructure across SA & NT.",
    related: [
      ["Pressure washing", "/services/pressure-washing"],
      ["Kitchen exhaust cleaning", "/services/kitchen-exhaust-cleaning"],
    ],
    cta: { label: "Request a compliance clean", to: "/contact?service=industrial" },
  },

  "soft-washing": {
    code: "SVC.10",
    title: "Soft washing for surfaces pressure can't touch.",
    meta: {
      title: "Commercial Soft Washing Adelaide | Elmac Cleaning Services",
      desc: "Low-pressure chemical soft washing for painted surfaces, renders, cladding and roofing — removing organic growth and staining without the damage high pressure causes.",
    },
    lead: "Some surfaces are destroyed by the pressure that cleans concrete. Soft washing uses controlled low pressure and the right chemistry to lift organic growth, staining and atmospheric grime from painted surfaces, renders, cladding and roofing — restoring presentation without stripping what's underneath.",
    image: "svc-pressure.jpg",
    risks: [
      {
        t: "High pressure on soft surfaces",
        b: "Renders, painted finishes and older cladding fail under pressure washing — the cheap clean becomes a repaint or recladding quote.",
      },
      {
        t: "Organic growth keeps working",
        b: "Mould, algae and lichen aren't just staining — they hold moisture against the surface and degrade it season by season.",
      },
      {
        t: "Patchy DIY chemistry",
        b: "Wrong mix, wrong dwell, wrong runoff handling — bad soft washing streaks the building and burns the landscaping.",
      },
    ],
    scope: {
      heading: "Where soft washing is the right tool",
      items: [
        "Painted and rendered facades",
        "Cladding and composite panels",
        "Roofing — tiled, coated metal and membrane",
        "Awnings, canopies and shade structures",
        "Mould, algae and lichen treatment",
        "Runoff and landscaping protection planned per site",
      ],
      note: "We choose the method by the surface, not the schedule — where pressure is safe we pressure wash; where it isn't, we soft wash. One contractor, right tool.",
    },
    cycles: [
      ["Facades & renders", "Organic growth and staining", "Annual – 2-yearly"],
      ["Roofing", "Growth treatment and washdown", "1 – 3-yearly"],
      ["Awnings & structures", "Presentation cycle", "6-monthly – annual"],
    ],
    who: "Property managers, strata, building owners and venues with painted, rendered or clad exteriors that pressure washing would damage.",
    related: [
      ["Pressure washing", "/services/pressure-washing"],
      ["High access & facade cleaning", "/services/high-access-facade-cleaning"],
    ],
    cta: { label: "Request a commercial quote", to: "/contact?service=soft-wash" },
  },

  "heated-soak-tanks": {
    code: "SVC.11",
    title: "Heated soak tanks — the degreasing job, off the roster.",
    meta: {
      title: "Heated Soak Tank Supply & Rental Adelaide | STRIPTANK | Elmac",
      desc: "Heated soak tanks supplied, installed and serviced across Adelaide, SA & NT — pots, filters and racks stripped overnight in a non-caustic bath. Rental, purchase and rent-to-own, with chemical resupply and six-monthly service visits.",
    },
    lead: "Every kitchen has a job nobody wants: scrubbing baked-on carbon off pots, filters, burners and racks at close-down. It lands on whoever's newest, and how many hours a week it eats depends on the menu and the volume — counting them is the first thing we do in a walkthrough. A heated soak tank takes the job off the roster: loaded at close, stripped overnight in a heated non-caustic bath, rinsed and back on the line before prep. Elmac is the South Australian representative for STRIPTANK — tanks supplied, installed and serviced across SA and the NT, on the same cycle discipline as everything else we maintain.",
    image: "svc-filters.jpg",
    risks: [
      {
        t: "Labour lost at the pot sink",
        b: "Hand-scrubbing carbon is paid hours at close-down, every week, indefinitely. A tank does the same work overnight, unattended.",
      },
      {
        t: "Caustic chemistry burns people",
        b: "Traditional strip products are caustic — splash injuries at the pot sink are a standing WHS exposure. A non-caustic bath removes the hazard, not just the carbon.",
      },
      {
        t: "Scrubbing never quite wins",
        b: "Baked-on carbon builds faster than a scourer removes it. Equipment darkens year on year, heats unevenly and gets replaced early.",
      },
    ],
    scope: {
      heading: "What the arrangement covers",
      items: [
        "Tank supply and on-site installation with day-one training",
        "SWMS and SDS in the folder before the first soak",
        "Non-caustic, biodegradable chemistry — less scrubbing, fewer burns at the pot sink",
        "Monthly SAFESTRIP chemical resupply on a standing cycle",
        "Six-monthly service visits — checked, serviced, documented",
        "Three ways in: outright purchase, monthly rental, or rent-to-own over 12 months with chemicals included",
      ],
      note: "Rental from $210 a month ex GST · outright from $3,950 · rent-to-own over 12 months with chemicals included. Freight quoted on order confirmation.",
    },
    cycles: [
      ["Chemical resupply", "SAFESTRIP on a standing cycle", "Monthly"],
      ["Service visit", "Checked, serviced, documented", "6-monthly"],
      ["Rent-to-own term", "Chemicals included for the term", "12 months"],
    ],
    who: "Pubs, hotels and clubs, food courts, production kitchens and multi-site groups — any kitchen where degreasing is a standing roster line rather than an occasional job.",
    related: [
      ["Grease filter exchange", "/services/grease-filter-exchange"],
      ["Commercial kitchen deep cleaning", "/services/commercial-kitchen-deep-cleaning"],
      ["Scheduled maintenance programs", "/services/scheduled-maintenance-programs"],
    ],
    cta: { label: "Book a kitchen walkthrough", to: "/contact?service=tank" },
  },
};
