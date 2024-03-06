import { Grid } from '@mui/material'
import { StyledGridContainer } from '@/components/ui/StyledGridContainer';
import WelcomeSection from '@/components/ui/WelcomeSection';
import LoginForm from '@/components/login-form/LoginForm';

type Props = {}



const LoginPage = (props: Props) => {

    return (
        <Grid container justifyContent="center" alignItems="center" p={2}>
            <StyledGridContainer item lg={6} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <WelcomeSection />
            </StyledGridContainer>

            <Grid item lg={6} md={6} display="flex" justifyContent="center" alignContent="center">
                <LoginForm />
            </Grid>
        </Grid >
    )
}

export default LoginPage