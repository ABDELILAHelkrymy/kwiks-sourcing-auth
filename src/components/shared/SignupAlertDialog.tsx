import React from 'react'
import { useRouter } from 'next/navigation'
import { StyledCustomLink } from '../ui/StyledCustomLink';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import AlertDialogSlide from './AlertDialogSlide';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RoleBox from './RoleBox';


type RolePropsType = {
    roleName: "Recruteur" | "Entreprise";
}

const SignupAlertDialog = () => {
    const router = useRouter()
    const [open, setOpen] = React.useState(false);
    const [role, setRole] = React.useState<RolePropsType>()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = (roleName: RolePropsType) => {
        setRole(roleName)
    }

    const data = [
        {
            roleName: "Recruteur",
            roleIcon: <AccountCircleOutlinedIcon />
        },
        {
            roleName: "Entreprise",
            roleIcon: <BusinessCenterOutlinedIcon />
        }
    ]

    return (
        <>
            <StyledCustomLink onClick={handleClickOpen} href={''}>Sign up</StyledCustomLink>

            <AlertDialogSlide
                title="You are"
                subtitle="Update your plan payment details."
                body={
                    <Stack direction="row" justifyContent="space-between" width={480}>
                        {
                            data.map((role) => (
                                <ButtonBase
                                    key={role.roleName}
                                    onClick={() => {
                                        router.push(`/register/?role=${role.roleName.toLowerCase()}`)
                                        handleClick(role.roleName as unknown as RolePropsType)
                                    }}
                                >
                                    <RoleBox roleName={role.roleName} roleIcon={role.roleIcon} />
                                </ButtonBase>
                            ))
                        }
                    </Stack>
                }
                open={open}
                handleClose={handleClose}
            />
        </>
    )
}

export default SignupAlertDialog