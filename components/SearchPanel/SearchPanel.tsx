import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/searchSlice"
import { SearchState } from "../../redux/searchSlice";

import {
  Box,
  Stack,
  Button,
} from "@mui/material"
import { CityInput, DateInput } from "../index";

import { DATE_REGEX } from "../constants";

type SearchPanelProps = {
  type: "avia" | "train" | "bus"
}

const REQUIRED_ENTRIES = ["from", "to", "dateStart"]

const strToDate = (dateString: string) => {
  let dateStrArr: string[] = dateString.split(".");
  return new Date(+(`20${dateStrArr[2]}`), +(dateStrArr[1]) - 1, +dateStrArr[0])
} 
const isReturnDateValid = (dateStart: string, dateFinish: string) => {
  return strToDate(dateFinish) >= strToDate(dateStart)
}

const isSearchValid = (form: SearchState) => {
  if(form.dateFinish.length > 0 && !form.dateFinish?.match(DATE_REGEX)) return false;
  if(form.dateFinish && !isReturnDateValid(form.dateStart, form.dateFinish)) return false;
  if(REQUIRED_ENTRIES.every(entry => form[entry].length > 0) && form.dateStart.match(DATE_REGEX)) return true
}

export const SearchPanel = ({type}: SearchPanelProps) => {
  const [flightsForm, setFlightsForm] = useState({
    from: "",
    to: "",
    dateStart: "",
    dateFinish: "",
  })
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlightsForm({...flightsForm, [event.target.name]: event.target.value })
  }

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName?: string, selectedOption?: string) => {
    selectedOption && fieldName ? setFlightsForm({...flightsForm, [fieldName]: selectedOption }) :
    setFlightsForm({...flightsForm, [event.target.name]: event.target.value })
  }

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(setSearch(flightsForm));
    router.push(`/${type}/info`);
  }

  return (
    <Stack>
      <form onSubmit={handleSearch}>
        <Box
          sx={{
            backgroundColor: "#5C87DB",
            borderRadius: "15px 15px 0 0", 
          }}
        >
          <Stack direction="row" spacing={4} sx={{p: 3.75}}>
            <CityInput
              label="????????????"
              placeholder={`?????????? ${type === "avia" ? "????????????" : "??????????????????????"}`}
              value={flightsForm.from}
              onInput={handleCityChange}
              name="from"
            />
            <CityInput 
              label="????????"
              placeholder={`?????????? ${type === "avia" ? "??????????????" : "????????????????"}`}
              value={flightsForm.to}
              onInput={handleCityChange}
              name="to"
            />
            <DateInput
              label="????????"
              value={flightsForm.dateStart}
              onInput={handleChange}
              name="dateStart"
            />
            <DateInput
              label="??????????????"
              value={flightsForm.dateFinish}
              onInput={handleChange}
              name="dateFinish"
            />
          </Stack>
        </Box>
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: "0 0 15px 15px",
            backgroundColor: "white", 
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={4}
            sx={{p: 3.75}}
          >
            <Button
              type="submit"
              sx={{
                p: "10px 28px",
                backgroundColor: "#5C87DB",
                color: "white",
                "&:hover": {
                  backgroundColor: "#5C87DB",
                },
                "&:active": {
                  backgroundColor: "#3E67B7",
                },
                "&:disabled": {
                  backgroundColor: "#B7BAC1",
                  color: "white",
                },
                borderRadius: 1.25,
                textTransform: "unset",
              }}
              disabled={!isSearchValid(flightsForm)}
            >?????????? ????????????</Button>
          </Stack>
        </Box>
      </form>
    </Stack>
  )
}
