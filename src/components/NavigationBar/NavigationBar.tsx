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

function NavigationBar() {
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
            <Toolbar
                className="sideNavigationHolder"
                style={{
                    flexDirection: "column",
                    position: "relative",
                    top: 70,
                }}
            >
                <List className="sideNavigation">
                    <ListItem>
                        <Tooltip title="Inbox" placement="right-start">
                            <NavLink to={"/inbox"} exact isActive={() => ['/', '/inbox'].includes(pathname)} activeClassName="selected">
                                <InboxOutlined />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Campaigns" placement="right-start">
                            <NavLink to={"/campaigns"} exact activeClassName="selected">
                                <PodcastsOutlined />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Contacts" placement="right-start">
                            <NavLink to={"/Contacts"} exact activeClassName="selected">
                                <GroupOutlined />
                            </NavLink>
                        </Tooltip>
                    </ListItem>

                    <ListItem>
                        <Tooltip title="Templates" placement="right-start">
                            <NavLink to={"/Templates"} exact activeClassName="selected">
                                <TextSnippetOutlined />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Tools" placement="right-start">
                            <NavLink to={"/Tools"} exact activeClassName="selected">
                                <TimelineOutlined />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Feature Requests" placement="right-start">
                            <NavLink to={"/Featurerequests"} exact activeClassName="selected">
                                <ConstructionOutlined />
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                </List>
            </Toolbar>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Toolbar
                className="sideNavigationHolder"
                style={{ flexDirection: "column", padding: "0 5px 0px" }}
            >

                <List className="sideNavigation">
                    <ListItem>
                        <Tooltip title="Status" placement="right-start">
                        <NavLink to={"/Featurerequests"} exact activeClassName="selected">
                            <SentimentSatisfiedAltOutlined className="panel-icon smile-icon" /> 
                            </NavLink>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip title="Status" placement="right-start">
                            <NavLink to={"/Featurerequests"} exact activeClassName="selected">
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
