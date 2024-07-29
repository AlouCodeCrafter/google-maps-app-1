import React from "react";
import MyMapComponent from "./Map";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Typography variant="h4" gutterBottom>
          Un outil extraordinaire utilisé tous les jours !
        </Typography>
        <MyMapComponent />
      </div>
    </Container>
  );
}

export default App;
