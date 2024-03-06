import React from 'react'
import { Typography, Box, } from '@mui/material'
import { StyledWelcomeWrapper } from '@/components/ui/StyledWelcomeWrapper';
import Image from 'next/image'

type Props = {}

const WelcomeSection = (props: Props) => {
    return (
        <>
            <Typography variant="h6" color="white">KWIKS</Typography>
            <Box>
                <Typography variant="h1" color="white" mb={4}>Work with a community of over 300 freelance headhunters</Typography>
                <Typography variant="body1" color="white" pr={14}>Our comprehensive design system offers you an unparalleled range of components, sparking creativity and boosting efficiency.</Typography>
            </Box>
            <StyledWelcomeWrapper>
                <Typography variant="body2" color="white">
                    Rayna has transformed the way our team approaches design.
                    The sheer range of components and the seamless integration of the design system into our workflow have been game-changers. It&apos;s like having a toolkit filled with magic that accelerates our projects without compromising on quality.
                </Typography>
                <Box display="flex" mt={2}>
                    <Image src="/images/users/user-welcome.png" alt="Welcome" width={40} height={40} />
                    <Box mx={2}>
                        <Typography variant="caption" color="white">Ariana Grande</Typography>
                        <Typography variant="caption" color="white">UI/UX Designer</Typography>
                    </Box>
                </Box>
            </StyledWelcomeWrapper>
        </>
    )
}

export default WelcomeSection