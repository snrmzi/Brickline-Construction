export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential construction",
    summary: "Custom homes and townhomes built around how you live.",
    details: [
      "Design coordination with your architect",
      "Foundations, framing, and full envelope",
      "Fixed-price contracts with a clear schedule",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial construction",
    summary: "Offices, retail spaces, and warehouses delivered on schedule.",
    details: [
      "Ground-up builds and tenant fit-outs",
      "Permits and inspections handled for you",
      "Work phased around your trading hours",
    ],
  },
  {
    slug: "renovation",
    title: "Renovation and remodeling",
    summary: "Kitchens, bathrooms, extensions, and full-home makeovers.",
    details: [
      "Structural changes and open-plan conversions",
      "Kitchens, bathrooms, and loft conversions",
      "Dust, noise, and access planned up front",
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    summary: "Repairs, replacements, and new roofs built to last.",
    details: [
      "Full tear-off and replacement",
      "Leak diagnosis and flashing repair",
      "Insulation and ventilation upgrades",
    ],
  },
  {
    slug: "interior-fitout",
    title: "Interior fit-out",
    summary: "Flooring, joinery, partitions, and finishes with clean detailing.",
    details: [
      "Custom joinery and built-in storage",
      "Partition walls and ceilings",
      "Flooring, paint, and final finishes",
    ],
  },
  {
    slug: "project-management",
    title: "Project management",
    summary: "One point of contact for budget, timeline, and subcontractors.",
    details: [
      "Weekly progress reports with photos",
      "Subcontractor scheduling and quality checks",
      "Budget tracking against the signed estimate",
    ],
  },
];
