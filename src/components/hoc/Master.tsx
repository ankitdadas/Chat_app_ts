import React from "react";
import { AppBar, IconButton, Toolbar, Box, Typography, Grid, Hidden, Tooltip } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Notifications, HelpOutline, SettingsOutlined } from '@mui/icons-material';
import LogoIcon from './../../assets/sakari-logo.png';
import Routing from './../../Routing';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from './AccountMenu';


const Master = () => {
    const location = useLocation();
    const [showNavigation, setShowNavigation] = React.useState(false);
    return (

        <>
            {location.pathname !== "/" &&
                <>
                    <AppBar position="fixed" style={{ zIndex: 9999 }} className="appBarHeader" elevation={0} >
                        <Toolbar style={{ paddingLeft: 16, paddingRight: 16 }}>
                            <Hidden smDown={true}>
                                <Link to={"/inbox"}>
                                    <img alt="Logo" height="40" style={{ marginRight: "20px" }} src={LogoIcon} />
                                </Link>
                            </Hidden>
                            <Hidden smUp={true}>
                                <Box onClick={() => setShowNavigation(!showNavigation)}>
                                    <img alt="Logo" height="40" src={LogoIcon} />
                                </Box>
                            </Hidden>
                            <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }} >
                                Inbox
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
                            <AccountMenu />
                        </Toolbar>
                    </AppBar>
                    <Grid container className="mainChatSection">
                        <Routing showNavigation={showNavigation} />
                    </Grid>
                </>
            }
        </>

    );
};

export default Master;
