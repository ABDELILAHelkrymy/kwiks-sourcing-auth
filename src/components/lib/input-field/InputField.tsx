import { FormControl, Typography, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { colors } from '@/utils/theme/colors';

import { ReactNode } from 'react';

type InputFieldProps = {
    label: string;
    type: string;
    helperText?: string;
    showPassword?: boolean;
    handleClickShowPassword?: () => void;
    handleMouseDownPassword?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const InputField = ({ label, type, showPassword, helperText, handleClickShowPassword, handleMouseDownPassword }: InputFieldProps) => {
    return (
        <FormControl variant="outlined" sx={{ marginTop: "16px" }}>
            <Typography variant="body2" color={colors.black} fontWeight={600}>
                {label}
            </Typography>
            <OutlinedInput
                type={type}
                id={`outlined-adornment-${label}`}
                endAdornment={
                    showPassword && (
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
                    )
                }
            />
            {helperText && (
                <Typography variant="caption" color={colors.error} fontWeight={600}>
                    {helperText}
                </Typography>
            )}
        </FormControl>
    );
};

export default InputField;