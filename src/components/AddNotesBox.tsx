import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ArrowUpFromLineIcon, XIcon } from 'raster-react';
import { SetStateAction, useState } from "react";

interface AddNotesBoxProps {
  onClose: () => void;
  onAddNote: (note: string) => void;
}

export default function AddNotesBox({ onClose, onAddNote }: AddNotesBoxProps) {
  const today = new Date();
  const [text, setText] = useState("");

  const handleTextChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setText(event.target.value);
  };

  const handleAddClick = () => {
    onAddNote(text);
    setText("");
  };

  return (
    <Box
      sx={{
        bgcolor: "#fffff",
        minHeight: "300px",
        paddingLeft: 2,
        paddingRight: 2,
        paddingBottom: 2,
        paddingTop: 0.5,
        margin: "auto",
        borderRadius: 4,
        border: "2px solid",
        borderColor: "#dbdde9",
      }}
    >
      <Typography component={"span"}>
        <h3>
          Rückblick vom{" "}
          {today.getDate() +
            "." +
            (today.getMonth() + 1) +
            "." +
            today.getFullYear()}
        </h3>
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Text"
        multiline
        rows={8}
        fullWidth
        value={text}
        onChange={handleTextChange}
      />
      <Typography component={"span"}>
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }} paddingTop={2}>
          <Button
            variant="text"
            startIcon={<ArrowUpFromLineIcon size={25} color="" strokeWidth={0.25} radius={1} />}
            style={{ borderRadius: 13 }}
            onClick={handleAddClick}
          >
            Hinzufügen
          </Button>
          <Button
            variant="text"
            startIcon={<XIcon size={25} color="" strokeWidth={0.25} radius={1} />}
            style={{ borderRadius: 13 }}
            onClick={onClose}
          >
            Schließen
          </Button>
        </Stack>
      </Typography>
    </Box>
  );
}
