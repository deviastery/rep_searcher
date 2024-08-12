import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: '#2196F3',
                },
            },
        },
    },
});

export default theme;