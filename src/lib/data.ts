import jaipur from "@/assets/dest-jaipur.jpg";
import varanasi from "@/assets/dest-varanasi.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import rohtas from "@/assets/dest-rohtas.jpg";
import kaimur from "@/assets/dest-kaimur.jpg";
import mundeshwari from "@/assets/dest-mundeshwari.jpg";
import devSurya from "@/assets/dest-dev-surya.jpg";
import valmiki from "@/assets/dest-valmiki.jpg";
import rajgir from "@/assets/dest-rajgir.jpg";
import nalanda from "@/assets/dest-nalanda.jpg";
import vaishali from "@/assets/dest-vaishali.jpg";
import bodhGaya from "@/assets/dest-bodh-gaya.jpg";
import vishnupad from "@/assets/dest-vishnupad.jpg";
import patna from "@/assets/dest-patna.jpg";
import pawapuri from "@/assets/dest-pawapuri.jpg";
import kesaria from "@/assets/dest-kesaria.jpg";

export type Destination = {
  slug: string;
  name: string;
  state: string;
  region: string;
  image: string;
  tagline: string;
  days: string;
  bestTime: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    image: jaipur,
    tagline: "The pink city of palaces, bazaars and royal courtyards.",
    days: "3–4 days",
    bestTime: "October – March",
    highlights: ["Hawa Mahal", "Amber Fort", "Jantar Mantar", "Johari Bazaar"],
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "North",
    image: varanasi,
    tagline: "Dawn prayers, river ghats and one of the world's oldest cities.",
    days: "2–3 days",
    bestTime: "November – February",
    highlights: ["Dashashwamedh Ghat", "Ganga Aarti", "Sarnath", "Silk weavers"],
  },
  {
    slug: "kerala",
    name: "Alleppey",
    state: "Kerala",
    region: "South",
    image: kerala,
    tagline: "Slow houseboats drifting through green backwater villages.",
    days: "4–5 days",
    bestTime: "September – March",
    highlights: ["Backwater cruise", "Kumarakom", "Kathakali evening", "Sadya feast"],
  },
  {
    slug: "ladakh",
    name: "Leh Ladakh",
    state: "Ladakh",
    region: "Himalaya",
    image: ladakh,
    tagline: "High desert passes, prayer flags and cliffside monasteries.",
    days: "6–8 days",
    bestTime: "May – September",
    highlights: ["Pangong Tso", "Thiksey Monastery", "Nubra Valley", "Khardung La"],
  },
];

export type Heritage = {
  title: string;
  era: string;
  place: string;
  blurb: string;
};

export const heritage: Heritage[] = [
  {
    title: "Temple Architecture",
    era: "6th – 13th century",
    place: "Khajuraho, Hampi, Belur",
    blurb:
      "Stone shikharas, carved mandapas and sculpted friezes that turned devotion into geometry.",
  },
  {
    title: "Mughal Gardens & Tombs",
    era: "16th – 18th century",
    place: "Agra, Delhi, Srinagar",
    blurb:
      "Charbagh symmetry, marble inlay and water channels designed as an earthly paradise.",
  },
  {
    title: "Classical Dance",
    era: "Living tradition",
    place: "Tamil Nadu, Odisha, Manipur",
    blurb:
      "Bharatanatyam, Odissi and Manipuri — storytelling through mudras, rhythm and eyes.",
  },
  {
    title: "Textile Crafts",
    era: "Living tradition",
    place: "Kutch, Varanasi, Bhuj",
    blurb:
      "Bandhani tie-dye, Banarasi brocade and block printing passed down through families.",
  },
  {
    title: "Festivals of Light & Colour",
    era: "Year-round",
    place: "Pan-India",
    blurb:
      "Diwali lamps, Holi pigments, Pongal harvests and Durga Puja pandals across the calendar.",
  },
  {
    title: "Regional Cuisines",
    era: "Living tradition",
    place: "Every state",
    blurb:
      "From Awadhi dum cooking to Chettinad spice blends — a different grammar in every region.",
  },
];

export const sampleChat = [
  {
    role: "user" as const,
    text: "I have 3 days in Jaipur. What should I not miss?",
  },
  {
    role: "guide" as const,
    text: "Start at Amber Fort early to beat the heat, then Panna Meena stepwell nearby. Day two: City Palace, Jantar Mantar and sunset at Nahargarh. Day three is for Johari Bazaar, block printing at Sanganer and a thali at a local mess.",
  },
  {
    role: "user" as const,
    text: "What's the story behind Hawa Mahal's windows?",
  },
  {
    role: "guide" as const,
    text: "Its 953 jharokhas let royal women watch street processions unseen, while the honeycomb screens pulled cool breezes through the palace — an 18th-century air-conditioning system in sandstone.",
  },
];

export const suggestedPrompts = [
  "Plan a 7-day South India temple trail",
  "Explain the Ganga Aarti ritual",
  "Best vegetarian street food in Delhi",
  "Monsoon-friendly places in September",
];
