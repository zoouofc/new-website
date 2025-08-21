// Package Imports
import React from "react";
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

export const CommDialog = ({ open, setOpen, role, description, names }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
        <DialogContent sx={{ padding: theme.spacing(0, 5) }}>
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
