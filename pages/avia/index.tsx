import { Grid } from "@mui/material"
import { SearchPanel } from "../../components/index";

export default function Avia() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#272f3f",
        margin: "auto",
      }}
    >
      <SearchPanel /> 
    </Grid>
  )
}