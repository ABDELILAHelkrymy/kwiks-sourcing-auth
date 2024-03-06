"use client";

import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { colors } from "./colors";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

export const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    mode: "light",
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "p",
          subtitle2: "p",
          body1: "p",
          body2: "p",
          caption: "p",
        },
      },

      styleOverrides: {
        h1: {
          fontSize: "3.5rem",
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.01562em",
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 500,
          lineHeight: 1.2,
          letterSpacing: "-0.00833em",
        },
        h3: {
          fontSize: "2rem",
          fontWeight: 500,
          lineHeight: 1.167,
          letterSpacing: "0em",
        },
        h4: {
          fontSize: "2rem",
          fontWeight: 500,
          lineHeight: 1.235,
          letterSpacing: "0.00735em",
        },
        h5: {
          fontSize: "1.5rem",
          fontWeight: 500,
          lineHeight: 1.334,
          letterSpacing: "0em",
        },
        h6: {
          fontSize: "1.25rem",
          fontWeight: 500,
          lineHeight: 1.6,
          letterSpacing: "0.0075em",
        },
        subtitle1: {
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.75,
          letterSpacing: "0.00938em",
        },
        subtitle2: {
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: 1.57,
          letterSpacing: "0.00714em",
        },
        body1: {
          fontSize: "1.125rem",
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: "0.00938em",
        },
        body2: {
          fontSize: "0.875rem",
          fontWeight: 100,
          lineHeight: 1.43,
          letterSpacing: "0.01071em",
        },
        caption: {
          fontSize: "0.75rem",
          fontWeight: 100,
          lineHeight: 1.66,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",

          "&.MuiButton-contained": {
            boxShadow: "none",
          },
        },
      },

      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: colors.white.white,
            backgroundColor: colors.brand["500"],
            "&:hover": {
              backgroundColor: colors.brand["600"],
            },
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            color: colors.gray["700"],
            borderColor: colors.gray["300"],
            "&:hover": {
              borderColor: colors.gray["500"],
              color: colors.gray["500"],
              backgroundColor: colors.gray["50"],
            },
          },
        },
      ],
    },
  },
});

export default theme;
