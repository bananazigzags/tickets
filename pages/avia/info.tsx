import { Grid } from "@mui/material";
import { SearchResult } from "../../components/index";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Info() {
  const searchData = useSelector((state: RootState) => state.search);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        minHeight: "100vh",
        margin: "auto",
      }}
    >
      <SearchResult 
        from={searchData.from}
        to={searchData.to}
        dateStart={searchData.dateStart}
        dateFinish={searchData.dateFinish}
        isLuggageIncluded={true}
      />
    </Grid>
  )
}