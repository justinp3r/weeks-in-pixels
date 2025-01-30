import { Box, Checkbox, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";

function getWeekNumber(d: Date) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return weekNo;
}

interface argumentYearIF {
  argumentYear: string;
}

export default function OneYearCheckboxes({ argumentYear }: argumentYearIF) {
  const a1 = Array.from({ length: 52 }, () => false);
  const currentCalenderWeek = getWeekNumber(new Date());
  a1.forEach((item, i) => {
    if (i < currentCalenderWeek) {
      a1[i] = !item;
    }
  });

  const [checkedState, setCheckedState] = useState(
    a1 // 52 Wochen = 52 Checkboxen
  );

  const handleCheckboxChange = (index: number) => {
    const updatedState = [...checkedState];
    updatedState[index] = !updatedState[index];
    setCheckedState(updatedState);
    console.log(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        minHeight: "100",
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 6,
        paddingTop: 3,
        margin: "auto",
      }}
    >
      <Typography component={"span"}>
        {" "}
        <h3>{argumentYear.toString()} </h3>
      </Typography>
      <Grid container spacing={0}>
        {checkedState.map((isChecked, index) => (
          <Grid key={index}>
            <Tooltip title={"KW" + (index + 1)} placement="top-start">
              <Checkbox
                checked={isChecked}
                onChange={() => handleCheckboxChange(index)}
                id={`${argumentYear}-week-checkbox-${index + 1}`}
                color="primary"
                disabled
              />
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
