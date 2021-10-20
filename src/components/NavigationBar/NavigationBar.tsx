import {
    List, ListItem, Drawer, Toolbar, Box,
    Tooltip
} from "@mui/material";
import "./NavigationBar.scss";
import { NavLink } from 'react-router-dom';
import {
    InboxOutlined, PodcastsOutlined, GroupOutlined, TextSnippetOutlined,
    TimelineOutlined, ConstructionOutlined, SentimentSatisfiedAltOutlined
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from "@mui/styled-engine";
import { grey } from "@mui/material/colors";
import blueTheme from "../Config/Theme";
import { makeStyles } from '@mui/styles';
 

const useStyles = makeStyles(theme => ({ 
    
        sideNavigationHolder :{
            paddingLeft:" 5px !important",
            paddingRight: "5px !important", 
          },

          sideNavigation :{
            "& li" : {
             "&:hover" : {
                background: "#f8f8f8",                     
              },
            },
          },

          navlink:{
            "& svg":{
                fill: blueTheme.palette.grey[700]
            },
            "&:hover" :{
                "& svg":{
                    fill: blueTheme.palette.grey[800]
                },
            }, 
        },
        selected :{
            "& svg":{
                fill: blueTheme.palette.grey[800]
            },
        },
}));
  
function NavigationBar() {
    const classes = useStyles();
    // extract pathname from location
    const { pathname } = useLocation();
    return (
        <Drawer
         
            variant="permanent"
            anchor="left"
            style={{
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            

            <Toolbar className={classes.sideNavigationHolder}                
                style={{
                    flexDirection: "column",
                    position: "relative",
                    top: 70,
                }}
            >
                <List className={classes.sideNavigation} >
                    <ListItem>
                        <Tooltip title="Inbox" placement="right-start">
                            <NavLink to={"/inbox"} exact isActive={() => ['/', '/inbox'].includes(pathname)} className={classes.navlink} activeClassName={classes.selected} >
                                <InboxOutlined  />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Campaigns" placement="right-start">
                            <NavLink to={"/campaigns"} exact className={classes.navlink} activeClassName={classes.selected}>
                                <PodcastsOutlined  />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Contacts" placement="right-start">
                            <NavLink to={"/contacts"} exact className={classes.navlink} activeClassName={classes.selected}>
                                <GroupOutlined  />
                            </NavLink>
                        </Tooltip>
                    </ListItem>

                    <ListItem>
                        <Tooltip title="Templates" placement="right-start">
                            <NavLink to={"/templates"} exact className={classes.navlink} activeClassName={classes.selected}>
                                <TextSnippetOutlined  />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Tools" placement="right-start">
                            <NavLink to={"/tools"} exact className={classes.navlink} activeClassName={classes.selected}>
                                <TimelineOutlined  />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Feature Requests" placement="right-start">
                            <NavLink to={"/featurerequests"} exact className={classes.navlink} activeClassName={classes.selected}>
                                <ConstructionOutlined  />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                </List>
            </Toolbar>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Toolbar
                className={classes.sideNavigationHolder}
                style={{ flexDirection: "column", padding: "0 5px 0px" }}
            >

                <List className={classes.sideNavigation}>
                    <ListItem>
                        <Tooltip title="Status" placement="right-start">
                            <NavLink to={"/Featurerequests"} exact className={classes.navlink} activeClassName={classes.selected}>
                                <SentimentSatisfiedAltOutlined className="panel-icon smile-icon" />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Status" placement="right-start">
                            <NavLink to={"/Featurerequests"} exact className={classes.navlink} activeClassName={classes.selected}>
                                <SentimentSatisfiedAltOutlined className="panel-icon smile-icon" />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                </List>
            </Toolbar>
        </Drawer >
    );
}

export default NavigationBar;
