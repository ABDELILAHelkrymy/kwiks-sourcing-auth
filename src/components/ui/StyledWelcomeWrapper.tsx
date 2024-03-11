'use client';
import { colors } from "@/utils/theme/colors";
import { Box, styled } from "@mui/material";

export const StyledWelcomeWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: "1.5rem",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}))