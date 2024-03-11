'use client'
import { useSearchParams } from 'next/navigation'
import { Button, Container, Grid, Typography } from '@mui/material'
import Header from '../layout/Header'
import { colors } from '@/utils/theme/colors'
import Link from 'next/link'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

type Props = {}

const RegisterPage = (props: Props) => {
    const searchParams = useSearchParams()
    const params: string | null = searchParams?.get('role') ?? null
    return (
        <>
            <Header />
            <>
                <Container>
                    <Grid container py={8} px={21}>
                        <Grid item>
                            <Link href="/">
                                <Button variant="text" color="inherit">
                                    <KeyboardBackspaceOutlinedIcon sx={{ width: 14, height: 14, backgroundColor: colors.white.white }} />
                                    Go Back
                                </Button>
                            </Link>
                            <Typography variant="h2" fontWeight={700}>Create an account</Typography>
                            <Typography variant="subtitle1" color={colors.gray['400']}>Fill out these details to add a new talent</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </>
        </>
    )
}

export default RegisterPage