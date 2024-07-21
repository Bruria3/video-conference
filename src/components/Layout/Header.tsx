import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import '../../style/Header.scss';

export const Header: React.FC = () => {
  return (
    <AppBar position="sticky" className="video-header">
      <Toolbar className="video-header-text-wrapper">
        <Typography variant="h6">
          <Box> Video Conference </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
