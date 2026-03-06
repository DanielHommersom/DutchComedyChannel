import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid #2A2A2A", py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
          <strong style={{ color: "inherit" }}>Affiliate-openbaarmaking:</strong> Dutch Comedy Channel
          werkt samen met TopTicketShop.nl via een affiliate-partnerschap. Wanneer u via onze links
          tickets koopt, ontvangen wij mogelijk een vergoeding. Dit heeft geen invloed op de prijs
          die u betaalt. Wij vermelden dit conform de richtlijnen van de{" "}
          <Typography
            component="a"
            href="https://www.acm.nl"
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            color="primary"
            sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
          >
            Autoriteit Consument &amp; Markt (ACM)
          </Typography>
          .
        </Typography>

        <Divider sx={{ borderColor: "#2A2A2A", mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Dutch Comedy Channel
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              component="a"
              href="/pages/about"
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "none", "&:hover": { color: "text.primary" } }}
            >
              Over ons
            </Typography>
            <Typography
              component="a"
              href="mailto:info@dutchcomedychannel.nl"
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "none", "&:hover": { color: "text.primary" } }}
            >
              Contact
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
