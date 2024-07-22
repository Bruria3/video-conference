import React, { useState, useEffect } from "react";
import IUser from "../types/IUser";
import { UserGrid } from "../components/Users/UserGrid";
import "../style/User.scss";
import { selectUser } from "../services/users/userSlice";
import { useAppSelector } from "../services/hooks";
import { Box, Grid } from "@mui/material";
import { Share, Camera, Microphone, Timer } from "../components/Tools";

export const Users = () => {
  const users = useAppSelector(selectUser);
  // const [judgesGrids, setJudgesGrids] = useState(users.judges);
  // const [respondersGrids, setRespondersGrids] = useState(users.responders);

  // useEffect(() => {
  //     setJudgesGrids(users.judges);
  //     setRespondersGrids(users.responders);
  // }, [users])

  const renderGrids = (data: IUser[]) => {
    return data.map((user, index: number) => (
      <UserGrid key={user.id} user={user} index={index} />
    ));
  };

  return (
    <Box className="video-layout">
      <Box className="video-grids-wrapper">
        <Grid container spacing={2} justifyContent="center" className="container-grid">
          {renderGrids(users.judges)}
        </Grid>
        <Grid container spacing={2} justifyContent="center" className="container-grid">
          {renderGrids(users.responders)}
        </Grid>
      </Box>
      <Box className="video-tools-wrapper">
        <Box className="video-live-wrapper">
          <Share />
          <Microphone />
          <Camera />
        </Box>
        <Box className="video-info">
          <Timer />
        </Box>
      </Box>
    </Box>
  );
};
