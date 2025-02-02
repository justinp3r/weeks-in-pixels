import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { FormControlLabel, FormGroup, Icon, IconButton, Typography } from "@mui/material";
import { MaterialUISwitch } from "./DarkModeToggle";
import { useNavigate } from "react-router-dom";

interface HeaderBarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function HeaderBar({ isDarkMode, setIsDarkMode }: HeaderBarProps) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={() => navigate("/")}
          >
            <Icon>
              <img src={"cloud.png"} height={25} width={25} />
            </Icon>
          </IconButton>
          <Typography component={"span"} sx={{ flexGrow: 1 }}>
            WEEKS IN PIXELS
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                />
              }
              label=""
            />
          </FormGroup>
          <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
