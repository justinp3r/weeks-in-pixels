import { ThemeProvider } from "@emotion/react";
import HeaderBar from "./components/AppBar";
import { themeJustin } from "./theme";
import { Outlet } from "react-router";
import { Card, CssBaseline, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import OneYearCheckboxes from "./components/OneYearCheckboxes";
import ForumContainer from "./components/ForumContainer";
import { darkTheme } from "./themeDark";
import { useState } from "react";
import Clock from "./components/Clock";
import Calendar from "./components/Calendar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const borderLine = "0px"; // Only for developement Mode
  const borderRadius = 5;
  const elevationHeight = 3;
  const elevationHeightActivated = 20;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : themeJustin}>
      <CssBaseline />
      <HeaderBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Outlet />
      <Grid
        justifyContent={"space-evenly"}
        container
        spacing={2}
        border={borderLine + " solid grey"}
      >
        <Grid size={{ xs: 10, md: 5 }} border={borderLine + " solid red"} paddingTop={2}>
          <Grid
            border={borderLine + " solid orange"}
            paddingBottom={8}
            display="flex"
            justifyContent={"space-between"}
          >
            <Grid size={{ xs: 5.5, md: 5.5 }} border={borderLine + " solid red"}>
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
                <Clock />
              </Card>
            </Grid>

            <Grid size={{ xs: 5.5, md: 5.5 }} border={borderLine + " solid red"}>
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
                <Calendar />
              </Card>
            </Grid>
          </Grid>
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
            <OneYearCheckboxes argumentYear={"2025"}></OneYearCheckboxes>
          </Card>
        </Grid>
        <Grid size={{ xs: 10, md: 5 }} border={borderLine + " solid green"} paddingTop={2} paddingBottom={8}>
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
            <ForumContainer></ForumContainer>
          </Card>
        </Grid>
        <Grid size={{ xs: 10, md: 5 }} border={borderLine + " solid green"} paddingTop={4} paddingBottom={4} >
          <Typography display={"flex"} paddingTop={5} justifyContent={"center"} component={"span"} color={"secondary.dark"} >® 2025 Justin Perrone</Typography>
        </Grid>
        
      </Grid>
    </ThemeProvider>
  );
}

export default App;
