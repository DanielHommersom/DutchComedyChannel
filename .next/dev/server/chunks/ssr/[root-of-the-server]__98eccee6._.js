module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/ticketbutton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ConfirmationNumberOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ConfirmationNumberOutlined.js [app-rsc] (ecmascript)");
;
;
;
function TicketButton({ affiliateUrl, label = "Koop tickets", fullWidth = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        component: "a",
        href: affiliateUrl,
        target: "_blank",
        rel: "noopener noreferrer sponsored",
        variant: "contained",
        color: "primary",
        fullWidth: fullWidth,
        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ConfirmationNumberOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/ticketbutton.tsx",
            lineNumber: 24,
            columnNumber: 18
        }, void 0),
        sx: {
            fontWeight: 700,
            fontSize: "1rem"
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/app/ticketbutton.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/affiliatelinks.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAffiliateUrl",
    ()=>getAffiliateUrl
]);
const AFFILIATE_ID = "YOUR_AFFILIATE_ID"; // replace with your topticketshop.nl affiliate ID
const BASE_URL = "https://www.topticketshop.nl";
function getAffiliateUrl(path) {
    const url = new URL(`${BASE_URL}${path}`);
    url.searchParams.set("affiliate", AFFILIATE_ID);
    return url.toString();
} // Usage example:
 // getAffiliateUrl("/artiest/jochem-myjer")
 // → "https://www.topticketshop.nl/artiest/jochem-myjer?affiliate=YOUR_AFFILIATE_ID"
}),
"[project]/app/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comedians",
    ()=>comedians,
    "formatDate",
    ()=>formatDate,
    "formatTime",
    ()=>formatTime,
    "getComedian",
    ()=>getComedian,
    "getShow",
    ()=>getShow,
    "getShowsForComedian",
    ()=>getShowsForComedian,
    "shows",
    ()=>shows
]);
const comedians = [
    {
        name: "Jochem Myjer",
        slug: "jochem-myjer",
        tagline: "De meest geliefde cabaretier van Nederland",
        description: "Jochem Myjer is een van de populairste cabaretiers van Nederland. Met uitverkochte arena-shows en miljoenen fans combineert hij schitterend slapstick met hartveroverende verhalen over het leven.",
        genre: [
            "Cabaret",
            "Familie"
        ],
        affiliatePath: "/artiest/jochem-myjer"
    },
    {
        name: "Youp van 't Hek",
        slug: "youp-van-t-hek",
        tagline: "Scherpe maatschappijkritiek met een knipoog",
        description: "Youp van 't Hek is een legendarische cabaretier die al decennialang het Nederlandse publiek aan het lachen én denken zet. Bekend om zijn compromisloze mening en schitterende woordkeuze.",
        genre: [
            "Cabaret",
            "Politiek"
        ],
        affiliatePath: "/artiest/youp-van-t-hek"
    },
    {
        name: "Claudia de Breij",
        slug: "claudia-de-breij",
        tagline: "Veelzijdige cabaretière met een warm hart",
        description: "Claudia de Breij is cabaretière, presentatrice en zangeres in één. Haar shows zijn warm, grappig en ontroerend tegelijk — een unieke combinatie die haar tot een publiekslieveling maakt.",
        genre: [
            "Cabaret",
            "Muziek"
        ],
        affiliatePath: "/artiest/claudia-de-breij"
    },
    {
        name: "Najib Amhali",
        slug: "najib-amhali",
        tagline: "Stand-up met een eigen kijk op Nederland",
        description: "Najib Amhali is een bekroonde stand-up comedian die het multiculturele Nederland als geen ander weet te vatten. Zijn shows zijn raak, eerlijk en ontzettend grappig.",
        genre: [
            "Stand-up",
            "Maatschappij"
        ],
        affiliatePath: "/artiest/najib-amhali"
    },
    {
        name: "Brigitte Kaandorp",
        slug: "brigitte-kaandorp",
        tagline: "Observationele humor over het dagelijks leven",
        description: "Brigitte Kaandorp is een iconische cabaretière die al meer dan 30 jaar het publiek vermaakt met haar scherpe observaties over alledaagse situaties. Herkenbaar, hilarisch en tijdloos.",
        genre: [
            "Cabaret",
            "Observationeel"
        ],
        affiliatePath: "/artiest/brigitte-kaandorp"
    },
    {
        name: "Hans Teeuwen",
        slug: "hans-teeuwen",
        tagline: "Absurdistisch, grensverleggend en onvergetelijk",
        description: "Hans Teeuwen staat bekend als een van de meest originele cabaretiers ter wereld. Zijn shows zijn absurdistisch, provocerend en altijd verrassend — niets is zoals je verwacht.",
        genre: [
            "Cabaret",
            "Absurdisme"
        ],
        affiliatePath: "/artiest/hans-teeuwen"
    },
    {
        name: "Guido Weijers",
        slug: "guido-weijers",
        tagline: "De nieuwe stem van de Nederlandse stand-up",
        description: "Guido Weijers is een van de snelst stijgende sterren in de Nederlandse comedy. Met zijn directe stijl en scherpe observaties verovert hij zalen door heel Nederland.",
        genre: [
            "Stand-up"
        ],
        affiliatePath: "/artiest/guido-weijers"
    },
    {
        name: "Rayen Panday",
        slug: "rayen-panday",
        tagline: "Verfrissend eerlijk en messcherp",
        description: "Rayen Panday brengt verfrissende eerlijkheid op het podium. Zijn humoristische kijk op identiteit, cultuur en het moderne leven maakt hem tot een van de meest gevolgde comedians van dit moment.",
        genre: [
            "Stand-up",
            "Maatschappij"
        ],
        affiliatePath: "/artiest/rayen-panday"
    }
];
const shows = [
    {
        title: "Jochem Myjer – Alles Goed?",
        slug: "jochem-myjer-alles-goed",
        comedianSlug: "jochem-myjer",
        date: "2026-04-12T20:00:00",
        venue: "Ziggo Dome",
        city: "Amsterdam",
        affiliatePath: "/voorstelling/jochem-myjer-alles-goed-amsterdam"
    },
    {
        title: "Jochem Myjer – Alles Goed?",
        slug: "jochem-myjer-alles-goed-rotterdam",
        comedianSlug: "jochem-myjer",
        date: "2026-05-03T20:00:00",
        venue: "Rotterdam Ahoy",
        city: "Rotterdam",
        affiliatePath: "/voorstelling/jochem-myjer-alles-goed-rotterdam"
    },
    {
        title: "Youp van 't Hek – Eindspel",
        slug: "youp-van-t-hek-eindspel",
        comedianSlug: "youp-van-t-hek",
        date: "2026-04-18T20:15:00",
        venue: "Carré",
        city: "Amsterdam",
        affiliatePath: "/voorstelling/youp-van-t-hek-eindspel"
    },
    {
        title: "Claudia de Breij – Hartje",
        slug: "claudia-de-breij-hartje",
        comedianSlug: "claudia-de-breij",
        date: "2026-04-25T20:00:00",
        venue: "DeLaMar Theater",
        city: "Amsterdam",
        affiliatePath: "/voorstelling/claudia-de-breij-hartje"
    },
    {
        title: "Claudia de Breij – Hartje",
        slug: "claudia-de-breij-hartje-den-haag",
        comedianSlug: "claudia-de-breij",
        date: "2026-06-06T20:00:00",
        venue: "Nationale Opera & Ballet",
        city: "Den Haag",
        affiliatePath: "/voorstelling/claudia-de-breij-hartje-den-haag"
    },
    {
        title: "Najib Amhali – Reset",
        slug: "najib-amhali-reset",
        comedianSlug: "najib-amhali",
        date: "2026-05-10T20:00:00",
        venue: "AFAS Live",
        city: "Amsterdam",
        affiliatePath: "/voorstelling/najib-amhali-reset"
    },
    {
        title: "Brigitte Kaandorp – Gewoon Thuis",
        slug: "brigitte-kaandorp-gewoon-thuis",
        comedianSlug: "brigitte-kaandorp",
        date: "2026-05-22T20:00:00",
        venue: "Stadsschouwburg",
        city: "Utrecht",
        affiliatePath: "/voorstelling/brigitte-kaandorp-gewoon-thuis"
    },
    {
        title: "Hans Teeuwen – Stront",
        slug: "hans-teeuwen-stront",
        comedianSlug: "hans-teeuwen",
        date: "2026-06-14T20:15:00",
        venue: "Paradiso",
        city: "Amsterdam",
        affiliatePath: "/voorstelling/hans-teeuwen-stront"
    },
    {
        title: "Guido Weijers – Onbevangen",
        slug: "guido-weijers-onbevangen",
        comedianSlug: "guido-weijers",
        date: "2026-04-30T20:00:00",
        venue: "Luxor Theater",
        city: "Rotterdam",
        affiliatePath: "/voorstelling/guido-weijers-onbevangen"
    },
    {
        title: "Rayen Panday – Echt Waar",
        slug: "rayen-panday-echt-waar",
        comedianSlug: "rayen-panday",
        date: "2026-05-16T20:00:00",
        venue: "Muziekgebouw",
        city: "Eindhoven",
        affiliatePath: "/voorstelling/rayen-panday-echt-waar"
    }
];
function getComedian(slug) {
    return comedians.find((c)=>c.slug === slug);
}
function getShow(slug) {
    return shows.find((s)=>s.slug === slug);
}
function getShowsForComedian(comedianSlug) {
    return shows.filter((s)=>s.comedianSlug === comedianSlug);
}
function formatDate(iso) {
    return new Date(iso).toLocaleDateString("nl-NL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
function formatTime(iso) {
    return new Date(iso).toLocaleTimeString("nl-NL", {
        hour: "2-digit",
        minute: "2-digit"
    });
}
}),
"[project]/app/artiesten/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArtistPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardActions/CardActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PlaceOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PlaceOutlined.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CalendarTodayOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CalendarTodayOutlined.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ticketbutton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ticketbutton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$affiliatelinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/affiliatelinks.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["comedians"].map((c)=>({
            slug: c.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const comedian = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getComedian"])(slug);
    if (!comedian) return {};
    return {
        title: `${comedian.name} – Dutch Comedy Channel`,
        description: comedian.tagline
    };
}
async function ArtistPage({ params }) {
    const { slug } = await params;
    const comedian = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getComedian"])(slug);
    if (!comedian) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const shows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getShowsForComedian"])(slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    py: {
                        xs: 8,
                        md: 12
                    },
                    background: "linear-gradient(135deg, #150D20 0%, #0A050F 100%)",
                    borderBottom: "1px solid #2E1A3A"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    maxWidth: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                display: "flex",
                                gap: 1,
                                mb: 2,
                                flexWrap: "wrap"
                            },
                            children: comedian.genre.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    label: g,
                                    size: "small",
                                    color: "primary",
                                    variant: "outlined"
                                }, g, false, {
                                    fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/artiesten/[slug]/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            variant: "h1",
                            sx: {
                                fontSize: {
                                    xs: "2.25rem",
                                    md: "3.5rem"
                                },
                                mb: 2
                            },
                            children: comedian.name
                        }, void 0, false, {
                            fileName: "[project]/app/artiesten/[slug]/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            variant: "h5",
                            color: "text.secondary",
                            sx: {
                                mb: 4
                            },
                            children: comedian.tagline
                        }, void 0, false, {
                            fileName: "[project]/app/artiesten/[slug]/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ticketbutton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            affiliateUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$affiliatelinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAffiliateUrl"])(comedian.affiliatePath),
                            label: `Tickets voor ${comedian.name}`
                        }, void 0, false, {
                            fileName: "[project]/app/artiesten/[slug]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/artiesten/[slug]/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                maxWidth: "md",
                sx: {
                    py: {
                        xs: 6,
                        md: 10
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        variant: "h2",
                        sx: {
                            fontSize: "1.5rem",
                            mb: 2
                        },
                        children: [
                            "Over ",
                            comedian.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        color: "text.secondary",
                        sx: {
                            mb: 6,
                            lineHeight: 1.8
                        },
                        children: comedian.description
                    }, void 0, false, {
                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            mb: 6,
                            borderColor: "#2E1A3A"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        variant: "h2",
                        sx: {
                            fontSize: "1.5rem",
                            mb: 3
                        },
                        children: "Aankomende shows"
                    }, void 0, false, {
                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    shows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        color: "text.secondary",
                        children: "Momenteel zijn er geen shows gepland. Kom later terug!"
                    }, void 0, false, {
                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        },
                        children: shows.map((show)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            pb: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "h6",
                                                gutterBottom: true,
                                                children: show.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    display: "flex",
                                                    gap: 3,
                                                    flexWrap: "wrap"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 0.75
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CalendarTodayOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                sx: {
                                                                    fontSize: 16,
                                                                    color: "text.secondary"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "body2",
                                                                color: "text.secondary",
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(show.date),
                                                                    " – ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatTime"])(show.date)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        sx: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 0.75
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PlaceOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                sx: {
                                                                    fontSize: 16,
                                                                    color: "text.secondary"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "body2",
                                                                color: "text.secondary",
                                                                children: [
                                                                    show.venue,
                                                                    ", ",
                                                                    show.city
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            px: 2,
                                            pb: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ticketbutton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                affiliateUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$affiliatelinks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAffiliateUrl"])(show.affiliatePath),
                                                label: "Koop tickets"
                                            }, void 0, false, {
                                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                component: "a",
                                                href: `/shows/${show.slug}`,
                                                variant: "text",
                                                size: "small",
                                                children: "Details"
                                            }, void 0, false, {
                                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, show.slug, true, {
                                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/artiesten/[slug]/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/artiesten/[slug]/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/artiesten/[slug]/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/artiesten/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/artiesten/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__98eccee6._.js.map