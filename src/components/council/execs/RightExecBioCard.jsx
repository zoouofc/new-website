// Component that has image and bio description from each exec
// pass in image, email, role name, and pass in text (name, bio)
// TODO: Change the styling on small screens to have the flexFlow be column (and change alignment/padding)

// Package Imports
import React from "react";
import { useTheme, Grid, Typography, Avatar } from "@mui/material";

// Icon Imports
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";

export const RightExecBioCard = ({ bio, email, name, position, image }) => {
  const theme = useTheme();
  const isCentered = !bio || bio.trim() === "";


  return (
    <Grid
      container
      sx={{
        flexFlow: "row",
        textAlign: "right",
        padding: theme.spacing(2, 0),
        justifyContent: isCentered ? "center" : "flex-end",
        alignItems: isCentered ? "center" : "flex-start",
      }}
    >
      <Grid item size="grow">
        <Typography variant="h6" sx={{ lineHeight: 1 }}>
          {name}
        </Typography>
        <Typography variant="subtitle1">{position}</Typography>
        <Typography variant="body1" sx={{ padding: theme.spacing(1.5, 0, 0) }}>
          {bio}
        </Typography>
      </Grid>
      <Grid item sx={{ padding: theme.spacing(0, 0, 0, 2) }}>
        <Avatar
          src={image}
          alt={`${position}_role`}
          sx={{ width: 200, height: 200, boxShadow: theme.shadows[5] }}
        />
        <Avatar
          sx={{
            position: "relative",
            left: 0,
            bottom: theme.spacing(6.25),
            width: theme.spacing(7),
            height: theme.spacing(7),
            bgcolor: theme.palette.text.primary,
          }}
        >
          <a href={`mailto:${email}`}>
            <MarkunreadRoundedIcon
              sx={{
                color: '#fff',
                width: theme.spacing(4.5),
                height: theme.spacing(4.5),
                margin: theme.spacing(0.5, 0, 0),
              }}
            />
          </a>
        </Avatar>
      </Grid>
    </Grid>
  );
};
