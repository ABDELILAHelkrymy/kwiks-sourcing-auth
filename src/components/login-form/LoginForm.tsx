'use client';
import React from 'react'
import { Button, Typography, Grid, Box, Divider, OutlinedInput, InputAdornment, IconButton, FormControl } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Root } from '@/components/ui/DividerRoot';
import { StyledCustomLink } from '@/components/ui/StyledCustomLink';
import ProviderButton from '../lib/provider-button/ProviderButton';
import { colors } from '@/utils/theme/colors'
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession, signIn } from 'next-auth/react';

type Props = {}
type LoginFormProps = {
    email: string;
    password: string;
}

const LoginForm = (props: Props) => {
    const { data: session, status } = useSession();
    const loginSchema: ZodType<LoginFormProps> = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
        resolver: zodResolver(loginSchema)
    });

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = async () => {
        if (status === 'unauthenticated') {
            await signIn('keycloak', {
                redirect: true,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <Box width={400}>
                <Typography variant="h4">Welcome back!</Typography>
                <Typography variant="body2" color={colors.gray["500"]}>Don&apos;t have an account? <StyledCustomLink href="#">Sign up</StyledCustomLink></Typography>
                <Box mt={4} display='flex' flexDirection="column" alignContent="space-between">
                    <FormControl variant="standard" sx={{ marginBottom: "16px" }}>
                        <Typography variant="body2" color={colors.black} fontWeight={600}>Email Address</Typography>
                        <OutlinedInput
                            id='outlined-adornment-email'
                            type='email'
                            {...register('email')}
                        />
                        {errors.email && (
                            <Typography variant="caption" color={colors.error["400"]} fontWeight={600}>
                                {errors.email.message}
                            </Typography>
                        )}
                    </FormControl>
                    <FormControl variant="outlined">
                        <Typography variant="body2" color={colors.black} fontWeight={600}>Password</Typography>
                        <OutlinedInput
                            {...register('password')}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {errors.password && (
                            <Typography variant="caption" color={colors.error["400"]} fontWeight={600}>
                                {errors.password.message}
                            </Typography>
                        )}
                    </FormControl>

                    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                        <Typography variant="body2" color={colors.gray["500"]}>Forgot password? <StyledCustomLink href="#">Recover</StyledCustomLink></Typography>
                    </Box>

                    <Button type='submit' variant="contained" color="primary" sx={{ marginTop: "32px" }}>Login</Button>

                    <Box mt={4} display="flex" justifyContent="center">
                        <Root>
                            <Divider><Typography variant="body2" color={colors.gray["500"]}>Or</Typography></Divider>
                        </Root>
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                        <ProviderButton iconSrc="/images/icons/google.png" altText="Google" label="Google" />
                        <ProviderButton iconSrc="/images/icons/twitter.png" altText="Facebook" label="Twitter" />
                    </Box>
                </Box>
            </Box>
        </form>
    )
}

export default LoginForm