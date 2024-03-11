import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

type ProviderButtonProps = {
    iconSrc: string;
    altText: string;
    label: string;
};

const ProviderButton = ({ iconSrc, altText, label }: ProviderButtonProps) => {
    return (
        <Button
            startIcon={<Image alt={altText} src={iconSrc} width={20} height={20} />}
            variant="outlined"
            color="secondary"
            sx={{ marginTop: "32px", width: "48%" }}
        >
            {label}
        </Button>
    );
};

export default ProviderButton;