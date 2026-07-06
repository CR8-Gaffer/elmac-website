// Field Notes knowledge base — engineering handbook, not a blog.
// Architecture: CR8/Elmac_Field_Notes_Architecture.md. Sections appear on the
// site only once they have live entries (no empty shelves in public).
// Entry template: verdict → mechanism → what we see on real sites → takeaway.

export const SECTIONS = {
  1: { title: "Exhaust systems — anatomy & failure", blurb: "How kitchen exhaust systems actually work, load, and fail." },
  2: { title: "Compliance & documentation", blurb: "Standards, reports, certificates — and who asks for what." },
  3: { title: "Cycles & maintenance planning", blurb: "Frequencies, planners, and the economics of prevention." },
};

export const NOTES = [
  {
    slug: "why-grease-drips-from-canopy-joints",
    code: "FN 1.01",
    section: 1,
    q: "Why is grease dripping from my canopy joints?",
    verdict: "Because the system is telling you its interior is full.",
    body: [
      "Grease never enters an exhaust system as drips. It enters as vapour — atomised by heat, drawn off the cookline, and condensed as a film on every internal surface it passes: filter, canopy interior, plenum, duct. That film builds in layers, cycle after cycle of heating and cooling.",
      "Heat cycles then work the accumulated film along seams and joints. Every service period softens it; every cool-down lets it creep. Joints and folded seams are the low points where the migration collects — until gravity wins and the film becomes a drip on your cookline.",
      "The drip you can see is coming from load you can't. By the time staff notice drips, the interior surfaces upstream — plenum, duct, riser — are carrying more than the compliant cycle allows, because the visible end of the system is the last place grease reaches in quantity.",
    ],
    field:
      "The pattern we find on inspection is consistent: a venue books a clean because of drips, and the canopy turns out to be the least loaded part of the system. The duct behind it is where the real fire load has been quietly accumulating.",
    take: "Drips are a lag indicator. If you're seeing them, the cycle isn't due — it's overdue.",
    doctrine: 5,
    related: ["why-vertical-risers-load-differently", "how-kitchen-exhaust-fires-start", "why-cleaning-frequencies-differ"],
    offramp: ["Kitchen exhaust system cleaning", "/services/kitchen-exhaust-cleaning"],
    meta: "Grease dripping from canopy joints means the system interior is loaded — how grease vapour condenses, migrates along seams, and what the drip actually indicates about your cleaning cycle.",
  },
  {
    slug: "why-vertical-risers-load-differently",
    code: "FN 1.02",
    section: 1,
    q: "Why does vertical ductwork load up differently?",
    verdict: "Airflow slows and cools as it climbs — and cooling air drops its grease.",
    body: [
      "A kitchen exhaust run is a temperature gradient. Air leaves the canopy hot and fast, carrying grease as vapour and fine aerosol. Every metre of duct sheds a little velocity and a little heat — and the further the air travels, the more of its grease load condenses out onto the duct walls.",
      "Vertical risers sit at the cool end of that gradient. Grease that stayed airborne through the hot horizontal run condenses higher up where surfaces are cooler, so risers often carry heavier, harder, more varnished deposits than the duct sections closest to the cooking.",
      "Risers are also the hardest sections to access — long vertical runs, often buried in service shafts, frequently with no intermediate access panels. Which is exactly why cut-rate cleans skip them: the hardest work is also the least visible to the client.",
    ],
    field:
      "When we take over a system from a cheaper contractor, the riser is where we look first. Clean canopy, clean visible duct, and a riser carrying years of accumulation is the signature of a system that's been surface-serviced, not maintained.",
    take: "Ask any contractor how they access your riser. The length of the pause tells you everything.",
    doctrine: 21,
    related: ["why-access-panels-matter", "how-kitchen-exhaust-fires-start", "how-to-read-a-kes-report"],
    offramp: ["Kitchen exhaust system cleaning", "/services/kitchen-exhaust-cleaning"],
    meta: "Vertical exhaust risers accumulate heavier grease deposits than horizontal duct — the temperature-gradient mechanism, why risers get skipped by cheap contractors, and the one question that exposes it.",
  },
  {
    slug: "why-access-panels-matter",
    code: "FN 1.03",
    section: 1,
    q: "Why do access panels matter so much?",
    verdict: "Because no panel means no mechanical clean for that section — full stop.",
    body: [
      "A duct run without access can only be cleaned as far as arms and equipment reach from either end. Everything between stays loaded — invisibly, permanently. There is no chemical, spray or promise that substitutes for physically reaching a surface.",
      "This is why access is a compliance issue, not a convenience issue. A maintenance regime that can't reach half the system isn't a partial regime; it's a documented gap in the building's fire protection, sitting directly above the cooking.",
      "Installing panels is a one-off cost — usually modest, usually straightforward, occasionally awkward. Skipping the sections they would open is a permanent cost that compounds every cycle. The economics only run one way.",
    ],
    field:
      "Missing or inadequate access panels are the single most common defect we flag in reports. Our rule is fixed: if we can't reach a section, we document it, photograph it, and price the panel — silence is the only unacceptable answer.",
    take: "If your last report doesn't mention access, ask what was skipped to avoid mentioning it.",
    doctrine: 13,
    related: ["why-vertical-risers-load-differently", "how-to-read-a-kes-report", "how-kitchen-exhaust-fires-start"],
    offramp: ["Kitchen exhaust system cleaning", "/services/kitchen-exhaust-cleaning"],
    meta: "Duct access panels decide whether a kitchen exhaust system can actually be cleaned — why unreachable sections stay loaded forever, and why missing panels are the most common defect in our reports.",
  },
  {
    slug: "how-kitchen-exhaust-fires-start",
    code: "FN 1.04",
    cornerstone: true,
    section: 1,
    q: "How do kitchen exhaust fires actually start?",
    verdict: "Not with a bang — with a layer. Exhaust fires happen when the grease film inside the system becomes thick enough to sustain a flame that started somewhere else.",
    body: [
      "Every hour of cooking sends grease into the system as vapour. It condenses as a film — on filters first, then canopy interior, plenum, duct, riser, fan. Thin films are a maintenance item. Thick films are fuel: accumulated kitchen grease will sustain combustion once ignited, and a loaded duct holds an extraordinary amount of it, spread across metres of steel surface.",
      "The ignition sequence is depressingly consistent. A flare-up — wok work, solid fuel, a fat fire on the range — licks up into the canopy. If the filters are loaded, they light first; that's why the filter cycle is your first line of defence, not a housekeeping detail. Flame reaches the plenum, finds the film, and the duct becomes a horizontal chimney: fully enclosed, coated in fuel, with the exhaust fan actively feeding it oxygen and pulling the fire through the building.",
      "This is what makes exhaust fires disproportionately destructive. The fire travels inside a sealed steel tube, through ceiling voids and roof spaces, past every sprinkler head in the building — none of which can reach the interior of the duct. It emerges wherever the system does: at the fan, at the roof, in a service shaft. Fire crews can't attack what they can't reach either.",
      "Solid fuel changes everything again. Charcoal and wood-fired systems don't need a flare-up — they throw live embers into the airstream as a matter of routine operation. That's why solid-fuel frequencies are measured in weeks, not months, and why AS1851-2012-aligned maintenance treats these systems as their own risk class.",
      "The insurance industry learned all of this from claims. It's why servicing evidence is now a standard question at renewal, why some policies specify maximum cleaning intervals, and why the first document requested after a kitchen fire is the exhaust cleaning history.",
    ],
    field:
      "The most dangerous systems we inspect aren't the visibly filthy ones — they're the ones with clean filters and a loaded riser. Visible surfaces get wiped because they're seen; the duct interior gets skipped because it isn't. 'Surface wiped, system loaded' is the pattern behind most of the serious fire loads we document.",
    take: "A kitchen exhaust fire is never the first failure. It's the last one in a chain that started months earlier — and every link in that chain is visible at inspection.",
    doctrine: 1,
    related: ["why-grease-drips-from-canopy-joints", "why-vertical-risers-load-differently", "what-as1851-2012-asks-of-you"],
    offramp: ["Kitchen exhaust system cleaning", "/services/kitchen-exhaust-cleaning"],
    meta: "How kitchen exhaust fires actually start: the grease-film mechanism, the ignition chain from flare-up to roof, why ducts defeat sprinklers, solid-fuel risk, and what insurers now ask for.",
  },
  {
    slug: "what-as1851-2012-asks-of-you",
    code: "FN 2.01",
    section: 2,
    q: "What does AS1851-2012 actually ask of me?",
    verdict: "Evidence of routine servicing — that the system is maintained on an appropriate cycle, and that records exist to prove it.",
    body: [
      "AS1851-2012 is the Australian Standard for routine servicing of fire protection systems and equipment. Kitchen exhaust systems sit inside it for one reason: a loaded duct is a fire path, and the standard treats it accordingly.",
      "The practical obligation isn't a specific date on a calendar — it's a defensible regime. The system maintained on a cycle appropriate to its risk, by competent people, with records that show what was done, when, and what condition the system was in. The paperwork isn't the bureaucratic tail of the work; under this standard, it effectively is the work's public face.",
      "Councils, insurers and landlords all lean on AS1851-2012 because it gives them something checkable. An EHO can ask for your records. An insurer can make servicing evidence a renewal condition. A landlord can write it into the lease. Three different documents, one standard behind all of them.",
    ],
    field:
      "What we see across hundreds of sites: the venues that struggle at inspection are almost never the ones with a dirty system — they're the ones with no records. The clean without the certificate scores the same as no clean at all when someone official is asking.",
    take: "The standard runs on evidence. The certificate and report matter as much as the clean itself.",
    doctrine: 9,
    related: ["how-to-read-a-kes-report", "why-the-report-outlasts-the-clean", "why-cleaning-frequencies-differ"],
    offramp: ["Compliance & reporting", "/compliance-reporting"],
    meta: "What AS1851-2012 actually requires for kitchen exhaust systems: a defensible servicing regime with records — and why councils, insurers and landlords all lean on the same standard.",
  },
  {
    slug: "why-the-report-outlasts-the-clean",
    code: "FN 2.02",
    section: 2,
    q: "Why does the report outlast the clean?",
    verdict: "Because the clean lasts one cycle — and the questions last for years.",
    body: [
      "A clean is a physical state that starts degrading the day the kitchen fires up again. The report is a legal and commercial fact that doesn't degrade at all: dated, photographed proof of the system's condition and the maintenance regime behind it.",
      "Count the audiences that will read it after the grease is long gone: the insurer at renewal, and again after any incident. The council EHO at inspection. The landlord's agent at lease events. A buyer's due-diligence team if the business ever sells. Every one of them arrives months or years after the service — and the report is the only part of the service still present in the room.",
      "This is the difference between saying a system was maintained and proving it. Memory, invoices and goodwill all fail that test. Photographs with dates don't.",
    ],
    field:
      "We've watched a properly kept report file end an insurance dispute in one email. We've also watched its absence turn a routine claim into a six-month argument. Same fire risk, same venue type — the difference was a folder.",
    take: "Our standard: a report should be valuable enough that a facilities manager keeps it long after the job is complete.",
    doctrine: 10,
    related: ["how-to-read-a-kes-report", "what-as1851-2012-asks-of-you", "why-access-panels-matter"],
    offramp: ["Compliance & reporting", "/compliance-reporting"],
    meta: "Why the exhaust cleaning report matters longer than the clean itself — the audiences that read it years later, and what dated photographic evidence does that memory and invoices can't.",
  },
  {
    slug: "how-to-read-a-kes-report",
    code: "FN 2.03",
    cornerstone: true,
    section: 2,
    q: "How do I read a kitchen exhaust cleaning report?",
    verdict: "A good report answers three questions without being asked: what was done, what couldn't be done, and what happens next.",
    body: [
      "Start at the header. Site, service date, standard referenced (AS1851-2012 for exhaust systems), and who did the work. If the report can't identify itself, nothing below it can be relied on either.",
      "Then the evidence: before/after photo pairs, section by section — canopy, filters, plenum, ductwork, riser, fan, cowl. Check the pairs honestly: same angle, same section, believable transformation. One glamour shot of a polished canopy standing in for an entire system is not evidence; it's marketing wearing a hi-vis vest.",
      "Now the section most clients skip and the one we'd read first: limitations and access. Real systems have unreachable corners — sections without panels, fans that can't be safely opened, runs buried in shafts. A trustworthy report names them, photographs them, and recommends the fix. This is the report's honesty test, and it has a sharp edge: a report with no limitations section isn't describing a perfect system. It's describing an incomplete inspection.",
      "Defects and recommendations come next: damaged filters, missing panels, mechanical wear, grease migration — flagged with a proposed action, ideally priced separately so the flag can't be dismissed as upselling. Then the close: next service due, stated plainly, based on what was actually found rather than what the contract assumed.",
      "What to do with it: file it per system, not per invoice. Hand the file to your insurer at renewal before they ask. And compare cycle to cycle — if the 'before' photos are getting worse at the same interval, the interval is wrong, and the report just told you so.",
    ],
    field:
      "The reports we replace tend to share one feature: they contain no bad news. No limitations, no defects, no recommendations — just clean photos and a certificate. Thirty years of ceilings says systems like that don't exist. Reports like that are how loaded risers stay loaded.",
    take: "If your report has no limitations section, it isn't describing a perfect system — it's hiding an incomplete one.",
    doctrine: 12,
    related: ["why-the-report-outlasts-the-clean", "what-as1851-2012-asks-of-you", "why-access-panels-matter"],
    offramp: ["Compliance & reporting", "/compliance-reporting"],
    meta: "How to read a kitchen exhaust cleaning report like an auditor: the evidence to check, the limitations section that reveals honesty, defect flags, and the red flags of a report with no bad news.",
  },
  {
    slug: "questions-that-sort-contractors",
    code: "FN 2.04",
    section: 2,
    q: "Which questions sort exhaust cleaning contractors fastest?",
    verdict: "Not the quote — the questions where experience is the only way to have an answer.",
    body: [
      "Quotes for exhaust cleaning are hard to compare because the cheapest number usually describes the smallest job — you just can't see which sections it quietly excludes. Questions work better than numbers, because a contractor can shave a price in seconds but can't manufacture an answer that takes years to earn.",
      "Ask these seven, of anyone — including us. None of them are trick questions. Every one of them has a right answer that only exists if the work has actually been done, hundreds of times, on systems like yours.",
    ],
    list: [
      ["Can I see a sample report from a recent job?", "The format tells you everything in ten seconds. Photo pairs per section, limitations declared, defects flagged — or one glamour shot and a certificate."],
      ["How will you access the vertical riser?", "The classic. Risers are the hardest, most-skipped section of any system. The length of the pause is the answer."],
      ["What happens when you can't reach a section?", "Real systems have unreachable corners. 'We always reach everything' is the wrong answer — the right one involves the words document, photograph and recommend."],
      ["What's your licence number?", "Installation and mechanical work needs a licensed contractor. A real number checks out on the public register in under a minute."],
      ["Who will actually be on-site — and have they worked here before?", "Familiar crews see what strangers miss. High-churn contractors send whoever's available."],
      ["When is the system due again, and why that interval?", "Frequency reasoning separates a maintenance plan from a contract. 'It depends what you cook' is the start of a right answer."],
      ["What did the previous contractor miss?", "Asked after the first service. A good answer comes with photographs, not adjectives."],
    ],
    field:
      "We wrote this list knowing competitors' prospects will use it too. Good. We'd rather win work from clients who ask hard questions — they're the ones who keep score, and keeping score favours whoever is actually doing the work.",
    take: "Ask all seven. The contractor who welcomes the questions is the one who has the answers.",
    doctrine: 29,
    related: ["how-to-read-a-kes-report", "why-vertical-risers-load-differently", "why-cleaning-frequencies-differ"],
    offramp: ["Compliance & reporting", "/compliance-reporting"],
    meta: "Seven questions that sort kitchen exhaust cleaning contractors in minutes — sample reports, riser access, unreachable sections, licence numbers, crew continuity and frequency reasoning.",
  },
  {
    slug: "why-cleaning-frequencies-differ",
    code: "FN 3.01",
    section: 3,
    q: "Why do cleaning frequencies differ between kitchens?",
    verdict: "Because grease load is a property of the kitchen, not the contract.",
    body: [
      "Two kitchens with identical canopies can load their systems ten times apart. Solid fuel, charcoal and wok cooking throw grease and embers into the airstream in volumes a café toastie line never approaches. Hours of operation multiply everything; menu changes move the number; even filter discipline shifts how fast the duct behind them loads.",
      "That's why credible maintenance is set per system, after inspection — quarterly for heavy solid-fuel and wok operations, 6-monthly for most standard commercial kitchens, annual for genuinely light use. And it's why those numbers are starting points, not promises: the system's actual condition at each service either confirms the cycle or corrects it.",
      "Above the physics sit the obligations. Your insurer may specify a maximum interval. Your landlord may write one into the lease. Where requirements stack, our rule is fixed: schedule to the strictest applicable one.",
    ],
    field:
      "The cycle errors we correct almost always run the same direction — a heavy kitchen on a light contract, set years ago by whoever quoted first. The kitchen changed; the contract didn't. The system kept score in the meantime.",
    take: "A contractor who quotes you a frequency before seeing the kitchen is quoting a contract, not a maintenance plan.",
    doctrine: 4,
    related: ["how-kitchen-exhaust-fires-start", "why-grease-drips-from-canopy-joints", "what-as1851-2012-asks-of-you"],
    offramp: ["Scheduled maintenance programs", "/services/scheduled-maintenance-programs"],
    meta: "Why kitchen exhaust cleaning frequency depends on cuisine, hours and airflow — typical cycles by cooking load, how insurer and lease requirements stack, and the quote that reveals a bad contractor.",
  },
];

export const noteBySlug = (slug) => NOTES.find((n) => n.slug === slug);
