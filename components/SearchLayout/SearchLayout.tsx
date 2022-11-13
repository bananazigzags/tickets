import { Grid } from "@mui/material"

export const SearchLayout = ({children}: {children: React.ReactNode}) => {
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
      {children}
    </Grid>
  )
}
