import { Box, Grid } from '@mui/material'
import { StyledGridContainer } from '@/components/ui/StyledGridContainer';
import WelcomeSection from '@/components/ui/WelcomeSection';
import LoginForm from '@/components/login-form/LoginForm';
import Logo from '@/components/shared/Logo';
import { colors } from '@/utils/theme/colors';

type Props = {}



const LoginPage = (props: Props) => {

    return (
        <Grid container justifyContent="center" alignItems="center" p={2} bgcolor={colors.white.white} height="100vh">
            <StyledGridContainer item lg={6} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <WelcomeSection />
            </StyledGridContainer>

            <Grid item lg={6} md={6} display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" height="100%">
                <Box
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <Logo color={colors.brand["500"]} />
                </Box>
                <LoginForm />
            </Grid>
        </Grid >
    )
}

export default LoginPage