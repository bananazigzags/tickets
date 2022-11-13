import { Box } from "@mui/material";
import { TextProp } from "../types"

export const InfoBox = ({ text }: TextProp) => {
  return (
    <Box sx={{
      fontSize: "12px",
      borderRadius: "15px 0 15px 0",
      p: "6px 24px",
      backgroundColor: "#8BA5D8",
      color: "white",
    }}
    >
      {text}
    </Box>
  )
}
