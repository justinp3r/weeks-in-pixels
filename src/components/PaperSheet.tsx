import { Card } from "@mui/material";

export default function PaperSheet({children}: {children: React.ReactNode}) {
  return (
    <Card
      elevation={3}
      sx={{
        display: "flex",
        borderRadius: 7,
        ":hover": {
          boxShadow: 10,
        },
      }}
    ></Card>
  );
}
