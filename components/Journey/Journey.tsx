import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import {
  InfoBox,
  Logo,
  TravelDetails,
  TimeButton,
  StepsList
} from "../index";
import CarryOnIcon from "../../public/carryon.svg";
import LuggageIcon from "../../public/luggage.svg";
import { TimePeriod, Map } from "../types";
import { citiesCodes } from "../constants";

type JourneyProps = {
  from: string,
  to: string,
  availableTimes?: TimePeriod[],
  dateStart: string,
  dateFinish: string,
  isLuggageIncluded: boolean,
  twoWay?: boolean,
  carrier: string,
  type?: string,
}

export const Journey = (
  { availableTimes, from, to, dateStart, dateFinish, isLuggageIncluded, twoWay, carrier, type }: JourneyProps
  ) => {
  const time = availableTimes && availableTimes[0];
  const [selectedTime, setSelectedTime] = useState(time);

  const handleClick = (time: TimePeriod) => {
    setSelectedTime(time);
  }

const icons: Map = {
    "S7 Airlines": "/logo.svg",
    "РЖД": "/trainlogo.svg",
    "FlixBus": "/flixbuslogo.svg",
  }

  return (
    <Grid container sx={{paddingBottom: "41px"}}>
      <Grid item xs="auto">
        <Stack justifyContent="flex-start" alignItems="flex-start">
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <InfoBox text="Невозвратный" />
            <Logo text={carrier} iconUrl={icons[carrier]}/>
          </Stack>
        </Stack>
      </Grid>
      <Grid item sx={{
        flexGrow: 1,
        paddingLeft: "24px",
        borderTop: twoWay ? "1px dashed #5C87DB" : ""
        }}
        >
        <Grid
          container 
          justifyContent="space-between"
          alignItems="center"
          sx={{
            margin: "40px 0 24px 0",
            width: "100%",
          }}
        >
          <Grid item xs={1}>
            <TravelDetails 
              time={selectedTime?.start || "22:57"}
              city={from}
              date={dateStart}
            />
          </Grid>
          <Grid item xs={6} sx={{padding: "0 38px"}}>
            <StepsList steps={type === "avia" ?[citiesCodes[from], citiesCodes[to]] : [from, to]} />
          </Grid>
          <Grid item xs={1}>
            <TravelDetails 
              time={selectedTime?.finish || "11:05"}
              city={to}
              date={dateFinish}
            />
          </Grid>
          <Grid item xs={2}>
            <Stack
              direction="row" justifyContent="center"
              sx={{
                gap: "10px",
                paddingRight: "20px"
              }}>
              <CarryOnIcon />
              {isLuggageIncluded ? <LuggageIcon /> : null}
            </Stack>
          </Grid>
        </Grid>
        { availableTimes ? (
          <Grid container sx={{gap: "20px"}}>
            {availableTimes.map((time, index) => 
            <TimeButton
              key={index}
              onClick={() => handleClick(time)}
              start={time.start}
              finish={time.finish}
              active={time === selectedTime}
            />)}
          </Grid>
        ) : null
        }
      </Grid>
    </Grid>
  )
}


