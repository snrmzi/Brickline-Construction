export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Dana Whitfield",
    role: "Homeowner, Maple Ridge",
    quote:
      "They told us the price on day one and it never moved. When they found a problem behind a wall, they showed us a photo and the options before doing anything.",
  },
  {
    name: "Marcus Oyelaran",
    role: "Owner, Corner Bakery",
    quote:
      "Opening day was fixed and they hit it. The site was clean every evening, and the inspector commented on the quality of the kitchen work.",
  },
  {
    name: "Priya Raman",
    role: "Practice manager, Riverside Medical",
    quote:
      "A complicated building with a lot of trades, and one person always answered the phone. Weekly updates meant we were never guessing.",
  },
];
