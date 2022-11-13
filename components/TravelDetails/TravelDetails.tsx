import { Stack } from "@mui/material";
import styles from "./TravelDetails.module.scss";

type TravelDetailsProps = {
  time: string,
  city: string,
  date: string,
}

export const TravelDetails = ({time, city, date}: TravelDetailsProps) => {
  let dateArr = date.split(".")
  const year = `20${dateArr[2]}`;
  dateArr.splice(2,1,year)
  return (
    <Stack>
      <span className={styles.time}>{time}</span>
      <span className={styles.city}>{city}</span>
      <span className={styles.date}>{dateArr.join(".")}</span>
    </Stack>
  )
}
