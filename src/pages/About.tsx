
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function About() {
 const borderLine="1px";
  return (
    <Grid
        justifyContent={"space-evenly"}
        container
        spacing={2}
        border={borderLine + " solid grey"}
      >
        <Grid size={{ xs: 10, md: 10 }} border={borderLine + " solid red"} paddingTop={2}>
          <Grid
            border={borderLine + " solid orange"}
            paddingBottom={8}
            display="flex"
            justifyContent={"space-between"}
          >
            <Typography component={"span"}>Hi! Hallo</Typography>
          </Grid>
          
        </Grid>
        </Grid>
   
  );
}
