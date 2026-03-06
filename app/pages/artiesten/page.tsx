import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { comedians } from "@/app/data";
import ComedianSearch from "@/app/comedian-search";

export const metadata = {
  title: "Artiesten – Dutch Comedy Channel",
  description: "Ontdek de beste Nederlandse comedians en cabaretiers.",
};

export default function ArtiestenOverzicht() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 1 }}>
        Artiesten
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 6 }}>
        Ontdek de beste Nederlandse comedians en cabaretiers
      </Typography>

      <ComedianSearch comedians={comedians} />
    </Container>
  );
}
