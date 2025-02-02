import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { InfoIcon } from "raster-react";

export default function About() {
  const borderLine = "0px";
  const borderRadius = 5;
  const elevationHeight = 3;
  const elevationHeightActivated = 20;
  return (
    <Grid
      justifyContent={"space-evenly"}
      container
      spacing={2}
      border={borderLine + " solid grey"}
    >
      <Grid
        size={{ xs: 10, md: 10 }}
        border={borderLine + " solid red"}
        paddingTop={2}
      >
        <Grid
          border={borderLine + " solid orange"}
          paddingBottom={8}
          display="flex"
          justifyContent={"center"}
        >
          <Card
            elevation={elevationHeight}
            sx={{
              display: "flex",
              borderRadius: borderRadius,
              ":hover": {
                boxShadow: elevationHeightActivated,
              },
            }}
          >
            <Box
              sx={{
                bgcolor: "primary.light",
                minHeight: "100",
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 5,
                paddingTop: 3,
                margin: "auto",
                width: "100%",
              }}
            >
              <InfoIcon size={25} color="" strokeWidth={0.25} radius={1} />
              <Typography variant={"h6"} component={"span"}>
               About
              </Typography>
              <Typography component={"span"}><br/>Diese Website lässt dich das Jahr in Checkboxen anschauen und Notizen verfassen.
              Alternativ kann das Projekt in einem Docker Container lokal deployed werden.
              Die dafür benötigte REST API, welche ebenfalls in einem Container läuft, findet sich auf GitHub</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
