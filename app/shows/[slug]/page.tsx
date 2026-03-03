import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import TicketButton from "@/app/ticketbutton";
import { getAffiliateUrl } from "@/app/affiliatelinks";
import { shows, getShow, getComedian, formatDate, formatTime } from "@/app/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return shows.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const show = getShow(slug);
  if (!show) return {};
  return {
    title: `${show.title} – Dutch Comedy Channel`,
    description: `${show.title} op ${show.venue} in ${show.city}. Koop direct tickets.`,
  };
}

export default async function ShowPage({ params }: Props) {
  const { slug } = await params;
  const show = getShow(slug);
  if (!show) notFound();

  const comedian = getComedian(show.comedianSlug);

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
          <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3.25rem" }, mb: 3 }}>
            {show.title}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CalendarIcon sx={{ color: "primary.main" }} />
              <Typography>
                {formatDate(show.date)} om {formatTime(show.date)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PlaceIcon sx={{ color: "primary.main" }} />
              <Typography>
                {show.venue}, {show.city}
              </Typography>
            </Box>
            {comedian && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PersonIcon sx={{ color: "primary.main" }} />
                <Typography
                  component="a"
                  href={`/artiesten/${comedian.slug}`}
                  color="primary"
                  sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                >
                  {comedian.name}
                </Typography>
              </Box>
            )}
          </Box>

          <TicketButton
            affiliateUrl={getAffiliateUrl(show.affiliatePath)}
            label="Koop tickets"
          />
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        {comedian && (
          <>
            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 2 }}>
              Over {comedian.name}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>
              {comedian.description}
            </Typography>
            <Button component="a" href={`/artiesten/${comedian.slug}`} variant="outlined">
              Meer over {comedian.name}
            </Button>

            <Divider sx={{ my: 6, borderColor: "#2E1A3A" }} />
          </>
        )}

        {/* Ticket CTA repeat */}
        <Box
          sx={{
            p: 4,
            borderRadius: 3,
            border: "1px solid #2E1A3A",
            background: "#150D20",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Mis deze show niet
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Tickets zijn beperkt beschikbaar. Zeker van je plek? Koop nu!
          </Typography>
          <TicketButton
            affiliateUrl={getAffiliateUrl(show.affiliatePath)}
            label="Koop tickets"
          />
        </Box>
      </Container>
    </Box>
  );
}
