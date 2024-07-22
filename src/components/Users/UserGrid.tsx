import React from "react";
import IUser from "../../types/IUser";
import "../../style/User.scss";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MicOffIcon from "@mui/icons-material/MicOff";

interface UserGridProps {
  user: IUser;
  index: number;
}

export const UserGrid = (props: UserGridProps) => {
  const { index, user } = props;

  return (
    <Grid className="user-grid" item xs={12} sm={6} md={4} lg={3} sx={{ maxWidth: 500 }}>
      <Card className={`card-layout layout-inner-${index + 1}`}>
        <Box className="text-type-wrapper">
          <Typography variant="body2" color="text.secondary">
            {user.type}
          </Typography>
        </Box>
        <CardMedia
          component="img"
          height="100%"
          image={`/img/man${index + 1}.jpg`}
          alt={user.type}
        />
        <Box className="card-bottom-wrapper">
          <Box className="text-wrapper">
            <Typography variant="body2" color="text.secondary">
              {user.type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.name}
            </Typography>
          </Box>
          <IconButton aria-label="share">
            {user.isMicrophoneOpen ? <KeyboardVoiceIcon /> : <MicOffIcon />}
          </IconButton>
        </Box>
      </Card>
    </Grid>
  );
};
