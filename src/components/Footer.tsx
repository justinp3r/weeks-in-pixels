import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Footer() {
  return (
    <Grid size={{ xs: 11, md: 5 }} >
      <Box component="footer">
        <Typography
          display={"flex"}
          paddingTop={2}
          paddingBottom={2}
          justifyContent={"center"}
          component={"span"}
          color={"secondary.dark"}
          variant="body2"
        >
          Copyright ® {new Date().getFullYear()},<br />
          Justin Perrone
        </Typography>
      </Box>
    </Grid>
  );
}
