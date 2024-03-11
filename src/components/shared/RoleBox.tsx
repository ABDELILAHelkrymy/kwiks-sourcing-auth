import React from 'react'
import { Box, Typography } from '@mui/material';
import { colors } from '../../utils/theme/colors';

type RoleBoxProps = {
    roleIcon: React.ReactNode,
    roleName: string,
}



const RoleBox = ({ roleIcon, roleName }: RoleBoxProps) => {
    return (

        <Box p={2} border={`1px solid ${colors.gray[200]}`} borderRadius={2}>
            <Box display="flex" flexDirection="column" alignItems="center" px={6}>
                <Box
                    sx={{
                        backgroundColor: colors.brand["50"],
                        borderRadius: '50%',
                        padding: '8px',
                        width: '32px',
                        height: '32px',
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: colors.brand["100"],
                            borderRadius: '50%',
                            padding: '5px',
                            width: '28px',
                            height: '28px',
                            position: "absolute",
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Box
                            sx={{
                                color: colors.brand["500"],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            {roleIcon}
                        </Box>
                    </Box>
                </Box>
                <Typography variant="h6">{roleName}</Typography>
            </Box>
        </Box>
    )
}

export default RoleBox