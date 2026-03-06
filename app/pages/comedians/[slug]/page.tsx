import { notFound } from "next/navigation";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined";
import HistoryIcon from "@mui/icons-material/HistoryOutlined";
import InstagramEmbeds from "@/components/InstagramEmbeds";
import TicketButton from "@/app/ticketbutton";
import { getAffiliateUrl } from "@/app/affiliatelinks";
import {
  comedians,
  getComedian,
  getShowsForComedian,
  getRelatedComedians,
  formatDate,
  formatTime,
  formatDateShort,
} from "@/app/data";

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

export default async function ComedianPage({ params }: Props) {
  const { slug } = await params;
  const comedian = getComedian(slug);
  if (!comedian) notFound();

  const upcomingShows = getShowsForComedian(slug);
  const related = getRelatedComedians(slug, 3);
  const initials = comedian.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #1A0A2E 0%, #0A050F 60%, #0D1A2E 100%)",
          borderBottom: "1px solid #2E1A3A",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            {/* Photo / Avatar */}
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
              {comedian.photo ? (
                <Box
                  sx={{
                    width: { xs: 180, md: 260 },
                    height: { xs: 180, md: 260 },
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid",
                    borderColor: "primary.main",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Image src={comedian.photo} alt={comedian.name} fill style={{ objectFit: "cover" }} />
                </Box>
              ) : (
                <Avatar
                  sx={{
                    width: { xs: 180, md: 260 },
                    height: { xs: 180, md: 260 },
                    fontSize: { xs: "3rem", md: "4.5rem" },
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #1ED8CC, #D81B8E)",
                    border: "3px solid",
                    borderColor: "primary.main",
                  }}
                >
                  {initials}
                </Avatar>
              )}
            </Grid>

            {/* Info */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
                {comedian.genre.map((g) => (
                  <Chip key={g} label={g} size="small" color="primary" variant="outlined" />
                ))}
              </Box>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.75rem" }, mb: 1.5 }}>
                {comedian.name}
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                {comedian.tagline}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: 560 }}>
                {comedian.description}
              </Typography>
              <TicketButton
                affiliateUrl={getAffiliateUrl(comedian.affiliatePath)}
                label={`Tickets voor ${comedian.name}`}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Upcoming Shows ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", md: "2.25rem" }, mb: 1 }}>
          Aankomende shows
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Zeker van je plek? Koop nu tickets.
        </Typography>

        {upcomingShows.length === 0 ? (
          <Typography color="text.secondary">Momenteel geen shows gepland — kom later terug!</Typography>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {upcomingShows.map((show) => (
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
                <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
                  <TicketButton affiliateUrl={getAffiliateUrl(show.affiliatePath)} label="Koop tickets" />
                  <Button component="a" href={`/pages/shows/${show.slug}`} variant="text" size="small">
                    Details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
      </Container>

      <Divider sx={{ borderColor: "#2E1A3A" }} />

      {/* ── Past Shows ──
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <HistoryIcon sx={{ color: "text.secondary" }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", md: "2.25rem" } }}>
            Tour geschiedenis
          </Typography>
        </Box>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Eerdere shows en tournees van {comedian.name}
        </Typography>

        {!comedian.pastShows || comedian.pastShows.length === 0 ? (
          <Typography color="text.secondary">Geen eerdere shows beschikbaar.</Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "2px solid #2E1A3A",
              pl: 3,
              gap: 0,
            }}
          >
            {comedian.pastShows.map((show, i) => (
              <Box
                key={i}
                sx={{
                  position: "relative",
                  pb: 3,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: -19,
                    top: 6,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    opacity: 0.5,
                  },
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.25 }}>
                  {formatDateShort(show.date)}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {show.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {show.venue}, {show.city}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Container>

      <Divider sx={{ borderColor: "#2E1A3A" }} /> */}

      {/* ── Meer Comedians ── */}
      <Box sx={{ bgcolor: "background.paper" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", md: "2.25rem" }, mb: 1 }}>
            Meer comedians
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Ontdek andere Nederlandse cabaretiers
          </Typography>

          <Grid container spacing={3}>
            {related.map((c) => (
              <Grid key={c.slug} size={{ xs: 12, sm: 4 }}>
                <Card
                  component="a"
                  href={`/pages/comedians/${c.slug}`}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                    "&:hover": { borderColor: "primary.main" },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                      {c.photo ? (
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            overflow: "hidden",
                            flexShrink: 0,
                            position: "relative",
                          }}
                        >
                          <Image src={c.photo} alt={c.name} fill style={{ objectFit: "cover" }} />
                        </Box>
                      ) : (
                        <Avatar
                          sx={{
                            width: 48,
                            height: 48,
                            fontSize: "1rem",
                            fontWeight: 700,
                            background: "linear-gradient(135deg, #1ED8CC, #D81B8E)",
                          }}
                        >
                          {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
                        </Avatar>
                      )}
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {c.name}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                          {c.genre.map((g) => (
                            <Chip key={g} label={g} size="small" variant="outlined" sx={{ height: 18, fontSize: "0.65rem" }} />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {c.tagline}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
