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
  {
    slug: "rohtas",
    name: "Rohtasgarh Fort",
    state: "Bihar",
    region: "East",
    image: rohtas,
    tagline: "One of India's largest hill forts, perched 1,500 feet above the Son valley.",
    days: "1–2 days",
    bestTime: "October – March",
    highlights: ["Hathiya Pol gate", "Rohtasan & Aina Mahal", "Phulwari Pond", "Chaulasan Devi shrine"],
  },
  {
    slug: "kaimur",
    name: "Kaimur Hills",
    state: "Bihar",
    region: "East",
    image: kaimur,
    tagline: "Bihar's largest district — waterfalls, wildlife sanctuaries and windswept plateaus.",
    days: "1–2 days",
    bestTime: "October – February",
    highlights: ["Telhar Kund falls", "Karkatgarh falls", "Kaimur Sanctuary", "Gupta Dham caves"],
  },
  {
    slug: "mundeshwari",
    name: "Mundeshwari Temple",
    state: "Bihar",
    region: "East",
    image: mundeshwari,
    tagline: "India's oldest functioning temple — an octagonal shrine from around 625 AD.",
    days: "1 day",
    bestTime: "October – March",
    highlights: ["Octagonal sanctum", "Ramgarh hill views", "Ancient inscriptions", "Chaturmukhi Shivalinga"],
  },
  {
    slug: "dev-surya",
    name: "Dev Surya Temple",
    state: "Bihar",
    region: "East",
    image: devSurya,
    tagline: "A sun-temple town where Chhath's lamps meet the River Sone at dawn.",
    days: "1 day",
    bestTime: "October – March",
    highlights: ["Sun temple sanctum", "Chhath festival ghats", "Deo Fort", "Sone river sunrise"],
  },
  {
    slug: "valmiki-tiger-reserve",
    name: "Valmiki Tiger Reserve",
    state: "Bihar",
    region: "East",
    image: valmiki,
    tagline: "Bihar's only tiger reserve — Terai forest where tigers, elephants and gharials roam.",
    days: "2–3 days",
    bestTime: "November – March",
    highlights: ["Jeep & boat safaris", "Gandak river banks", "Valmikinagar dam", "Nepal border views"],
  },
  {
    slug: "rajgir",
    name: "Rajgir",
    state: "Bihar",
    region: "East",
    image: rajgir,
    tagline: "Forest-ringed valley of Magadha's ancient capital, hot springs and hilltop stupas.",
    days: "1–2 days",
    bestTime: "October – March",
    highlights: ["Vishwa Shanti Stupa", "Gridhakuta hill", "Hot springs", "Cyclopean walls"],
  },
  {
    slug: "nalanda",
    name: "Nalanda",
    state: "Bihar",
    region: "East",
    image: nalanda,
    tagline: "Ruins of the world's first residential university, drawing scholars for seven centuries.",
    days: "1 day",
    bestTime: "October – March",
    highlights: ["Great Library ruins", "Sariputta stupa", "Monk cells & courtyards", "Xuanzang Memorial"],
  },
  {
    slug: "vaishali",
    name: "Vaishali",
    state: "Bihar",
    region: "East",
    image: vaishali,
    tagline: "The world's first republic, where Buddha preached and Mahavira was born.",
    days: "1 day",
    bestTime: "October – March",
    highlights: ["Ashokan lion pillar", "Relic Stupa", "Bawan Pokhar temple", "Amrapali's lake"],
  },
  {
    slug: "bodh-gaya",
    name: "Bodh Gaya",
    state: "Bihar",
    region: "East",
    image: bodhGaya,
    tagline: "The holiest spot in Buddhism — the Bodhi tree beneath which the Buddha awakened.",
    days: "2 days",
    bestTime: "October – March",
    highlights: ["Mahabodhi Temple", "Bodhi Tree", "Great Buddha statue", "Monasteries of many nations"],
  },
  {
    slug: "vishnupad",
    name: "Vishnupad Temple",
    state: "Bihar",
    region: "East",
    image: vishnupad,
    tagline: "Gaya's riverside temple of Vishnu's footprint, hub of the pind daan ancestor rites.",
    days: "1–2 days",
    bestTime: "October – March",
    highlights: ["40cm footprint shrine", "Falgu river ghats", "Pretshila hill", "Bodh Gaya nearby"],
  },
  {
    slug: "patna",
    name: "Patna",
    state: "Bihar",
    region: "East",
    image: patna,
    tagline: "Ancient Pataliputra on the Ganga — 2,500 years of empire in one riverside city.",
    days: "1–2 days",
    bestTime: "October – March",
    highlights: ["Golghar granary", "Kumhrar Mauryan ruins", "Patna Sahib Gurudwara", "Bihar Museum"],
  },
  {
    slug: "pawapuri",
    name: "Pawapuri",
    state: "Bihar",
    region: "East",
    image: pawapuri,
    tagline: "The white marble Jal Mandir floating on a lotus lake where Mahavira attained nirvana.",
    days: "1 day",
    bestTime: "October – March",
    highlights: ["Jal Mandir lake temple", "Lotus-covered pond", "Jain pilgrimage circuit", "Rajgir nearby"],
  },
  {
    slug: "kesaria",
    name: "Kesaria Stupa",
    state: "Bihar",
    region: "East",
    image: kesaria,
    tagline: "The world's largest Buddhist stupa — a terraced colossus in Champaran's fields.",
    days: "1 day",
    bestTime: "October – March",
    highlights: ["Terraced stupa climb", "Buddha relic site", "Gandak floodplains", "Champaran history"],
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
