
import { createTheme } from "@mui/material/styles";
import createStyled from "@mui/system/createStyled";

import TextField from '@mui/material/TextField';

const defaultTheme = createTheme({});
const styled = createStyled({ defaultTheme });

const CustomTextField = styled(TextField)(
  ({ theme, size }) => ({
    "& .MuiOutlinedInput-root": {
      height: size === "small" ? theme.spacing(5) : theme.spacing(6)
    },
    "& .MuiInputLabel-root": {
      transform: "translate(14px, 8px) scale(1)"
    },
   "& .MuiInputLabel-shrink": {
      transform: "translate(12px, -9px) scale(0.75)",
      fontSize: "20px",
      fontWeight: 500,
      letterSpacing: 0.6,
      lineHeight: '20px',
      "&.MuiInputLabel-sizeSmall": {
        transform: "translate(12px, -9px) scale(0.75)"
      }
    }
  })
);

const  BasicTextFields = ()=> {
  return (
    <CustomTextField
      id="outlined-basic"
      label="long"
      variant="standard"
      size="large"
      InputLabelProps={{ shrink: true }}
    />
  );
}

export default BasicTextFields;