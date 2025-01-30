import { Box, Typography } from "@mui/material";

export default function Calendar() {
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
        <h3>
          {new Date().toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })}
        </h3>
      </Typography>
    </Box>
  );
}
