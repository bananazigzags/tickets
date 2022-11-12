import { ChangeEvent, SyntheticEvent, useState } from "react";

import {
  TextField,
  Autocomplete,
} from "@mui/material"

import { styled } from "@mui/material/styles";
import { InputProps } from "./types";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: white
  },
`

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Владивосток",
  "Новосибирск",
  "Сочи",
  "Лондон",
  "Нью-Йорк"
]

export const CityInput = ({ label, name, placeholder, value, onInput }: InputProps) => {
  const [open, setOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInput && onInput(e);
    if (value.length > 0) {
      setOpen(true)
    }
  }
  const handleSelect = (e: SyntheticEvent, selectedOption: string) => {
    console.log("hello")
    console.log(e.target)
    onInput && onInput(e as ChangeEvent<HTMLInputElement>, name, selectedOption);
    setOpen(false);
  }
 
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={cities}
      open={open}
      sx={{width: 250}}
      onChange={(e, selectedOption) => handleSelect(e, selectedOption)}
      renderInput={(params) => 
        <StyledTextField {...params} placeholder={placeholder} 
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
          InputLabelProps={{  
            shrink: true,
            className: "inputLabel",
          }}
          sx={{
            '& legend': { display: 'none' }, '& fieldset': { top: 0 },
          }}
        />}
    />
  )
}