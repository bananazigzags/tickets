import {
  Box,
  Stack,
  Button,
} from "@mui/material"
import { CityInput, DateInput } from "./index";

export const SearchPanel = () => {
  return (
    <Stack>
      <Box
        sx={{
          backgroundColor: "#5C87DB",
          borderRadius: "15px 15px 0 0", 
        }}
      >
        <Stack direction="row" spacing={4} sx={{p: 3.75}}>
          <CityInput label="Откуда" placeholder="Город вылета" />
          <CityInput label="Куда" placeholder="Город прилета" />
          <DateInput label="Туда" />
          <DateInput label="Обратно" />
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
    </Stack>
  )
}
