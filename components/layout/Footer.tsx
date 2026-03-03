import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid #2A2A2A", py: 4, textAlign: "center" }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Dutch Comedy Channel
      </Typography>
    </Box>
  );
}
