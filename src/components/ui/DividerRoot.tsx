'use client';
import { colors } from "@/utils/theme/colors";
import { styled } from "@mui/material";

export const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: colors.gray["100"],
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));