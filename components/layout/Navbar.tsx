"use client";

import { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Artiesten", href: "/pages/artiesten" },
  { label: "Shows", href: "/pages/shows" },
  { label: "Over ons", href: "/pages/about" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #2E1A3A" }}>
      <Toolbar sx={{ gap: 2 }}>
        {/* Logo — always left */}
        <Box component="a" href="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/DCC.png" alt="Dutch Comedy Channel" width={48} height={48} style={{ borderRadius: "50%" }} />
        </Box>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
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

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Mobile hamburger — RIGHT */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  width: "100vw",
                  maxWidth: "100vw",
                  left: "0 !important",
                  right: 0,
                  bgcolor: "background.paper",
                  border: "1px solid #2E1A3A",
                  borderRadius: 0,
                },
              },
            }}
          >
            {navLinks.map((link) => (
              <MenuItem
                key={link.href}
                component="a"
                href={link.href}
                onClick={() => setAnchorEl(null)}
              >
                {link.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
