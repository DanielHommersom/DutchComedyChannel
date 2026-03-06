export type PastShow = {
  title: string;
  date: string; // ISO 8601
  venue: string;
  city: string;
};

export type Comedian = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  genre: string[];
  affiliatePath: string;
  photo?: string; // URL — replace with real photo
  instagramPostIds?: string[]; // Replace with real Instagram post IDs from your page
  pastShows?: PastShow[];
};

export type Show = {
  title: string;
  slug: string;
  comedianSlug: string;
  date: string; // ISO 8601
  venue: string;
  city: string;
  affiliatePath: string;
};

export const comedians: Comedian[] = [
  {
    name: "Jochem Myjer",
    slug: "jochem-myjer",
    tagline: "De meest geliefde cabaretier van Nederland",
    description:
      "Jochem Myjer is een van de populairste cabaretiers van Nederland. Met uitverkochte arena-shows en miljoenen fans combineert hij schitterend slapstick met hartveroverende verhalen over het leven.",
    genre: ["Cabaret", "Familie"],
    affiliatePath: "/jochem-myjer",
    photo: "/artists/jochem_myjer.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Jochem Myjer – De Magie van het Bestaan", date: "2024-03-15", venue: "Ziggo Dome", city: "Amsterdam" },
      { title: "Jochem Myjer – De Magie van het Bestaan", date: "2024-04-20", venue: "Rotterdam Ahoy", city: "Rotterdam" },
      { title: "Jochem Myjer – Toverij", date: "2022-11-05", venue: "GelreDome", city: "Arnhem" },
    ],
  },
  {
    name: "Claudia de Breij",
    slug: "claudia-de-breij",
    tagline: "Veelzijdige cabaretière met een warm hart",
    description:
      "Claudia de Breij is cabaretière, presentatrice en zangeres in één. Haar shows zijn warm, grappig en ontroerend tegelijk — een unieke combinatie die haar tot een publiekslieveling maakt.",
    genre: ["Cabaret", "Muziek"],
    affiliatePath: "/claudia-de-breij",
    photo: "/artists/claudia_de_breij.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Claudia de Breij – Alles Komt Goed", date: "2024-05-09", venue: "DeLaMar Theater", city: "Amsterdam" },
      { title: "Claudia de Breij – Alles Komt Goed", date: "2024-06-22", venue: "Nationale Opera & Ballet", city: "Den Haag" },
      { title: "Claudia de Breij – Kleur Bekennen", date: "2022-03-11", venue: "Stadsschouwburg", city: "Utrecht" },
    ],
  },
  {
    name: "Najib Amhali",
    slug: "najib-amhali",
    tagline: "Stand-up met een eigen kijk op Nederland",
    description:
      "Najib Amhali is een bekroonde stand-up comedian die het multiculturele Nederland als geen ander weet te vatten. Zijn shows zijn raak, eerlijk en ontzettend grappig.",
    genre: ["Stand-up", "Maatschappij"],
    affiliatePath: "/najib-amhali",
    photo: "/artists/najib-amhali.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Najib Amhali – Blank", date: "2023-11-03", venue: "AFAS Live", city: "Amsterdam" },
      { title: "Najib Amhali – Welkom Terug", date: "2022-06-17", venue: "Luxor Theater", city: "Rotterdam" },
    ],
  },
  {
    name: "Brigitte Kaandorp",
    slug: "brigitte-kaandorp",
    tagline: "Observationele humor over het dagelijks leven",
    description:
      "Brigitte Kaandorp is een iconische cabaretière die al meer dan 30 jaar het publiek vermaakt met haar scherpe observaties over alledaagse situaties. Herkenbaar, hilarisch en tijdloos.",
    genre: ["Cabaret", "Observationeel"],
    affiliatePath: "/brigitte-kaandorp",
    photo: "/artists/brigitte_kaandorp.png",
    instagramPostIds: [],
    pastShows: [
      { title: "Brigitte Kaandorp – Niet Normaal", date: "2024-02-28", venue: "Stadsschouwburg", city: "Amsterdam" },
      { title: "Brigitte Kaandorp – Typisch", date: "2022-10-14", venue: "Theater aan het Vrijthof", city: "Maastricht" },
    ],
  },
  {
    name: "Hans Teeuwen",
    slug: "hans-teeuwen",
    tagline: "Absurdistisch, grensverleggend en onvergetelijk",
    description:
      "Hans Teeuwen staat bekend als een van de meest originele cabaretiers ter wereld. Zijn shows zijn absurdistisch, provocerend en altijd verrassend — niets is zoals je verwacht.",
    genre: ["Cabaret", "Absurdisme"],
    affiliatePath: "/hans-teeuwen",
    photo: "/artists/hans_teeuwen.jpeg",
    instagramPostIds: [],
    pastShows: [
      { title: "Hans Teeuwen – Dat Dan Weer Wel", date: "2023-09-08", venue: "Paradiso", city: "Amsterdam" },
      { title: "Hans Teeuwen – Trui", date: "2021-11-20", venue: "013", city: "Tilburg" },
    ],
  },
  {
    name: "Guido Weijers",
    slug: "guido-weijers",
    tagline: "De nieuwe stem van de Nederlandse stand-up",
    description:
      "Guido Weijers is een van de snelst stijgende sterren in de Nederlandse comedy. Met zijn directe stijl en scherpe observaties verovert hij zalen door heel Nederland.",
    genre: ["Stand-up"],
    affiliatePath: "/guido-weijers",
    photo: "/artists/guido_weijers.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Guido Weijers – Te Eerlijk", date: "2024-04-05", venue: "Luxor Theater", city: "Rotterdam" },
      { title: "Guido Weijers – Zeg Het Maar", date: "2023-03-25", venue: "Melkweg", city: "Amsterdam" },
    ],
  },
  {
    name: "Rayen Panday",
    slug: "rayen-panday",
    tagline: "Verfrissend eerlijk en messcherp",
    description:
      "Rayen Panday brengt verfrissende eerlijkheid op het podium. Zijn humoristische kijk op identiteit, cultuur en het moderne leven maakt hem tot een van de meest gevolgde comedians van dit moment.",
    genre: ["Stand-up", "Maatschappij"],
    affiliatePath: "/rayen-panday",
    photo: "/artists/rayen_panday.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Rayen Panday – Raww", date: "2024-03-01", venue: "Muziekgebouw", city: "Eindhoven" },
      { title: "Rayen Panday – Origin", date: "2023-01-14", venue: "Paard van Troje", city: "Den Haag" },
    ],
  },
  {
    name: "Jandino Asporaat",
    slug: "jandino-asporaat",
    tagline: "Energieke stand-up met een uniek Curaçaos-Nederlands perspectief",
    description:
      "Jandino Asporaat is een van de meest populaire stand-up comedians van Nederland. Met zijn aanstekelijke energie, scherpe observaties en unieke achtergrond weet hij zalen door het hele land te laten schateren.",
    genre: ["Stand-up", "Maatschappij"],
    affiliatePath: "/jandino-asporaat",
    photo: "/artists/jandino_asporaat.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Jandino Asporaat – Niks Te Lachen", date: "2024-02-10", venue: "AFAS Live", city: "Amsterdam" },
      { title: "Jandino Asporaat – Niks Te Lachen", date: "2023-11-18", venue: "Ahoy", city: "Rotterdam" },
    ],
  },
  {
    name: "Daniel Arends",
    slug: "daniel-arends",
    tagline: "Flamboyant, grappig en ongeremd entertainment",
    description:
      "Daniel Arends is een veelzijdig entertainer die met zijn kleurrijke shows en aanstekelijke humor steevast uitverkochte theaters trekt. Van intiem cabaret tot grote zaal — Daniel levert altijd een onvergetelijke avond.",
    genre: ["Cabaret", "Entertainment"],
    affiliatePath: "/daniel-arends",
    photo: "/artists/daniel_arends.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Daniel Arends – High Class Bitch", date: "2024-10-05", venue: "Theater De Lievekamp", city: "Oss" },
      { title: "Daniel Arends – Had ik maar nooit zo aardig gedaan", date: "2024-03-22", venue: "Stadsschouwburg", city: "Amsterdam" },
    ],
  },
  {
    name: "Tineke Schouten",
    slug: "tineke-schouten",
    tagline: "De koningin van de Nederlandse cabaret",
    description:
      "Tineke Schouten is al decennialang een begrip in het Nederlandse cabaret. Met haar scherpe imitaties, herkenbare personages en onnavolgbare stijl blijft ze het publiek keer op keer verrassen.",
    genre: ["Cabaret", "Imitatie"],
    affiliatePath: "/tineke-schouten",
    photo: "/artists/tineke_schouten.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Tineke Schouten – Femme Vitaal", date: "2024-11-09", venue: "Theater Markant Maashorst", city: "Uden" },
      { title: "Tineke Schouten – Goud", date: "2022-04-14", venue: "Carré", city: "Amsterdam" },
    ],
  },
  {
    name: "Roue Verveer",
    slug: "roue-verveer",
    tagline: "Directe humor met een maatschappelijk hart",
    description:
      "Roue Verveer staat bekend om zijn no-nonsense stand-up waarbij hij maatschappelijke thema's met humor én ernst bespreekt. Zijn shows zijn eerlijk, scherp en raken je waar het telt.",
    genre: ["Stand-up", "Maatschappij"],
    affiliatePath: "/roue-verveer",
    photo: "/artists/roue_verveer.png",
    instagramPostIds: [],
    pastShows: [
      { title: "Roue Verveer – Op eigen risico", date: "2024-09-21", venue: "Stadsschouwburg", city: "Groningen" },
      { title: "Roue Verveer – Onbewapend", date: "2022-05-07", venue: "Theater Rotterdam", city: "Rotterdam" },
    ],
  },
  {
    name: "Veldhuis & Kemper",
    slug: "veldhuis-en-kemper",
    tagline: "Het beste cabaretduo van Nederland",
    description:
      "Veldhuis & Kemper zijn een begrip in het Nederlandse cabaret. Met hun muzikale grappen, scherpe teksten en perfecte samenspel bezorgen René Veldhuis en Remco Kemper het publiek avond na avond een uitverkochte, hilarische show.",
    genre: ["Cabaret", "Muziek"],
    affiliatePath: "/veldhuis-en-kemper",
    photo: "/artists/verlhuids_kemper.png",
    instagramPostIds: [],
    pastShows: [
      { title: "Veldhuis & Kemper – Kunnen het niet laten", date: "2024-12-07", venue: "Carré", city: "Amsterdam" },
      { title: "Veldhuis & Kemper – Helemaal Goed", date: "2022-11-19", venue: "TivoliVredenburg", city: "Utrecht" },
    ],
  },
  {
    name: "Bert Visscher",
    slug: "bert-visscher",
    tagline: "Meesterverteller met hart voor het kleine verhaal",
    description:
      "Bert Visscher is een unieke stem in het Nederlandse cabaret. Als meesterverteller weet hij met poëtische precisie en warme humor het publiek te raken. Zijn intieme shows zijn een ode aan het leven.",
    genre: ["Cabaret", "Kleinkunst"],
    affiliatePath: "/bert-visscher",
    photo: "/artists/bert_visscher.jpg",
    instagramPostIds: [],
    pastShows: [
      { title: "Bert Visscher – 65, dat zou je niet zeggen", date: "2024-10-17", venue: "Deventer Schouwburg", city: "Deventer" },
      { title: "Bert Visscher – Het Leven is een Feestje", date: "2022-02-03", venue: "Parktheater", city: "Eindhoven" },
    ],
  },
  {
    name: "Fred van Leer",
    slug: "fred-van-leer",
    tagline: "Ongeremd, kleurrijk en altijd zichzelf",
    description:
      "Fred van Leer is een flamboyante entertainer die het publiek meeneemt in zijn wereld van humor, zelfreflectie en onvervalste eerlijkheid. Zijn shows zijn een explosie van energie, lach en emotie.",
    genre: ["Cabaret", "Entertainment"],
    affiliatePath: "/fred-van-leer",
    photo: "/artists/fred_van_leer.png",
    instagramPostIds: [],
    pastShows: [
      { title: "Fred van Leer – Ik weet het eigenlijk niet", date: "2024-09-13", venue: "Theater Rotterdam", city: "Rotterdam" },
      { title: "Fred van Leer – Zo Ben Ik Nu Eenmaal", date: "2022-06-25", venue: "Carré", city: "Amsterdam" },
    ],
  },
];

