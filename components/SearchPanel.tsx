import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice"
import { SearchState } from "../redux/searchSlice";

import {
  Box,
  Stack,
  Button,
} from "@mui/material"
import { CityInput, DateInput } from "./index";

import { DATE_REGEX } from "../constants";

export const SearchPanel = () => {
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

  const isSearchValid = (form: SearchState) => {
    return Object.values(form).every(entry => entry.length > 0) && form.dateStart.match(DATE_REGEX) && form.dateFinish.match(DATE_REGEX)
  }

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if(isSearchValid(flightsForm)) {
      dispatch(setSearch(flightsForm));
      router.push("/avia/info");
    }
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
              label="Откуда"
              placeholder="Город вылета"
              value={flightsForm.from}
              onInput={handleChange}
              name="from"
            />
            <CityInput 
              label="Куда"
              placeholder="Город прилета"
              value={flightsForm.to}
              onInput={handleChange}
              name="to"
            />
            <DateInput
              label="Туда"
              value={flightsForm.dateStart}
              onInput={handleChange}
              name="dateStart"
            />
            <DateInput
              label="Обратно"
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
                backgroundColor: "#5C87DB",
                color: "white",
                "&:hover": {
                  backgroundColor: "#5C87DB",
                },
                "&:active": {
                  backgroundColor: "#3E67B7",
                },
                borderRadius: 1.25
              }}
            >Найти билеты</Button>
          </Stack>
        </Box>
      </form>
    </Stack>
  )
}