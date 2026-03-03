import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export const metadata = {
  title: "Over ons – Dutch Comedy Channel",
  description: "Meer over Dutch Comedy Channel en onze samenwerking met ticketpartners.",
};

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
        Over ons
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 6 }}>
        Alles over Dutch Comedy Channel
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Box>
          <Typography variant="h2" sx={{ fontSize: "1.4rem", mb: 1.5 }}>
            Wie zijn wij?
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Dutch Comedy Channel is een onafhankelijk platform voor fans van Nederlandse comedy en
            cabaret. Wij brengen het beste Nederlandse comedyaanbod samen op één plek — van
            uitverkochte arena-shows tot intieme theatervoorstellingen.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#2E1A3A" }} />

        <Box>
          <Typography variant="h2" sx={{ fontSize: "1.4rem", mb: 1.5 }}>
            Onze ticketpartner
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Voor het kopen van tickets werken wij samen met{" "}
            <Typography
              component="a"
              href="https://www.topticketshop.nl"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              TopTicketShop.nl
            </Typography>
            . Dit is een betrouwbare Nederlandse ticketverkoper met een breed aanbod aan
            theater- en comedytickets.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#2E1A3A" }} />

        <Box>
          <Typography variant="h2" sx={{ fontSize: "1.4rem", mb: 1.5 }}>
            Affiliatebeleid
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Dutch Comedy Channel maakt gebruik van affiliatelinks. Dit betekent dat wanneer je via
            onze website een ticket koopt, wij een kleine commissie ontvangen van onze
            ticketpartner. Voor jou verandert er niets aan de prijs of het koopproces. Dit helpt
            ons om het platform gratis en zonder advertenties aan te bieden.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#2E1A3A" }} />

        <Box>
          <Typography variant="h2" sx={{ fontSize: "1.4rem", mb: 1.5 }}>
            Contact
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Vragen, suggesties of wil je een artiest toegevoegd zien? Stuur een e-mail naar{" "}
            <Typography
              component="a"
              href="mailto:info@dutchcomedychannel.nl"
              color="primary"
              sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              info@dutchcomedychannel.nl
            </Typography>
            .
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
