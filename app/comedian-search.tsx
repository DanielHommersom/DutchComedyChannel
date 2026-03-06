"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import type { Comedian } from "@/app/data";

export default function ComedianSearch({ comedians }: { comedians: Comedian[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? comedians.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.tagline.toLowerCase().includes(query.toLowerCase()) ||
          c.genre.some((g) => g.toLowerCase().includes(query.toLowerCase()))
      )
    : comedians;

  return (
    <>
      <TextField
        fullWidth
        placeholder="Zoek een comedian…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 4 }}
      />

      {filtered.length === 0 ? (
        <Typography color="text.secondary" sx={{ py: 4, textAlign: "center" }}>
          Geen comedians gevonden voor &ldquo;{query}&rdquo;
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((comedian) => (
            <Grid key={comedian.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                    {comedian.photo && (
                      <Box
                        component="img"
                        src={comedian.photo}
                        alt={comedian.name}
                        sx={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", objectPosition: "top", flexShrink: 0 }}
                      />
                    )}
                    <Typography
                      component="a"
                      href={`/pages/comedians/${comedian.slug}`}
                      variant="h6"
                      sx={{ textDecoration: "none", color: "inherit", "&:hover": { color: "primary.main" }, lineHeight: 1.2 }}
                    >
                      {comedian.name}
                    </Typography>
                  </Box>
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
                    href={`/pages/comedians/${comedian.slug}`}
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
      )}
    </>
  );
}
