import React from 'react';
import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../style/NavBar.scss';
import { navItems } from '../../utils/constants';

export const NavBar: React.FC = () => {
    

    return (
        <Box className="video-nav-bar-wrapper">
            <List>
                {navItems.map((item, index) => (
                    <ListItem button key={index} component={Link} to={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
