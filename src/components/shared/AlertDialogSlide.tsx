import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Typography } from '@mui/material';

interface AlerteTypes {
    title: string;
    subtitle?: React.ReactNode;
    body: React.ReactNode;
    open: boolean;
    handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ title, subtitle, body, open, handleClose }: AlerteTypes) {


    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    {title && (<Typography variant="h6">{title}</Typography>)}
                    {subtitle && (<Typography variant="body2">{subtitle}</Typography>)
                    }
                </DialogTitle>
                <DialogContent>
                    {body}
                </DialogContent>
            </Dialog>
        </>
    );
}
