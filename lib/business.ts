/**
 * Verified public facts for Ware Dental Care.
 * Sources mapped in research/SOURCE_LOG.md — never invent.
 */

export const business = {
  name: "Ware Dental Care",
  slug: "ware-dental-care",
  tagline: "Family dental care for Ware and beyond.",
  sourceUrl: "http://www.waredentalcare.co.uk/",
  phoneDisplay: "01920 462208",
  phoneTel: "+441920462208",
  faxDisplay: "01920 464640",
  email: "info@waredental.co.uk",
  referralEmail: "waredentalcare@aol.com",
  address: {
    line1: "3 West Street",
    locality: "Ware",
    region: "Hertfordshire",
    postcode: "SG12 9EE",
    country: "GB",
  },
  addressDisplay: "3 West Street, Ware, Hertfordshire SG12 9EE",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ware+Dental+Care+3+West+Street+Ware+SG12+9EE",
  facebookUrl: "https://www.facebook.com/WareDentalCare",
  instagramUrl: "https://www.instagram.com/waredentalcareuk",
  cqcLocationId: "1-189750469",
  cqcUrl: "https://www.cqc.org.uk/location/1-189750469",
  cqcReportPublished: "25 November 2024",
  registeredManagers: ["Dr Divyang Bhatt", "Mrs Cristina Sargu"],
  primaryCta: "Call to make an appointment",
  secondaryCta: "Email the practice",
  verifiedReviews: null as null,
  serviceArea: "Ware and surrounding Hertfordshire (stated as Ware and beyond).",
  locationNote:
    "Located next to the high street entrance to Tesco and opposite Subway. Close to the A10 and M25, 0.4 miles from Ware train station and 1.9 miles from Hertford East train station.",
  parkingNote:
    "No dedicated on-site parking or direct vehicle access to the front door — the entrance is in the pedestrian alleyway behind Ware High Street. Nearby options include Blue Badge bays on the High Street, Tesco Superstore parking (up to 3 hours free for customers), and pay & display parks such as Kibes Lane and Amwell End.",
  accessibilityNote:
    "Drivers carrying patients with limited mobility are advised to use High Street or Tesco parking for drop-offs before walking around to the entrance.",
  establishedClaim: "Family practice established for at least 60 years.",
  activePatientsClaim: "Around 25,000 active patients (as stated on the practice website).",
  logoSourceUrl: "http://www.waredentalcare.co.uk/assets/img/ware_dental_logo-2026.png",
} as const;

export const hours = [
  { day: "Monday", time: "08:00 – 17:00" },
  { day: "Tuesday", time: "08:30 – 17:30" },
  { day: "Wednesday", time: "08:30 – 17:30" },
  { day: "Thursday", time: "08:00 – 17:00" },
  { day: "Friday", time: "08:30 – 17:00" },
  { day: "Saturday", time: "09:00 – 15:00" },
] as const;

export const cqcSummary = {
  title: "CQC regulations met",
  detail:
    "Assessment published 25 November 2024. Regulations met across Safe, Effective, Caring, Responsive and Well-led.",
  domains: ["Safe", "Effective", "Caring", "Responsive", "Well-led"] as const,
  sourceUrl: "https://www.cqc.org.uk/location/1-189750469",
} as const;

export const brand = {
  navy: "#002030",
  teal: "#00A896",
  tealBright: "#30C0B0",
  cream: "#F3F8F7",
  mist: "#E6F2F0",
  ink: "#0A1A22",
  paper: "#FFFFFF",
  star: "#F4B400",
  lslBg: "#0B1220",
  lslLime: "#EAFF38",
} as const;

export type CareService = {
  id: string;
  title: string;
  summary: string;
  href: string;
  points: string[];
};

