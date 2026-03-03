import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TicketButton from "@/app/ticketbutton";
import { getAffiliateUrl } from "@/app/affiliatelinks";

const comedians = [
  {
    name: "Jochem Myjer",
    description: "Een van Nederland's meest geliefde cabaretiers met uitverkochte shows door het hele land.",
    path: "/artiest/jochem-myjer",
  },
  {
    name: "Youp van 't Hek",
    description: "Legendarische cabaretier bekend om zijn scherpe maatschappijkritiek en hilarische shows.",
    path: "/artiest/youp-van-t-hek",
  },
  {
    name: "Claudia de Breij",
    description: "Veelzijdige cabaretière, presentatrice en zangeres met een unieke stijl.",
    path: "/artiest/claudia-de-breij",
  },
  {
    name: "Najib Amhali",
    description: "Bekroonde stand-up comedian met een eigen kijk op het Nederlandse multiculturele leven.",
    path: "/artiest/najib-amhali",
  },
  {
    name: "Brigitte Kaandorp",
    description: "Iconische cabaretière met observationele humor over het dagelijks leven.",
    path: "/artiest/brigitte-kaandorp",
  },
  {
    name: "Hans Teeuwen",
    description: "Grensverleggende cabaretier bekend om zijn absurdistische en provocerende shows.",
    path: "/artiest/hans-teeuwen",
  },
];

export default function Home() {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 8, md: 14 },
          textAlign: "center",
          position: "relative",
          backgroundImage: "url('/jumbotron.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid #2A2A2A",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(10,5,15,0.72) 0%, rgba(10,5,15,0.88) 100%)",
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative" }}>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, mb: 2 }}>
            Dutch Comedy Channel
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            De beste Nederlandse comedians op één plek. Koop direct tickets voor uitverkochte shows.
          </Typography>
          <TicketButton affiliateUrl={getAffiliateUrl("/comedy")} label="Bekijk alle shows" />
        </Container>
      </Box>

      {/* Comedian grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" }, mb: 1 }}>
          Populaire comedians
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 5 }}>
          Tickets voor de grootste Nederlandse cabaretiers
        </Typography>

        <Grid container spacing={3}>
          {comedians.map((comedian) => (
            <Grid key={comedian.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {comedian.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {comedian.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <TicketButton
                    affiliateUrl={getAffiliateUrl(comedian.path)}
                    label="Tickets"
                    fullWidth
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
