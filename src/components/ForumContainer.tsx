import { Box, Button, Typography, Stack } from "@mui/material";
import { ArrowUpFromLineIcon, SearchIcon } from 'raster-react';
import AddNotesBox from "./AddNotesBox";
import { useEffect, useState } from "react";
import NotesBox from "./NotesBox";
import React from "react";
import axios from "axios";

const baseURL = "https://679bf08933d316846325966b.mockapi.io/ap/v1/posts"; 
// const baseURL = "http://localhost:3000/posts"; // DEV Api local

export default function ForumContainer() {
  interface Post {
    id: number;
    date: string;
    post: string;
  }
  
  const [posts, setPost] = React.useState<Post[]>([]);
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

  // Stellt einmalige Abfrage an REST API
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
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
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
        <Stack spacing={4} direction="row">
          <Button
            variant="text"
            startIcon={<ArrowUpFromLineIcon size={25} color="" strokeWidth={0.25} radius={1} />}
            style={{ borderRadius: 13 }}
            onClick={handleToggleAddNotes}
          >
            Neuer Rückblick
          </Button>
          <Button
            variant="text"
            startIcon={<SearchIcon size={25} color="" strokeWidth={0.25} radius={1} />}
            style={{ borderRadius: 13 }}
            onClick={() => {
              console.log("Suchen");
            }}
            disabled
          >
            Suchen
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
            bgcolor: "primary.light",
            paddingTop: 2,
          }}
        >
          <NotesBox key={index} datum={post.date} inhalt={post.post} />
        </Box>
      ))}
    </Box>
  );
}
