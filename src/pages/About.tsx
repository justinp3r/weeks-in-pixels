import { Box, Button, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowLeftIcon, InfoIcon } from "raster-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  const borderLine = "0px";
  const borderRadius = 5;
  const elevationHeight = 3;
  const elevationHeightActivated = 20;
  const navigate = useNavigate();

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
        display="flex"
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid
          border={borderLine + " solid orange"}
          size={{ xs: 12, md: 7 }}
          paddingBottom={8}
          display="flex"
          justifyContent={"center"}
          alignContent={"center"}
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
                paddingBottom: 3,
                paddingTop: 3,
                margin: "auto",
                width: "100%",
              }}
            >
              <InfoIcon size={25} color="" strokeWidth={0.25} radius={1} />
              <Typography variant={"h6"} component={"span"}>
                About
              </Typography>
              <Typography component={"span"}>
                <br />
                Diese Website lässt dich das Jahr in Checkboxen anschauen und
                Notizen verfassen. Alternativ kann das Projekt in einem Docker
                Container lokal deployed werden. Die dafür benötigte REST API,
                welche ebenfalls in einem Container läuft, findet sich auf
                GitHub
                <br/>
              </Typography>
              <Button
                variant="text"
                startIcon={
                  <ArrowLeftIcon
                    size={25}
                    color=""
                    strokeWidth={0.25}
                    radius={1}
                  />
                }
                onClick={() => navigate("/")}
                style={{ borderRadius: 13 }}
              >
                Zurück
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 11, md: 5 }}
        border={borderLine + " solid green"}
        paddingTop={4}
        paddingBottom={4}
      >
        <Footer/>
      </Grid>
    </Grid>
  );
}
