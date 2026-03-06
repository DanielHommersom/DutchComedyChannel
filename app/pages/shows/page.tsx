import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { shows, getComedian } from "@/app/data";
import ShowSearch from "@/app/show-search";

export const metadata = {
  title: "Shows – Dutch Comedy Channel",
  description: "Bekijk alle aankomende Nederlandse comedy shows en koop direct tickets.",
};

export default function ShowsOverzicht() {
  const sorted = [...shows]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((show) => ({ show, comedian: getComedian(show.comedianSlug) }));

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 1 }}>
        Shows
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 6 }}>
        Alle aankomende shows — gesorteerd op datum
      </Typography>

      <ShowSearch items={sorted} />
    </Container>
  );
}
