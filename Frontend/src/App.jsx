import { Button, Container } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from 'react-router-dom'; // Import Route
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <Container maxW="620px">
      <Header /> {/* Moved closing tag for Header */}
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
