import { Button } from "@mui/material";
import { TimeButtonProps } from "../types";

export const TimeButton = ({ start, finish, active = false, onClick }: TimeButtonProps) => {
  return (
    <Button
      disableRipple
      onClick={onClick}
      variant={active ? "contained" : "outlined"}
      sx={{
        borderRadius: "10px",
        fontWeight: "500",
        fontSize: "18px",
        backgroundColor: active ? "#DDE3EE" : "white",
        border: active ? "none" : "1px solid #B7BAC1",
        color: active ? "#232323" : "#5C5C5C",
        "&:hover, &:active": {
          backgroundColor: active ? "#DDE3EE" : "white",
          boxShadow: 0
        },
        boxShadow: 0,
      }}
    >{`${start} - ${finish}`}</Button>
  )
}
