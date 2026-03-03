import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined";
import TicketButton from "@/app/ticketbutton";
import { getAffiliateUrl } from "@/app/affiliatelinks";
import { shows, getComedian, formatDate, formatTime } from "@/app/data";

export const metadata = {
  title: "Shows – Dutch Comedy Channel",
  description: "Bekijk alle aankomende Nederlandse comedy shows en koop direct tickets.",
};

export default function ShowsOverzicht() {
  const sorted = [...shows].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 1 }}>
        Shows
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 6 }}>
        Alle aankomende shows — gesorteerd op datum
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {sorted.map((show) => {
          const comedian = getComedian(show.comedianSlug);
          return (
            <Card key={show.slug}>
              <CardContent sx={{ pb: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {show.title}
                </Typography>
                {comedian && (
                  <Typography
                    component="a"
                    href={`/artiesten/${comedian.slug}`}
                    variant="body2"
                    color="primary"
                    sx={{ textDecoration: "none", display: "block", mb: 1.5, "&:hover": { textDecoration: "underline" } }}
                  >
                    {comedian.name}
                  </Typography>
                )}
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                    <CalendarIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(show.date)} – {formatTime(show.date)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                    <PlaceIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {show.venue}, {show.city}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <TicketButton
                  affiliateUrl={getAffiliateUrl(show.affiliatePath)}
                  label="Koop tickets"
                />
                <Button component="a" href={`/shows/${show.slug}`} variant="text" size="small">
                  Details
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
