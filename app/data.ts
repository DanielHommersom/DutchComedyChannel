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
    affiliatePath: "/artiest/jochem-myjer",
    instagramPostIds: [], // Voeg hier echte Instagram post-ID's toe
    pastShows: [
      { title: "Jochem Myjer – De Magie van het Bestaan", date: "2024-03-15", venue: "Ziggo Dome", city: "Amsterdam" },
      { title: "Jochem Myjer – De Magie van het Bestaan", date: "2024-04-20", venue: "Rotterdam Ahoy", city: "Rotterdam" },
      { title: "Jochem Myjer – Toverij", date: "2022-11-05", venue: "GelreDome", city: "Arnhem" },
    ],
  },
  {
    name: "Youp van 't Hek",
    slug: "youp-van-t-hek",
    tagline: "Scherpe maatschappijkritiek met een knipoog",
    description:
      "Youp van 't Hek is een legendarische cabaretier die al decennialang het Nederlandse publiek aan het lachen én denken zet. Bekend om zijn compromisloze mening en schitterende woordkeuze.",
    genre: ["Cabaret", "Politiek"],
    affiliatePath: "/artiest/youp-van-t-hek",
    instagramPostIds: [],
    pastShows: [
      { title: "Youp van 't Hek – Gouwe Ouwe Tour", date: "2024-01-12", venue: "Carré", city: "Amsterdam" },
      { title: "Youp van 't Hek – Kalm aan!", date: "2023-02-18", venue: "De Doelen", city: "Rotterdam" },
      { title: "Youp van 't Hek – Alles of Niets", date: "2021-09-24", venue: "TivoliVredenburg", city: "Utrecht" },
    ],
  },
  {
    name: "Claudia de Breij",
    slug: "claudia-de-breij",
    tagline: "Veelzijdige cabaretière met een warm hart",
    description:
      "Claudia de Breij is cabaretière, presentatrice en zangeres in één. Haar shows zijn warm, grappig en ontroerend tegelijk — een unieke combinatie die haar tot een publiekslieveling maakt.",
    genre: ["Cabaret", "Muziek"],
    affiliatePath: "/artiest/claudia-de-breij",
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
    affiliatePath: "/artiest/najib-amhali",
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
    affiliatePath: "/artiest/brigitte-kaandorp",
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
    affiliatePath: "/artiest/hans-teeuwen",
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
    affiliatePath: "/artiest/guido-weijers",
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
    affiliatePath: "/artiest/rayen-panday",
    instagramPostIds: [],
    pastShows: [
      { title: "Rayen Panday – Raww", date: "2024-03-01", venue: "Muziekgebouw", city: "Eindhoven" },
      { title: "Rayen Panday – Origin", date: "2023-01-14", venue: "Paard van Troje", city: "Den Haag" },
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
    affiliatePath: "/voorstelling/jochem-myjer-alles-goed-amsterdam",
  },
  {
    title: "Jochem Myjer – Alles Goed?",
    slug: "jochem-myjer-alles-goed-rotterdam",
    comedianSlug: "jochem-myjer",
    date: "2026-05-03T20:00:00",
    venue: "Rotterdam Ahoy",
    city: "Rotterdam",
    affiliatePath: "/voorstelling/jochem-myjer-alles-goed-rotterdam",
  },
  {
    title: "Youp van 't Hek – Eindspel",
    slug: "youp-van-t-hek-eindspel",
    comedianSlug: "youp-van-t-hek",
    date: "2026-04-18T20:15:00",
    venue: "Carré",
    city: "Amsterdam",
    affiliatePath: "/voorstelling/youp-van-t-hek-eindspel",
  },
  {
    title: "Claudia de Breij – Hartje",
    slug: "claudia-de-breij-hartje",
    comedianSlug: "claudia-de-breij",
    date: "2026-04-25T20:00:00",
    venue: "DeLaMar Theater",
    city: "Amsterdam",
    affiliatePath: "/voorstelling/claudia-de-breij-hartje",
  },
  {
    title: "Claudia de Breij – Hartje",
    slug: "claudia-de-breij-hartje-den-haag",
    comedianSlug: "claudia-de-breij",
    date: "2026-06-06T20:00:00",
    venue: "Nationale Opera & Ballet",
    city: "Den Haag",
    affiliatePath: "/voorstelling/claudia-de-breij-hartje-den-haag",
  },
  {
    title: "Najib Amhali – Reset",
    slug: "najib-amhali-reset",
    comedianSlug: "najib-amhali",
    date: "2026-05-10T20:00:00",
    venue: "AFAS Live",
    city: "Amsterdam",
    affiliatePath: "/voorstelling/najib-amhali-reset",
  },
  {
    title: "Brigitte Kaandorp – Gewoon Thuis",
    slug: "brigitte-kaandorp-gewoon-thuis",
    comedianSlug: "brigitte-kaandorp",
    date: "2026-05-22T20:00:00",
    venue: "Stadsschouwburg",
    city: "Utrecht",
    affiliatePath: "/voorstelling/brigitte-kaandorp-gewoon-thuis",
  },
  {
    title: "Hans Teeuwen – Stront",
    slug: "hans-teeuwen-stront",
    comedianSlug: "hans-teeuwen",
    date: "2026-06-14T20:15:00",
    venue: "Paradiso",
    city: "Amsterdam",
    affiliatePath: "/voorstelling/hans-teeuwen-stront",
  },
  {
    title: "Guido Weijers – Onbevangen",
    slug: "guido-weijers-onbevangen",
    comedianSlug: "guido-weijers",
    date: "2026-04-30T20:00:00",
    venue: "Luxor Theater",
    city: "Rotterdam",
    affiliatePath: "/voorstelling/guido-weijers-onbevangen",
  },
  {
    title: "Rayen Panday – Echt Waar",
    slug: "rayen-panday-echt-waar",
    comedianSlug: "rayen-panday",
    date: "2026-05-16T20:00:00",
    venue: "Muziekgebouw",
    city: "Eindhoven",
    affiliatePath: "/voorstelling/rayen-panday-echt-waar",
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
