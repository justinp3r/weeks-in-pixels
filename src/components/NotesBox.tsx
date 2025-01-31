import { Box, Typography } from "@mui/material";

interface textinhalt {
  inhalt: string;
  datum: string;
}

export default function NotesBox({ inhalt, datum }: textinhalt) {
  return (
    <Box
      sx={{
        bgcolor: "secondary.light",
        paddingLeft: 2,
        paddingRight: 2,
        paddingBottom: 2,
        paddingTop: 0.5,
        margin: "auto",
        borderRadius: 4,
        border: "2px solid",
        borderColor: "#dbdde9",
        width:"100%"
      }}
    >
      <Typography variant="body1">{datum} </Typography>
      <Typography variant="body2">{inhalt} </Typography>
    </Box>
  );
}