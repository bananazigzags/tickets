import { TextField } from "@mui/material";
import Calendar from "../public/calendar 1.svg";
import { styled } from "@mui/material/styles";
import { InputProps } from "./types";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: white
  },
`

export const DateInput = ({ label }: Omit<InputProps, "placeholder">) => {
  return (
    <StyledTextField
      placeholder="дд.мм.гг"
      label={label}
      InputLabelProps={{ className: "inputLabel"}}
      InputProps={{
        startAdornment: <Calendar width="30px" />
      }}
      sx={{
        '& legend': { display: 'none' },
        '& fieldset': { top: 0 },
      }}
    >
    </StyledTextField>
  )
}