export const shows: Show[] = [
  {
    title: "Jochem Myjer – Alles Goed?",
    slug: "jochem-myjer-alles-goed",
    comedianSlug: "jochem-myjer",
    date: "2026-04-12T20:00:00",
    venue: "Ziggo Dome",
    city: "Amsterdam",
    affiliatePath: "/jochem-myjer",
  },
  {
    title: "Jochem Myjer – Alles Goed?",
    slug: "jochem-myjer-alles-goed-rotterdam",
    comedianSlug: "jochem-myjer",
    date: "2026-05-03T20:00:00",
    venue: "Rotterdam Ahoy",
    city: "Rotterdam",
    affiliatePath: "/jochem-myjer",
  },
  {
    title: "Youp van 't Hek – Eindspel",
    slug: "youp-van-t-hek-eindspel",
    comedianSlug: "youp-van-t-hek",
    date: "2026-04-18T20:15:00",
    venue: "Carré",
    city: "Amsterdam",
    affiliatePath: "/youp-van-t-hek",
  },
  {
    title: "Claudia de Breij – Hartje",
    slug: "claudia-de-breij-hartje",
    comedianSlug: "claudia-de-breij",
    date: "2026-04-25T20:00:00",
    venue: "DeLaMar Theater",
    city: "Amsterdam",
    affiliatePath: "/claudia-de-breij",
  },
  {
    title: "Claudia de Breij – Hartje",
    slug: "claudia-de-breij-hartje-den-haag",
    comedianSlug: "claudia-de-breij",
    date: "2026-06-06T20:00:00",
    venue: "Nationale Opera & Ballet",
    city: "Den Haag",
    affiliatePath: "/claudia-de-breij",
  },
  {
    title: "Najib Amhali – Reset",
    slug: "najib-amhali-reset",
    comedianSlug: "najib-amhali",
    date: "2026-05-10T20:00:00",
    venue: "AFAS Live",
    city: "Amsterdam",
    affiliatePath: "/najib-amhali",
  },
  {
    title: "Brigitte Kaandorp – Gewoon Thuis",
    slug: "brigitte-kaandorp-gewoon-thuis",
    comedianSlug: "brigitte-kaandorp",
    date: "2026-05-22T20:00:00",
    venue: "Stadsschouwburg",
    city: "Utrecht",
    affiliatePath: "/brigitte-kaandorp",
  },
  {
    title: "Guido Weijers – Onbevangen",
    slug: "guido-weijers-onbevangen",
    comedianSlug: "guido-weijers",
    date: "2026-04-30T20:00:00",
    venue: "Luxor Theater",
    city: "Rotterdam",
    affiliatePath: "/guido-weijers",
  },
  {
    title: "Rayen Panday – Echt Waar",
    slug: "rayen-panday-echt-waar",
    comedianSlug: "rayen-panday",
    date: "2026-05-16T20:00:00",
    venue: "Muziekgebouw",
    city: "Eindhoven",
    affiliatePath: "/rayen-panday",
  },
  // Hans Teeuwen – De Laffe Verlosser (real data from TopTicketShop)
  {
    title: "Hans Teeuwen – De Laffe Verlosser",
    slug: "hans-teeuwen-de-laffe-verlosser-antwerpen",
    comedianSlug: "hans-teeuwen",
    date: "2026-06-11T20:00:00",
    venue: "Stadsschouwburg",
    city: "Antwerpen",
    affiliatePath: "/hans-teeuwen",
  },
  {
    title: "Hans Teeuwen – De Laffe Verlosser",
    slug: "hans-teeuwen-de-laffe-verlosser-den-haag",
    comedianSlug: "hans-teeuwen",
    date: "2026-06-16T20:00:00",
    venue: "AFAS Circustheater",
    city: "Den Haag",
    affiliatePath: "/hans-teeuwen",
  },
  {
    title: "Hans Teeuwen – De Laffe Verlosser",
    slug: "hans-teeuwen-de-laffe-verlosser-amsterdam-1",
    comedianSlug: "hans-teeuwen",
    date: "2026-06-26T20:00:00",
    venue: "AFAS Live",
    city: "Amsterdam",
    affiliatePath: "/hans-teeuwen",
  },
  {
    title: "Hans Teeuwen – De Laffe Verlosser",
    slug: "hans-teeuwen-de-laffe-verlosser-amsterdam-2",
    comedianSlug: "hans-teeuwen",
    date: "2026-06-27T20:00:00",
    venue: "AFAS Live",
    city: "Amsterdam",
    affiliatePath: "/hans-teeuwen",
  },
  // Jandino Asporaat (real data from TopTicketShop)
  {
    title: "Jandino Asporaat – Omdat je lult",
    slug: "jandino-asporaat-omdat-je-lult-hengelo",
    comedianSlug: "jandino-asporaat",
    date: "2026-03-16T20:00:00",
    venue: "Schouwburg Hengelo",
    city: "Hengelo",
    affiliatePath: "/jandino-asporaat",
  },
  {
    title: "Jandino Asporaat – Omdat je lult",
    slug: "jandino-asporaat-omdat-je-lult-sneek",
    comedianSlug: "jandino-asporaat",
    date: "2026-03-19T20:15:00",
    venue: "Theater Sneek",
    city: "Sneek",
    affiliatePath: "/jandino-asporaat",
  },
  {
    title: "Jandino Asporaat – Omdat je lult",
    slug: "jandino-asporaat-omdat-je-lult-winschoten",
    comedianSlug: "jandino-asporaat",
    date: "2026-03-25T20:15:00",
    venue: "Cultuurhuis De Klinker",
    city: "Winschoten",
    affiliatePath: "/jandino-asporaat",
  },
  {
    title: "Jandino Asporaat – XL Show",
    slug: "jandino-asporaat-xl-show-rotterdam",
    comedianSlug: "jandino-asporaat",
    date: "2026-12-04T20:00:00",
    venue: "Ahoy RTM Stage",
    city: "Rotterdam",
    affiliatePath: "/jandino-asporaat",
  },
];

export function getComedian(slug: string): Comedian | undefined {
  return comedians.find((c) => c.slug === slug);
}

export function getShow(slug: string): Show | undefined {
  return shows.find((s) => s.slug === slug);
}

export function getShowsForComedian(comedianSlug: string): Show[] {
  return shows.filter((s) => s.comedianSlug === comedianSlug);
}

export function getRelatedComedians(currentSlug: string, count = 3): Comedian[] {
  return comedians.filter((c) => c.slug !== currentSlug).slice(0, count);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
