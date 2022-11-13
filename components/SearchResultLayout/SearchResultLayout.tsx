import { Grid } from "@mui/material";

export const SearchResultLayout = (
  {children}: {children: React.ReactNode}
) => {
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
    >{children}</Grid>
  )
}
