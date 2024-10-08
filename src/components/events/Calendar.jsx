// Package Imports
import React from "react";
import { Paper } from "@mui/material";

export const Calendar = () => {
  return (
    <Paper id="calendar">
      <iframe
        title="event-calendar"
        src="https://calendar.google.com/calendar/embed?src=c_jqe8o487n3o90hra8fgg7foq2k%40group.calendar.google.com&ctz=America%2FEdmonton"
        style={{ border: 0, width: "100%", height: "400px" }}
        frameBorder="0"
        scrolling="no"
      />
    </Paper>
  );
};
