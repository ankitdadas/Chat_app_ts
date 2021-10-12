import React from "react";
import { AppBar, IconButton, Toolbar, Box, Typography, Grid, Hidden, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { Notifications, HelpOutline, SettingsOutlined } from '@mui/icons-material';
import LogoIcon from './../../assets/sakari-logo.png';
import Routing from './../../Routing';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

const Master = () => {
    return (
        <>
            <AppBar position="fixed" style={{ zIndex: 9999 }} className="appBarHeader" elevation={0} >
                <Toolbar>
                    <Hidden smUp={true}>

                        <IconButton size="large" >
                            <ReorderOutlinedIcon />
                        </IconButton>
                    </Hidden>

                    <Link to={"/"}>
                        <img alt="Logo" width="48" height="53" src={LogoIcon} />
                    </Link>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Link to="/">Inbox</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Support center" placement="bottom">
                        <IconButton size="large" >
                            <HelpOutline></HelpOutline>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications" placement="bottom">
                        <IconButton size="large" >
                            <Notifications />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Settings" placement="bottom">
                        <IconButton size="large" >
                            <SettingsOutlined></SettingsOutlined>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Grid container className="mainChatSection">
                <Routing></Routing>
            </Grid>
        </>

    );
};

export default Master;
