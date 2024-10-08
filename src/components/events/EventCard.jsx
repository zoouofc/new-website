// Package Imports
import React from "react";
import { CardContent, Paper, Typography } from "@mui/material";

export const EventCard = ({ iconSrc, eventName }) => {
  return (
    <Paper elevation={3}>
      <Avatar alt={eventName} src={iconSrc ?? null} variant="rounded" />
      <Typography variant="h4">{eventName}</Typography>
    </Paper>
  );
};

// TODO: Use Paper from materialUI
