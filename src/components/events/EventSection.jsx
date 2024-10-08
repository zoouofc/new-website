// Package Imports
import React from "react";
import { Typography, Grid, Button } from "@mui/material";

// Project-defined Components
import { Calendar } from "./Calendar";

export const EventSection = () => {
  return (
    <>
      <Typography variant="h4" id="events">
        Our Events
      </Typography>
      <Typography variant="body1" sx={{ fontStyle: "italic" }} paragraph>
        ZOO is constantly working hard to bring the student population new
        events, along with some other classics, that will ultimately benefit
        them socially, academically, and professionally.
      </Typography>
      <Typography variant="body1" sx={{ fontStyle: "italic" }} paragraph>
        The following is a non-exhaustive list of some such events we organize!
      </Typography>
      {/* Renders the multiple buttons that can be clicked on to reveal more data on commissioner roles */}
      <Grid container spacing={2} columns={2} sx={{ margin: "unset" }}>
        {/* {commInfo.map((comm) => {
          return (
            <Grid xs={2} md={1}>
              <CommCard
                role={comm.commRole}
                description={comm.commDescription}
                names={comm.commNames}
              />
            </Grid>
          );
        })} */}
      </Grid>
      <Typography variant="h5">...and More!</Typography>
      <Typography variant="body1" sx={{ fontStyle: "italic" }} paragraph>
        If you're curious to see what’s up and coming from ZOO, check out our
        calendar below!
      </Typography>
      <Calendar />
      <Typography variant="h4">Our Past Events</Typography>{" "}
      <Typography variant="body1" sx={{ fontStyle: "italic" }} paragraph>
        Interested in our past events? Check our event/activity gallery for a
        look into our other successful events
      </Typography>
      <Button variant="filled">VIEW GALLERY</Button>
    </>
  );
};
