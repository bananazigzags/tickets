import { TextField } from "@mui/material";
import Calendar from "../../public/calendar 1.svg";
import { styled } from "@mui/material/styles";
import { InputProps } from "../types";
import { useState } from "react";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: white
  },
`

export const DateInput = ({ name, label, value, onInput }: Omit<InputProps, "placeholder">) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = () => {
    setFocused(true)
  }
  const handleBlur = () => {
    setFocused(false)
  }
  return (
    <StyledTextField
      placeholder="дд.мм.гг"
      name={name}
      label={label}
      value={value}
      onChange={onInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      InputLabelProps={{ className: "inputLabel"}}
      InputProps={{
        startAdornment: <Calendar fill="white" width="30px" stroke={focused ? "#5C87DB" : "#5C5C5C"}/>
      }}
      sx={{
        '& legend': { display: 'none' },
        '& fieldset': { top: 0 },
      }}
    >
    </StyledTextField>
  )
}