export const careServices: CareService[] = [
  {
    id: "general",
    title: "General dentistry",
    summary:
      "Routine and complex family dental care, available on the NHS and privately, with a focus on prevention and early intervention.",
    href: "/services/general",
    points: [
      "NHS and private options",
      "Written treatment plans after consultation",
      "Care tailored across life stages",
    ],
  },
  {
    id: "cosmetic",
    title: "Cosmetic dentistry",
    summary:
      "Treatments to straighten, lighten, reshape and repair teeth — discussed after assessment with a written plan.",
    href: "/services/cosmetic",
    points: ["Straighten, lighten, reshape", "Repair options", "Private advanced care"],
  },
  {
    id: "specialist",
    title: "Specialist dentistry",
    summary:
      "Specialist dental surgeons and dentists with special interests for complex care, with direct access where appropriate.",
    href: "/services/specialist",
    points: [
      "Implants and oral surgery",
      "Endodontics and periodontics",
      "Full mouth rehabilitation",
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    summary:
      "Options to improve bite, alignment and appearance, including metal or ceramic braces and Invisalign as listed on the practice fee guide.",
    href: "/services/orthodontics",
    points: ["Braces and clear aligners", "Bite and alignment", "Oral function"],
  },
  {
    id: "hygienist",
    title: "Hygienist",
    summary:
      "Professional cleaning, stain removal and gum care, with advice on home care. Direct access to the hygienist is available.",
    href: "/services/hygienist",
    points: ["Scale and polish", "Gum health advice", "Direct access available"],
  },
] as const;

export const hubPillars = [
  {
    title: "Prevention first",
    detail:
      "Early intervention, patient education and minimally invasive techniques are encouraged with all clinicians.",
  },
  {
    title: "Multi-disciplinary team",
    detail:
      "General dentists, specialists and support staff work together for total patient care for all the family.",
  },
  {
    title: "Written plans",
    detail:
      "After your initial consultation the practice aims to provide a comprehensive written treatment plan.",
  },
] as const;

export const specialistFocus = [
  {
    title: "Implants",
    detail: "Complex restorative pathways including implant dentistry listed under specialist care.",
  },
  {
    title: "Root canal",
    detail: "Endodontic care available via specialist clinicians registered with the GDC.",
  },
  {
    title: "Gum disease",
    detail: "Periodontal assessment and therapy with specialist input where needed.",
  },
  {
    title: "Oral surgery",
    detail: "Consultant and specialist oral surgeons for extractions and surgical care.",
  },
] as const;

export const parkingOptions = [
  {
    title: "Blue Badge / High Street",
    detail:
      "On-street accessible parking bays on Ware High Street (outside Coffee Lab), then a short walk through the alleyway.",
  },
  {
    title: "Tesco Superstore",
    detail:
      "Next to the practice — up to 3 hours of free parking for Tesco customers (as published on the contact page).",
  },
  {
    title: "Pay & display",
    detail:
      "Public short-stay and long-stay parks such as Kibes Lane and Amwell End are within a short walk. Charges apply.",
  },
] as const;

/** Published patient quotes from the practice testimonials page — not platform ratings. */
export const patientQuotes = [
  {
    quote:
      "My son and I have been going to this surgery for over 10 years and the service has always been excellent… The visiting surgeon made me feel at ease straight away.",
    attribution: "Feedback on tooth removal",
  },
  {
    quote:
      "Today I knocked a tooth out and took it straight to the dentist… after only a 10 minute wait a dentist called me in… The treatment I received was immediate and I was so very grateful.",
    attribution: "Emergency treatment",
  },
  {
    quote:
      "My family have attended this Practice for over 30 years! Seeing the same dentist for the past 25 years. Friendly, helpful and very professional.",
    attribution: "Long-standing patient",
  },
  {
    quote:
      "This is a genuine NHS practice… Big thanks to Ware Dental Centre for all they do. I am so pleased that I have already told all my family and friends.",
    attribution: "NHS course of treatment",
  },
  {
    quote:
      "The filling was then carried out within the hour, pain-free… Many thanks to Dr and assistant for providing such a friendly, kind, professional and stress-free service!",
    attribution: "Filling appointment",
  },
  {
    quote:
      "My family and I have attended this surgery for dental care for over 20 years and we are all extremely happy with the care we have received.",
    attribution: "Family patient",
  },
] as const;

export const teamHighlights = [
  { name: "Cristina Sargu", role: "Practice Manager (also listed as CQC registered manager)" },
  { name: "Mrs Samantha Hamer", role: "Registered Specialist in Endodontics" },
  { name: "Dr Anastasiya Orishko", role: "Registered Specialist in Periodontics" },
  { name: "Mr Alaa Al Daadaa", role: "Specialist Oral Surgeon" },
  { name: "Mr Tamer Theodossy", role: "Consultant Oral Surgeon" },
  { name: "Omar Alimazighi", role: "Implantologist" },
] as const;

export const nhsBands = [
  {
    band: "Emergency",
    price: "£27.90",
    detail: "Emergency care in a primary care NHS dental practice such as pain relief or a temporary filling.",
  },
  {
    band: "Band 1",
    price: "£27.90",
    detail:
      "Examination, diagnosis (including X-rays), advice, scale and polish if clinically needed, and preventative care where appropriate.",
  },
  {
    band: "Band 2",
    price: "£76.60",
    detail: "Everything in Band 1 plus further treatment such as fillings, root canal work or extractions (not Band 3 items).",
  },
  {
    band: "Band 3",
    price: "£332.10",
    detail: "Everything in Bands 1 and 2 plus crowns, dentures, bridges and other laboratory work.",
  },
] as const;

export const privateFeeSamples = [
  { item: "New patient assessment", price: "£45 (excl. X-rays)" },
  { item: "Hygiene session", price: "£75" },
  { item: "Airflow", price: "£110" },
  { item: "Emergency appointment", price: "£85" },
  { item: "Composite filling", price: "from £150" },
  { item: "Invisalign", price: "from £3,500 (single arch) / £6,000 (both)" },
] as const;

export const nav = [
  { href: "/services", label: "Care hub" },
  { href: "/fees", label: "Fees" },
  { href: "/team", label: "Team" },
  { href: "/find-us", label: "Find us" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Stories" },
  { href: "/contact", label: "Contact" },
] as const;

export const conceptHost = "https://ware-dental-care.localsiteslab.com";
