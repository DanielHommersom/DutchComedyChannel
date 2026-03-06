import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import TicketButton from "@/app/ticketbutton";
import { getAffiliateUrl } from "@/app/affiliatelinks";
import { comedians } from "@/app/data";

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
            De beste Nederlandse comedians op één plek. Koop direct je tickets.
          </Typography>
          <TicketButton affiliateUrl={getAffiliateUrl("/cabaret-theater")} label="Bekijk alle shows" />
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
          {comedians.filter((c) => new Set([
            "daniel-arends", "tim-fransen", "klaas-van-der-eerden",
            "bert-visscher", "alex-ploeg", "patrick-laureij",
            "najib-amhali", "hans-teeuwen", "guido-weijers",
          ]).has(c.slug)).map((comedian) => (
            <Grid key={comedian.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                    {comedian.photo && (
                      <Box
                        component="img"
                        src={comedian.photo}
                        alt={comedian.name}
                        sx={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", objectPosition: "top", flexShrink: 0 }}
                      />
                    )}
                    <Typography
                      component="a"
                      href={`/pages/comedians/${comedian.slug}`}
                      variant="h6"
                      sx={{ textDecoration: "none", color: "inherit", "&:hover": { color: "primary.main" }, lineHeight: 1.2 }}
                    >
                      {comedian.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {comedian.tagline}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                    {comedian.genre.map((g) => (
                      <Chip key={g} label={g} size="small" variant="outlined" />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
                  <Button
                    component="a"
                    href={`/pages/comedians/${comedian.slug}`}
                    variant="outlined"
                    fullWidth
                  >
                    Bekijk artiest
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#2E1A3A" }} />

      {/* Instagram social proof */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1A0A2E 0%, #0A050F 60%, #0D1A2E 100%)",
          py: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          {/* Instagram gradient icon */}
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "18px",
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 3,
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Box>

          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 1 }}>
            55.000+ volgers
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 1, fontWeight: 400 }}>
            @thedutchcomedychannel
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
            Volg ons op Instagram voor fragmenten, behind-the-scenes en de laatste nieuwtjes uit de
            Nederlandse comedywereld.
          </Typography>

          <Button
            component="a"
            href="https://www.instagram.com/thedutchcomedychannel/"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              color: "#fff",
              fontWeight: 700,
              px: 4,
              "&:hover": {
                background: "linear-gradient(45deg, #e08323, #d6582c, #cc1733, #bc1356, #ac0878)",
              },
            }}
          >
            Volg TheDutchComedyChannel
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
