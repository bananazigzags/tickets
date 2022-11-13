import { Grid } from "@mui/material";
import { Journey } from "../index";
import styles from "./SearchResult.module.css";
import { TimePeriod } from "../types";

type SearchResultProps = {
  from: string,
  to: string,
  dateStart: string,
  dateFinish: string,
  isLuggageIncluded: boolean,
  carrier: string,
  type?: string,
}

const availableTimes: TimePeriod[] = [
  {start: "09:20", finish: "11:05"},
  {start: "10:20", finish: "12:05"},
  {start: "11:20", finish: "13:05"},
]

const PRICE_ONE_WAY = "4 150 ₽"
const PRICE_TWO_WAY = "9 350 ₽"

export const SearchResult = (
  {from, to, dateStart, dateFinish, carrier, type, isLuggageIncluded = false}: SearchResultProps
  ) => {
  return (
    <Grid
      container 
      sx={{
        backgroundColor: "white",
        width: "90%",
        borderRadius: "15px",
      }}
    >
      <Grid item xs={10}>
        <Journey 
          from={from}
          to={to}
          dateStart={dateStart}
          dateFinish={dateStart}
          isLuggageIncluded={isLuggageIncluded}
          availableTimes={!dateFinish ? availableTimes : undefined}
          carrier={carrier}
          type={type}
        />
        { dateFinish ? (
          <Journey 
            from={to}
            to={from}
            dateStart={dateFinish}
            dateFinish={dateFinish}
            isLuggageIncluded={isLuggageIncluded}
            twoWay
            carrier={carrier}
            type={type}
          />
        ) : null
        }
      </Grid>
      <Grid item xs={2} sx={{borderLeft: "1px solid #DDE3EE"}}>
        <div className={styles.price}>
          {dateFinish ? PRICE_TWO_WAY : PRICE_ONE_WAY}
        </div>
      </Grid>
    </Grid>
  )
}
