"use client";

import { useEffect } from "react";
import Script from "next/script";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  postIds: string[];
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramEmbeds({ postIds }: Props) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [postIds]);

  if (postIds.length === 0) {
    return (
      <Box
        sx={{
          py: 6,
          textAlign: "center",
          border: "1px dashed #2E1A3A",
          borderRadius: 3,
        }}
      >
        <Typography color="text.secondary">
          Instagram clips komen binnenkort beschikbaar.
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.5 }}>
          Voeg echte post-ID&apos;s toe in <code>app/data.ts</code> → <code>instagramPostIds</code>
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Script src="https://www.instagram.com/embeds.js" strategy="lazyOnload" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {postIds.map((postId) => (
          <blockquote
            key={postId}
            className="instagram-media"
            data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
            data-instgrm-version="14"
            style={{ margin: 0, width: "100%", minWidth: 0 }}
          />
        ))}
      </Box>
    </>
  );
}
