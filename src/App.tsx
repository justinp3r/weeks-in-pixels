import { ThemeProvider } from "@emotion/react";
import HeaderBar from "./components/AppBar";
import { themeJustin } from "./theme";
import { Outlet, useLocation } from "react-router";
import { Card, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid2";
import OneYearCheckboxes from "./components/OneYearCheckboxes";
import ForumContainer from "./components/ForumContainer";
import { darkTheme } from "./themeDark";
import { useState } from "react";
import Clock from "./components/Clock";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const borderLine = "0px"; // Only for developement Mode
  const borderRadius = 5;
  const elevationHeight = 3;
  const elevationHeightActivated = 20;
  const location = useLocation();
  const isRootRoute = location.pathname === "/";

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : themeJustin}>
      <CssBaseline />
      <HeaderBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Outlet />
      {isRootRoute && (
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
            size={{ xs: 10, md: 5 }}
            border={borderLine + " solid red"}
            paddingTop={2}
          >
            <Grid
              border={borderLine + " solid orange"}
              paddingBottom={{ xs: 4, md: 8 }}
              display="flex"
              justifyContent={"space-between"}
            >
              <Grid
                size={{ xs: 5.5, md: 5.5 }}
                border={borderLine + " solid red"}
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
                  <Clock />
                </Card>
              </Grid>

              <Grid
                size={{ xs: 5.5, md: 5.5 }}
                border={borderLine + " solid red"}
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
              <OneYearCheckboxes argumentYear={new Date().getFullYear()}></OneYearCheckboxes>
            </Card>
          </Grid>
          <Grid
            size={{ xs: 10, md: 5 }}
            border={borderLine + " solid green"}
            paddingTop={2}
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
              <ForumContainer></ForumContainer>
            </Card>
          </Grid>
        </Grid>
      )}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
