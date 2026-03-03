import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { comedians } from "@/app/data";

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

      <Grid container spacing={3}>
        {comedians.map((comedian) => (
          <Grid key={comedian.slug} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {comedian.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {comedian.tagline}
                </Typography>
                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                  {comedian.genre.map((g) => (
                    <Chip key={g} label={g} size="small" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  component="a"
                  href={`/artiesten/${comedian.slug}`}
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
  );
}
