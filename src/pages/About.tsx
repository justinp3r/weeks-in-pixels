import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowLeftIcon, GithubIcon, InfoIcon } from "raster-react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const borderLine = "0px";
  const borderRadius = 5;
  const navigate = useNavigate();

  return (
    <Grid
      justifyContent={"space-evenly"}
      container
      spacing={2}
      border={borderLine + " solid grey"}
      sx={{
        minHeight: "84vh"
      }}
    >
      <Grid
        size={{ xs: 10, md: 10 }}
        border={borderLine + " solid red"}
        paddingTop={2}
        display="flex"
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid border={borderLine + " solid orange"} size={{ xs: 12, md: 7 }}>
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
              borderRadius: borderRadius,
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
              welche ebenfalls in einem Container läuft, findet sich auf GitHub
              <br />
            </Typography>
            <Stack
              spacing={2}
              direction={{ xs: "row", sm: "row" }}
              paddingTop={2}
            >
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

              <Button
                variant="text"
                startIcon={
                  <GithubIcon
                    size={25}
                    color=""
                    strokeWidth={0.25}
                    radius={1}
                  />
                }
                target="_blank"
                to="https://www.github.com/justinp3r"
                style={{ borderRadius: 13 }}
                component={Link}
              >
                GitHub
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
