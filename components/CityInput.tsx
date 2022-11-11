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
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={cities}
      sx={{width: 250}}
      renderInput={(params) => 
        <StyledTextField {...params} placeholder={placeholder} 
        name={name}
        label={label}
        value={value}
        onChange={onInput}
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