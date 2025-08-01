// Package Imports
import React from "react";
import { Typography, Link, useTheme, Container } from "@mui/material";

export const AboutSection = () => {
  const theme = useTheme();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container maxWidth="md" style={{ margin: theme.spacing(6, 0, 7) }}>
        <Typography variant="h4" id="about-zoo">
          About ZOO
        </Typography>
        <Typography variant="body1" paragraph>
          The University of Calgary's Electrical and Software Engineering
          Students' Society, affectionally referred to as ZOO, is an initiative
          run by students, for students. ZOO aims to support their undergraduate
          students, both academically and socially, by providing them with a
          variety of events to enrich their University experience. Through the
          Society, we hope assist students in clearing the gap between
          university and industry.
        </Typography>
        <Typography variant="body1" paragraph>
          In addition to those responsibilities, ZOO serves as a liaison between
          the Department (ESE) and the many Electrical, Software and Computer
          Engineering students. We work hard to represent your opinions and
          ensure that your voices are heard.
        </Typography>
        <Typography variant="body1" paragraph>
          Any inquiries for ZOO can be voiced in-person in ENA 106, or via email
          to {" "}
          <Link
            href="#"
            sx={{
              color: theme.palette.blue.primary,
              fontWeight: "bold",
            }}
          >
            execs@zooengg.ca
          </Link>
          . We will attempt to answer questions to the best of our ability and
          if necessary, direct you to the relevant Department employee.
        </Typography>
        <Typography paragraph variant="body1" sx={{ fontStyle: "italic" }}>
          ZOO abides by the following{" "}
          <Link
            href="#"
            sx={{
              color: theme.palette.blue.primary,
              fontWeight: "bold",
            }}
          >
            Club Constitution
          </Link>
          .
        </Typography>
      </Container>
    </div>
  );
};
