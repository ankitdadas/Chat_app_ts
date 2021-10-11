import React from "react";
import { AppBar, IconButton, Toolbar, Box, Typography,Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Notifications, HelpOutline, SettingsOutlined } from '@mui/icons-material';
import LogoIcon from './../../assets/sakari-logo.png';
import Routing from './../../Routing';
const Master = () => {
    return (
        <>
        <AppBar position="fixed" style={{ zIndex: 9999 }} className="appBarHeader" elevation={0} >
            <Toolbar>
                <Link to={"/"}>
                    <img alt="Logo" width="48" height="53" src={LogoIcon} />
                </Link>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link to="/">Inbox</Link>
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton size="large" >
                    <HelpOutline></HelpOutline>
                </IconButton>
                <IconButton size="large" >
                    <Notifications />
                </IconButton>
                <IconButton size="large" >
                    <SettingsOutlined></SettingsOutlined>
                </IconButton>
            </Toolbar>
            </AppBar>
            <Grid container className="mainChatSection">
                <Routing></Routing>
            </Grid>
            </>
       
    );
};

export default Master;
