import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const navLinks = [
  { label: "Artiesten", href: "/artiesten" },
  { label: "Shows", href: "/shows" },
  { label: "Over ons", href: "/about" },
];

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #2E1A3A" }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography
          component="a"
          href="/"
          variant="h6"
          sx={{ fontWeight: 800, color: "primary.main", textDecoration: "none", flexGrow: 1 }}
        >
          Dutch Comedy Channel
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component="a"
              href={link.href}
              color="inherit"
              size="small"
              sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
