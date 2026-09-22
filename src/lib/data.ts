import jaipur from "@/assets/dest-jaipur.jpg";
import udaipur from "@/assets/dest-udaipur.jpg";
import jaisalmer from "@/assets/dest-jaisalmer.jpg";
import varanasi from "@/assets/dest-varanasi.jpg";
import agra from "@/assets/dest-agra.jpg";
import lucknow from "@/assets/dest-lucknow.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import munnar from "@/assets/dest-munnar.jpg";
import kochi from "@/assets/dest-kochi.jpg";
import madurai from "@/assets/dest-madurai.jpg";
import mahabalipuram from "@/assets/dest-mahabalipuram.jpg";
import ooty from "@/assets/dest-ooty.jpg";
import rajgir from "@/assets/dest-rajgir.jpg";
import nalanda from "@/assets/dest-nalanda.jpg";
import bodhGaya from "@/assets/dest-bodh-gaya.jpg";
import puri from "@/assets/dest-puri.jpg";
import konark from "@/assets/dest-konark.jpg";
import bhubaneswar from "@/assets/dest-bhubaneswar.jpg";
import chilika from "@/assets/dest-chilika.jpg";
import mumbai from "@/assets/dest-mumbai.jpg";
import ellora from "@/assets/dest-ellora.jpg";
import lonavala from "@/assets/dest-lonavala.jpg";
import kutch from "@/assets/dest-kutch.jpg";
import gir from "@/assets/dest-gir.jpg";
import dwarka from "@/assets/dest-dwarka.jpg";

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
  // ─── NORTH · Rajasthan ───
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
    slug: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    region: "North",
    image: udaipur,
    tagline: "Lake palaces, marble courtyards and sunsets over Pichola.",
    days: "2–3 days",
    bestTime: "October – March",
    highlights: ["City Palace", "Lake Pichola boat ride", "Jagdish Temple", "Saheliyon ki Bari"],
  },
  {
    slug: "jaisalmer",
    name: "Jaisalmer",
    state: "Rajasthan",
    region: "North",
    image: jaisalmer,
    tagline: "A living golden fort at the edge of the Thar desert.",
    days: "2–3 days",
    bestTime: "November – February",
    highlights: ["Sonar Quila", "Sam sand dunes", "Patwon ki Haveli", "Gadisar Lake"],
  },

  // ─── NORTH · Uttar Pradesh ───
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
    slug: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    region: "North",
    image: agra,
    tagline: "Mughal marble at its peak — the Taj at sunrise is worth the alarm.",
    days: "1–2 days",
    bestTime: "October – March",
    highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Fatehpur Sikri"],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    image: lucknow,
    tagline: "Nawabi manners, labyrinth palaces and the country's finest kebabs.",
    days: "2 days",
    bestTime: "October – March",
    highlights: ["Bara Imambara", "Bhool Bhulaiyaa", "Rumi Darwaza", "Chikankari bazaars"],
  },

  // ─── SOUTH · Kerala ───
  {
    slug: "kerala",
    name: "Alleppey",
    state: "Kerala",
    region: "South",
    image: kerala,
    tagline: "Slow houseboats drifting through green backwater villages.",
    days: "2–3 days",
    bestTime: "September – March",
    highlights: ["Backwater cruise", "Kumarakom", "Kathakali evening", "Sadya feast"],
  },
  {
    slug: "munnar",
    name: "Munnar",
    state: "Kerala",
    region: "South",
    image: munnar,
    tagline: "Tea hills wrapped in mist, 1,600 metres above the coast.",
    days: "2 days",
    bestTime: "September – March",
    highlights: ["Tea estates", "Eravikulam park", "Top Station view", "Mattupetty dam"],
  },
  {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    region: "South",
    image: kochi,
    tagline: "A port city layered with Chinese nets, Dutch lanes and spice godowns.",
    days: "2 days",
    bestTime: "October – March",
    highlights: ["Chinese fishing nets", "Jew Town & synagogue", "Mattancherry Palace", "Fort Kochi cafés"],
  },

  // ─── SOUTH · Tamil Nadu ───
  {
    slug: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    region: "South",
    image: madurai,
    tagline: "A temple city that has never gone quiet in 2,500 years.",
    days: "2 days",
    bestTime: "October – March",
    highlights: ["Meenakshi Temple", "Thousand Pillar Hall", "Night aarti", "Jigarthanda stalls"],
  },
  {
    slug: "mahabalipuram",
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    region: "South",
    image: mahabalipuram,
    tagline: "Pallava rock-cut temples standing where the surf meets the sand.",
    days: "1–2 days",
    bestTime: "November – February",
    highlights: ["Shore Temple", "Pancha Rathas", "Arjuna's Penance", "Krishna's Butter Ball"],
  },
  {
    slug: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    region: "South",
    image: ooty,
    tagline: "Nilgiri tea slopes, colonial bungalows and a toy train through the clouds.",
    days: "2–3 days",
    bestTime: "March – June",
    highlights: ["Nilgiri Mountain Railway", "Botanical Gardens", "Doddabetta peak", "Ooty Lake"],
  },

  // ─── EAST · Bihar ───
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


  // ─── EAST · Odisha ───
  {
    slug: "puri",
    name: "Puri",
    state: "Odisha",
    region: "East",
    image: puri,
    tagline: "Jagannath's seaside town, home of the thundering Rath Yatra chariots.",
    days: "2 days",
    bestTime: "October – March",
    highlights: ["Jagannath Temple", "Rath Yatra", "Puri beach sunrise", "Pipili applique market"],
  },
  {
    slug: "konark",
    name: "Konark",
    state: "Odisha",
    region: "East",
    image: konark,
    tagline: "A 13th-century sun temple carved as a chariot with twenty-four stone wheels.",
    days: "1 day",
    bestTime: "October – February",
    highlights: ["Sun Temple wheels", "Nata Mandir", "Chandrabhaga beach", "Konark museum"],
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    region: "East",
    image: bhubaneswar,
    tagline: "The temple city — hundreds of Kalinga sandstone spires in one capital.",
    days: "2 days",
    bestTime: "October – March",
    highlights: ["Lingaraj Temple", "Udayagiri caves", "Mukteshwar Temple", "Dhauli peace pagoda"],
  },
  {
    slug: "chilika",
    name: "Chilika Lake",
    state: "Odisha",
    region: "East",
    image: chilika,
    tagline: "Asia's largest brackish lagoon — dolphins by day, flamingos by winter.",
    days: "1–2 days",
    bestTime: "November – February",
    highlights: ["Irrawaddy dolphins", "Mangalajodi birding", "Satapada boats", "Kalijai island shrine"],
  },

  // ─── WEST · Maharashtra ───
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West",
    image: mumbai,
    tagline: "Art-deco seafronts, island caves and a city that genuinely never stops.",
    days: "2–3 days",
    bestTime: "November – February",
    highlights: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Colaba & Kala Ghoda"],
  },
  {
    slug: "ellora",
    name: "Ajanta & Ellora Caves",
    state: "Maharashtra",
    region: "West",
    image: ellora,
    tagline: "Temples and monasteries cut straight out of basalt cliffs over centuries.",
    days: "2 days",
    bestTime: "October – March",
    highlights: ["Kailasa Temple", "Ajanta murals", "Buddhist viharas", "Daulatabad fort"],
  },
  {
    slug: "lonavala",
    name: "Lonavala",
    state: "Maharashtra",
    region: "West",
    image: lonavala,
    tagline: "Monsoon-green Sahyadri ghats, waterfalls and hillfort ridgelines.",
    days: "1–2 days",
    bestTime: "June – September",
    highlights: ["Bhushi dam", "Tiger's Leap", "Karla caves", "Rajmachi fort trek"],
  },

  // ─── WEST · Gujarat ───
  {
    slug: "rann-of-kutch",
    name: "Rann of Kutch",
    state: "Gujarat",
    region: "West",
    image: kutch,
    tagline: "A white salt horizon that glows under the full moon of Rann Utsav.",
    days: "2–3 days",
    bestTime: "November – February",
    highlights: ["White Rann full moon", "Rann Utsav tents", "Bhuj craft villages", "Kalo Dungar viewpoint"],
  },
  {
    slug: "gir",
    name: "Gir National Park",
    state: "Gujarat",
    region: "West",
    image: gir,
    tagline: "The last wild home of the Asiatic lion, in dry teak forest.",
    days: "2 days",
    bestTime: "December – March",
    highlights: ["Lion safari", "Devalia interpretation zone", "Kamleshwar dam", "Somnath nearby"],
  },
  {
    slug: "dwarka",
    name: "Dwarka",
    state: "Gujarat",
    region: "West",
    image: dwarka,
    tagline: "Krishna's coastal kingdom, one of the four sacred Char Dham towns.",
    days: "1–2 days",
    bestTime: "October – March",
    highlights: ["Dwarkadhish Temple", "Bet Dwarka boat", "Rukmini Devi Temple", "Gomti Ghat aarti"],
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
