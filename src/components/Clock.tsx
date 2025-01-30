import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Bereinigt das Interval beim Unmounten
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        minHeight: "100",
        padding: 2,
        margin: "auto",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography component={"span"}>
        <h3>{time.toLocaleTimeString()}</h3>
      </Typography>
    </Box>
  );
}
