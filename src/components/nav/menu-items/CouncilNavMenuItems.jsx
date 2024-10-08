// Package Imports
import React from "react";

// Project-defined Imports
import NavMenuItem from "./NavMenuItem";

export const CouncilNavMenuItems = ({ handleClose, isRecruiting }) => (
  <>
    <NavMenuItem
      handleClose={handleClose}
      href={"#exec-council"}
      label="Executive Council"
    />
    <NavMenuItem
      handleClose={handleClose}
      href={"#comms"}
      label="Commissioners"
    />
    {isRecruiting && (
      <NavMenuItem
        handleClose={handleClose}
        href={"#join-team"}
        label="Join the Team"
      />
    )}
  </>
);

export default CouncilNavMenuItems;
