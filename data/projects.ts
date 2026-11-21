export type Category = "Residential" | "Commercial" | "Renovation";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  location: string;
  year: number;
  duration: string;
  area: string;
  budget: string;
  summary: string;
  challenge: string;
  result: string;
  scope: string[];
  featured: boolean;
};

export const categories: Category[] = ["Residential", "Commercial", "Renovation"];

export const projects: Project[] = [
  {
    slug: "maple-ridge-house",
    title: "Maple Ridge House",
    category: "Residential",
    location: "Maple Ridge",
    year: 2025,
    duration: "11 months",
    area: "320 m²",
    budget: "$780k – $850k",
    summary: "A four-bedroom family home on a sloping lot, with a timber and brick exterior.",
    challenge:
      "The lot fell four meters from street to back garden. We designed a stepped foundation so the living areas open onto the garden without a retaining wall across the middle of the yard.",
    result:
      "Handed over two weeks early, with an airtightness result better than the design target and no structural defects at the 12-month check.",
    scope: ["Stepped slab and footings", "Timber frame with brick veneer", "Full interior finish", "Landscaping and drainage"],
    featured: true,
  },
  {
    slug: "harbor-street-townhomes",
    title: "Harbor Street Townhomes",
    category: "Residential",
    location: "Harbor District",
    year: 2024,
    duration: "14 months",
    area: "1,150 m² across 6 units",
    budget: "$2.4M – $2.7M",
    summary: "Six attached townhomes with shared party walls and private rooftop terraces.",
    challenge:
      "Six households would live behind shared walls, so sound transfer was the main design risk. We built double-stud party walls with a decoupled gap and tested each one before finishes went on.",
    result:
      "All six units passed acoustic testing on the first attempt and sold before handover.",
    scope: ["Site works and utilities", "Double-stud acoustic party walls", "Rooftop terraces", "Six full interior fit-outs"],
    featured: true,
  },
  {
    slug: "oak-lane-extension",
    title: "Oak Lane Extension",
    category: "Residential",
    location: "Oak Lane",
    year: 2025,
    duration: "5 months",
    area: "48 m²",
    budget: "$110k – $130k",
    summary: "A rear extension that turns a cramped kitchen into a single open family room.",
    challenge:
      "The existing back wall was load-bearing. We installed a steel beam in one day, with temporary props, so the family could stay in the house during the build.",
    result:
      "The kitchen, dining, and living areas became one room with a full-width glazed wall facing the garden.",
    scope: ["Structural steel opening", "Foundation and frame", "Glazed rear wall", "Kitchen installation"],
    featured: false,
  },
  {
    slug: "corner-bakery-fitout",
    title: "Corner Bakery Fit-out",
    category: "Commercial",
    location: "Old Market Street",
    year: 2025,
    duration: "3 months",
    area: "140 m²",
    budget: "$190k – $220k",
    summary: "A retail bakery and production kitchen fitted into a former hardware store.",
    challenge:
      "The owner needed to open before the holiday season. We ordered long-lead equipment in week one and worked in two phases so the kitchen was inspected while the front of house was still being finished.",
    result:
      "Opened on the planned date, with the health inspection passed on the first visit.",
    scope: ["Commercial kitchen services", "Extraction and ventilation", "Shopfront and counter joinery", "Flooring and lighting"],
    featured: true,
  },
  {
    slug: "riverside-medical-office",
    title: "Riverside Medical Office",
    category: "Commercial",
    location: "Riverside",
    year: 2024,
    duration: "9 months",
    area: "860 m²",
    budget: "$1.8M – $2.0M",
    summary: "A two-story clinic with eight consulting rooms and a small procedure suite.",
    challenge:
      "Clinical rooms need precise service routing for gases, power, and data. We coordinated every trade on a shared model so there were no clashes once walls closed.",
    result:
      "Passed all healthcare compliance inspections and welcomed its first patients on schedule.",
    scope: ["New two-story structure", "Medical gas and data routing", "Accessible entrances and lift", "Parking and site works"],
    featured: false,
  },
  {
    slug: "northgate-warehouse",
    title: "Northgate Distribution Warehouse",
    category: "Commercial",
    location: "Northgate Industrial Park",
    year: 2023,
    duration: "8 months",
    area: "3,200 m²",
    budget: "$3.5M – $3.9M",
    summary: "A steel-frame distribution warehouse with six loading docks and a mezzanine office.",
    challenge:
      "A wet winter threatened the slab pour schedule. We covered the pour areas and sequenced the steel erection around the weather so the roof was on before the worst of it.",
    result:
      "Delivered within one week of the original date and under the agreed budget.",
    scope: ["Heavy-duty floor slab", "Steel frame and cladding", "Six loading docks", "Mezzanine office"],
    featured: false,
  },
  {
    slug: "craftsman-kitchen-and-bath",
    title: "Craftsman Kitchen and Bath",
    category: "Renovation",
    location: "Elm Park",
    year: 2025,
    duration: "4 months",
    area: "65 m²",
    budget: "$95k – $120k",
    summary: "A full kitchen and bathroom renovation in a 1920s craftsman home.",
    challenge:
      "Behind the old plaster we found knob-and-tube wiring and a failed drain stack. We paused, re-priced the extra work with the owners in writing, and fixed it properly before closing the walls.",
    result:
      "Original woodwork was restored and reused, and the house now has modern wiring and plumbing throughout the work area.",
    scope: ["Rewiring and re-plumbing", "Custom cabinetry", "Tiled bathroom", "Period trim restoration"],
    featured: true,
  },
  {
    slug: "fulton-loft-conversion",
    title: "Fulton Loft Conversion",
    category: "Renovation",
    location: "Fulton Quarter",
    year: 2024,
    duration: "6 months",
    area: "210 m²",
    budget: "$340k – $390k",
    summary: "A disused textile floor converted into a two-bedroom live-work loft.",
    challenge:
      "The cast-iron columns and brick walls were the best features, but they had no insulation. We insulated from the inside and kept the structure exposed wherever the building code allowed.",
    result:
      "A warm, quiet apartment that keeps the original character of the building.",
    scope: ["Internal wall insulation", "New mezzanine bedroom", "Steel-framed windows", "Services and kitchen"],
    featured: false,
  },
  {
    slug: "cedar-heights-roof",
    title: "Cedar Heights Roof Replacement",
    category: "Renovation",
    location: "Cedar Heights",
    year: 2025,
    duration: "3 weeks",
    area: "180 m²",
    budget: "$38k – $46k",
    summary: "A complete tear-off and re-roof with new insulation and ventilation.",
    challenge:
      "Storm damage had let water into the attic for months. We dried and replaced the affected sheathing before laying the new roof, instead of covering it over.",
    result:
      "A dry attic, a ventilated roof deck, and a 25-year manufacturer warranty.",
    scope: ["Full tear-off", "Sheathing repair", "Insulation and ventilation", "New roof covering and flashing"],
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
