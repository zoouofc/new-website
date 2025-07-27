// Package Imports
import React, { useState } from "react";
import {
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// Icon Imports
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export const CommCard = ({ role, description, names }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Dialog Button */}
      <Button
        variant="text"
        aria-label="show-more"
        onClick={handleClickOpen}
        sx={{
          width: theme.spacing(40),
          justifyContent: "space-between",
          textTransform: "uppercase",
          boxShadow: theme.shadows,
          color: theme.palette.text.primary,
          background: "#fff",
          padding: theme.spacing(1, 1, 1, 3),
        }}
      >
        {role}
        <ArrowForwardIosRoundedIcon />
      </Button>

      {/* Dialog */}
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
      >
        <DialogTitle>
          <Typography variant="h5">Responsibilities of {role}s</Typography>
        </DialogTitle>
        <DialogContent sx={{ paddingTop: 0 }}>
          <Typography variant="subtitle1" paragraph>
            {description}
          </Typography>
          {names.length !== 0 ? (
            <>
              <Typography variant="h6">Active Commissioner(s):</Typography>
              <ul style={{ margin: (theme) => theme.spacing(0.5, 0) }}>
                {names.map((name) => {
                  return (
                    <li key={name}>
                      <Typography variant="subtitle1">{name}</Typography>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
