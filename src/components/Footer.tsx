import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography
      display={"flex"}
      paddingTop={5}
      justifyContent={"center"}
      component={"span"}
      color={"secondary.dark"}
      variant="body2"
    >
      Copyright ® {new Date().getFullYear()},<br />
      Justin Perrone
    </Typography>
  );
}
