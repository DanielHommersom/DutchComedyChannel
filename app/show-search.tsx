"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined";
import type { Show, Comedian } from "@/app/data";
import { formatDate, formatTime } from "@/app/data";

type ShowWithComedian = { show: Show; comedian: Comedian | undefined };

export default function ShowSearch({ items }: { items: ShowWithComedian[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? items.filter(({ show, comedian }) =>
        show.title.toLowerCase().includes(query.toLowerCase()) ||
        show.city.toLowerCase().includes(query.toLowerCase()) ||
        show.venue.toLowerCase().includes(query.toLowerCase()) ||
        comedian?.name.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  return (
    <>
      <TextField
        fullWidth
        placeholder="Zoek op show, artiest of stad…"
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
          Geen shows gevonden voor &ldquo;{query}&rdquo;
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {filtered.map(({ show, comedian }) => (
            <Card key={show.slug}>
              <CardContent sx={{ pb: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                  {comedian?.photo && (
                    <Box
                      component="img"
                      src={comedian.photo}
                      alt={comedian.name}
                      sx={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", objectPosition: "top", flexShrink: 0 }}
                    />
                  )}
                  <Typography
                    component="a"
                    href={`/pages/shows/${show.slug}`}
                    variant="h6"
                    sx={{ textDecoration: "none", color: "inherit", "&:hover": { color: "primary.main" } }}
                  >
                    {show.title}
                  </Typography>
                </Box>
                {comedian && (
                  <Typography
                    component="a"
                    href={`/pages/comedians/${comedian.slug}`}
                    variant="body2"
                    color="primary"
                    sx={{ textDecoration: "none", display: "block", mb: 1.5, "&:hover": { textDecoration: "underline" } }}
                  >
                    {comedian.name}
                  </Typography>
                )}
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
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button component="a" href={`/pages/shows/${show.slug}`} variant="outlined" fullWidth>
                  Bekijk show
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
}
