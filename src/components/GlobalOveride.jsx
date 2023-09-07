import { createTheme, responsiveFontSizes } from '@mui/material/styles';

 function GlobalStyleOverrides() {
  const theme = createTheme({       
    typography: {
      fontFamily: [
        "Poppins",
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),         
      body1: {
        fontFamily: "'Poppins', Arial, sans-serif",
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              textTransform: 'none',
              border: `10px dashed red`,
            },
          },              
        ],
      },
    },
  });

  return responsiveFontSizes(theme);
}

export default GlobalStyleOverrides;