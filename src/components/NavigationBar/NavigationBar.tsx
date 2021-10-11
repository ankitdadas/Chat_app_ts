import { List, ListItem, Drawer, Toolbar, Box } from "@mui/material";
import "./NavigationBar.scss";
import { NavLink } from 'react-router-dom';
import {
    InboxOutlined, PodcastsOutlined, GroupOutlined, TextSnippetOutlined,
    TimelineOutlined, ConstructionOutlined, SentimentSatisfiedAltOutlined
} from '@mui/icons-material';

const drawerWidth = 40;
function NavigationBar() {
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
                        <NavLink to={"/inbox"} exact activeClassName="selected">
                            <InboxOutlined />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/Campaigns"} exact activeClassName="selected">
                            <PodcastsOutlined />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/Contacts"} exact activeClassName="selected">
                            <GroupOutlined />
                        </NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink to={"/Templates"} exact activeClassName="selected">
                            <TextSnippetOutlined />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/Tools"} exact activeClassName="selected">
                            <TimelineOutlined />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/Featurerequests"} exact activeClassName="selected">
                            <ConstructionOutlined />
                        </NavLink>
                    </ListItem>
                </List>
            </Toolbar>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Toolbar
                className="sideNavigationHolder"
                style={{ flexDirection: "column", padding: "0 5px 0px" }}
            >

                <List>
                    <ListItem>

                        <SentimentSatisfiedAltOutlined className="panel-icon smile-icon"></SentimentSatisfiedAltOutlined>

                    </ListItem>
                    <ListItem>
                        <SentimentSatisfiedAltOutlined className="panel-icon smile-icon"></SentimentSatisfiedAltOutlined>

                    </ListItem>
                </List>
            </Toolbar>
        </Drawer >
    );
}

export default NavigationBar;
