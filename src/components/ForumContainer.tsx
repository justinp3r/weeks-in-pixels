import { Box, Button, Typography, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddNotesBox from "./AddNotesBox";
import { useEffect, useState } from "react";
import NotesBox from "./NotesBox";
import React from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/posts";

export default function ForumContainer() {
  const [posts, setPost] = React.useState([]);
  const [showAddNotes, setShowAddNotes] = useState(false);

  const handleReloadNotes = async () => {
    try {
      const response = await axios.get(baseURL);
      setPost(response.data);
    } catch (error) {
      console.error("Fehler beim Neuladen der Posts:", error);
    }
  };

  const handleToggleAddNotes = () => {
    setShowAddNotes(true);
  };

  const handleCloseAddNotes = () => {
    setShowAddNotes(false);
  };

  const handleAddNote = async (text: string) => {
    const newEntry = {
      date:
        new Date().toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }) +
        " - " +
        new Date().toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      post: text,
    };
    try {
      await axios.post(baseURL, newEntry);
      await handleReloadNotes(); // Reload after successful post
      setShowAddNotes(false);
    } catch (error) {
      console.error("Error adding note:", error);
      // Handle error, perhaps display a message to the user
    }
  };

  useEffect(() => {
    handleReloadNotes();
  }, []);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

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
        width: "100%",
      }}
    >
      <Typography component={"span"}>
        <h3>Deine Rückblicke</h3>
        <i>Alle Rückblicke werden dir hier angezeigt.</i>
      </Typography>

      <Typography component={"span"}>
        <Stack spacing={2} direction="row">
          <Button
            variant="text"
            startIcon={<AddCircleOutlineIcon />}
            style={{ borderRadius: 13 }}
            onClick={handleToggleAddNotes}
          >
            Neuer Rückblick
          </Button>
          <Button
            variant="text"
            startIcon={<SearchIcon />}
            style={{ borderRadius: 13 }}
            onClick={() => {
              console.log("Suchen");
            }}
            disabled
          >
            Suchen
          </Button>
          <Button
            variant="text"
            startIcon={<IosShareIcon />}
            style={{ borderRadius: 13 }}
            onClick={() => {
              console.log("Teilen");
            }}
            disabled
          >
            Teilen
          </Button>
        </Stack>
        {showAddNotes && (
          <AddNotesBox
            onClose={handleCloseAddNotes}
            onAddNote={handleAddNote}
          />
        )}
      </Typography>

      {[...posts].reverse().map((post, index) => (
        <Box
          key={post.id}
          sx={{
            bgcolor: "secondary.light",
            padding: 2,
            margin: "auto",
          }}
        >
          <NotesBox key={index} datum={post.date} inhalt={post.post} />
        </Box>
      ))}
    </Box>
  );
}
