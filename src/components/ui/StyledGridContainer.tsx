'use client';
import { colors } from "@/utils/theme/colors";
import { Grid, styled } from "@mui/material";

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
    height: "100vh",
    backgroundImage: "url(images/background/welcome-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: colors.brand["600"],
    borderRadius: "25px",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "left",
}))