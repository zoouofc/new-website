// Package Imports
import React from "react";
import { Typography, Box, Button, useTheme, Container } from "@mui/material";

export const StyledButton = ({}) => {
  const theme = useTheme();

  return (
    <Button sx={{ justifyContent: "end" }} variant="filled">
      Download
    </Button>
  );
};
