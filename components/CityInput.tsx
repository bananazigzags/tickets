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

export const CityInput = ({ label, placeholder }: InputProps) => {
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={cities}
      sx={{width: 250}}
      renderInput={(params) => 
        <StyledTextField {...params} placeholder={placeholder} 
        label={label}
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