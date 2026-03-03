import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1ED8CC", // teal/cyan glow from image
    },
    secondary: {
      main: "#D81B8E", // hot magenta/pink from image
    },
    background: {
      default: "#0A050F", // near-black with a deep purple tint
      paper: "#150D20",   // slightly lifted dark purple
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#9E8FAF", // muted purple-grey
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: "1.5rem",
          paddingBlock: "0.6rem",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #1ED8CC, #D81B8E)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(135deg, #25EDE0, #F020A0)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #2E1A3A",
        },
      },
    },
  },
});

export default theme;
