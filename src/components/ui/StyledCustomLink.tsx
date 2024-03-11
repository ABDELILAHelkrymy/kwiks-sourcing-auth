
'use client';
import { colors } from '@/utils/theme/colors';
import { styled } from '@mui/material';
import Link from 'next/link';


export const StyledCustomLink = styled(Link)(({ theme }) => ({
    color: colors.brand["500"],
    textDecoration: "none",
    "&:hover": {
        textDecoration: "none",
    }
}))