import { ThemeProvider } from "@emotion/react";
import HeaderBar from "./components/AppBar";
import { themeJustin } from "./theme";
import { Outlet } from "react-router";
import { Card, CssBaseline } from "@mui/material";
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
        <Grid size={{ xs: 8, md: 5 }} border={borderLine + " solid red"}>
          <Grid
            border={borderLine + " solid orange"}
            paddingBottom={8}
            display="flex"
            justifyContent={"space-between"}
          >
            <Grid size={{ xs: 5, md: 5.5 }} border={borderLine + " solid red"}>
              <Card
                elevation={3}
                sx={{
                  display: "flex",
                  borderRadius: 7,
                  ":hover": {
                    boxShadow: 10,
                  },
                }}
              >
                <Clock />
              </Card>
            </Grid>

            <Grid size={{ xs: 5, md: 5.5 }} border={borderLine + " solid red"}>
              <Card
                elevation={3}
                sx={{
                  display: "flex",
                  borderRadius: 7,
                  ":hover": {
                    boxShadow: 10,
                  },
                }}
              >
                <Calendar />
              </Card>
            </Grid>
          </Grid>
          <Card
            elevation={3}
            sx={{
              display: "flex",
              borderRadius: 7,
              ":hover": {
                boxShadow: 10,
              },
            }}
          >
            <OneYearCheckboxes argumentYear={"2025"}></OneYearCheckboxes>
          </Card>
        </Grid>
        <Grid size={{ xs: 8, md: 5 }} border={borderLine + " solid green"}>
          <Card
            elevation={3}
            sx={{
              display: "flex",
              borderRadius: 7,
              ":hover": {
                boxShadow: 10,
              },
            }}
          >
            <ForumContainer></ForumContainer>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
