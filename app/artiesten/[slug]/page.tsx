import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined";
import TicketButton from "@/app/ticketbutton";
import { getAffiliateUrl } from "@/app/affiliatelinks";
import { comedians, getComedian, getShowsForComedian, formatDate, formatTime } from "@/app/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return comedians.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const comedian = getComedian(slug);
  if (!comedian) return {};
  return {
    title: `${comedian.name} – Dutch Comedy Channel`,
    description: comedian.tagline,
  };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const comedian = getComedian(slug);
  if (!comedian) notFound();

  const shows = getShowsForComedian(slug);

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #150D20 0%, #0A050F 100%)",
          borderBottom: "1px solid #2E1A3A",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
            {comedian.genre.map((g) => (
              <Chip key={g} label={g} size="small" color="primary" variant="outlined" />
            ))}
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.25rem", md: "3.5rem" }, mb: 2 }}>
            {comedian.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            {comedian.tagline}
          </Typography>
          <TicketButton
            affiliateUrl={getAffiliateUrl(comedian.affiliatePath)}
            label={`Tickets voor ${comedian.name}`}
          />
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Bio */}
        <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 2 }}>
          Over {comedian.name}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 6, lineHeight: 1.8 }}>
          {comedian.description}
        </Typography>

        <Divider sx={{ mb: 6, borderColor: "#2E1A3A" }} />

        {/* Shows */}
        <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 3 }}>
          Aankomende shows
        </Typography>

        {shows.length === 0 ? (
          <Typography color="text.secondary">
            Momenteel zijn er geen shows gepland. Kom later terug!
          </Typography>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {shows.map((show) => (
              <Card key={show.slug}>
                <CardContent sx={{ pb: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {show.title}
                  </Typography>
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
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
