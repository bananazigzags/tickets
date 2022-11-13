import { Stack } from "@mui/material";
import styles from "./TravelDetails.module.scss";

type TravelDetailsProps = {
  time: string,
  city: string,
  date: string,
}

export const TravelDetails = ({time, city, date}: TravelDetailsProps) => {
  return (
    <Stack>
      <span className={styles.time}>{time}</span>
      <span className={styles.city}>{city}</span>
      <span className={styles.date}>{date}</span>
    </Stack>
  )
}
