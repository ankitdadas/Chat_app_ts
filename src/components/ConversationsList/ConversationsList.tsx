import "./ConversationsList.scss";
import React, { useContext, useState, useEffect } from "react";
import {
    WhatsApp, SmsOutlined, FilterListOutlined, Block,
    LockOutlined, ArrowForwardIos
} from '@mui/icons-material';
import {
    Box, Grid, Button, Typography, IconButton, List,
    ListItemAvatar, ListItemIcon, Badge, Avatar, ListItemText, Paper, Dialog,
    Select, MenuItem, Checkbox, DialogTitle, DialogContent,
    DialogActions, Divider, FormControl, Hidden, useMediaQuery
} from "@mui/material";

import Searchbox from './../SearchBox/SearchBox';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import InfiniteScroll from 'react-infinite-scroll-component';
import Moment from "react-moment";
import InboxContext from "../../contexts/inbox/inbox.context";
import Switch from '@mui/material/Switch';
import MultipleSelectGroups from './Group';
import blueTheme from "../Config/Theme";
import { makeStyles, useTheme } from '@mui/styles';


const useStyles: any = makeStyles(() => ({
    cancelBtn: {
        background: ` ${blueTheme.palette.grey[700]} !important`,
        color:` ${blueTheme.palette.grey[800]} !important`,
        marginRight:"10px",
        "&:hover":{
            background:` ${blueTheme.palette.grey[900]} !important`,
            color: ` ${blueTheme.palette.grey[800]} !important`,
        }
    },
    
    submitBtn: {
        background: blueTheme.palette.primary.main,
        "&:hover":{
            background: blueTheme.palette.primary.dark,
        }
    },
    

}));





const label = { inputProps: { 'aria-label': 'Switch demo' } };
const ConversationList = ({ setSelectedUserId, selectedUserId, showarchiveChat, handleConversationList }:
    { setSelectedUserId: any, selectedUserId: any, showarchiveChat: any, handleConversationList: any }) => {
    const ConversationData = useContext(InboxContext);
    const [conversationData, setConversationData] = useState(ConversationData);
    const [openArchived, setOpenArchived] = useState(false);
    const [isToggleEnabled, setToggleEnabled] = useState(false);
    const classes = useStyles();
    const theme: any = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(() => {

        setConversationData(ConversationData)
    }, [ConversationData])

    const fetchMoreData = () => {
        console.log(conversationData);
        setConversationData([
            ...conversationData,
            ...ConversationData,
        ]
        );
    };
    const setUsers = (user: any) => {
        if (user) {
            setConversationData(
                conversationData.filter((p: any) =>
                    user.includes(
                        p.contact.firstName === ""
                            ? p.contact.mobile.mnumber! || ''
                            : p.contact.firstName
                    )
                ))

        } else {
            setConversationData(ConversationData);
        }
    };
    const getStatusIcon = (type: string) => {
        switch (type) {
            case "whatsApp":
                return <WhatsApp style={{ backgroundColor: "#3965FF", border: "4px #3965FF solid", color: "#fff", borderRadius: "25px", fontSize: 16 }} />;
            case "sms":
                return <SmsOutlined style={{ backgroundColor: "#3965FF", border: "4px #3965FF solid", color: "#fff", borderRadius: "25px", fontSize: 16 }} />;
            default:
                return <></>;
        }
    };
    const getNameOrMobileNumber = ({ contact, mobile }: { contact: any, mobile: any }) => {

        if (contact.firstName !== "" && contact.lastName !== "") {
            return `${contact.firstName} ${contact.lastName}`;
        } else {
            return contact.mobile.mnumber;
        }
    };
    return (
        <Grid className="conversationBox"  >

            <Grid item className="compose-block" xs={12}>
                <Button disableElevation
                    className="compose-button"
                    variant="contained"
                    size="large"
                    color="secondary"
                >
                    <ModeEditOutlinedIcon />
                    <Typography className="compose-text">Compose</Typography>
                </Button>

            </Grid>
            <Grid item xs={12}>
                <Paper elevation={0}
                    component="form" style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10, marginTop: 0 }}
                    sx={{ p: '0px 4px 0px 0px', display: 'flex', alignItems: 'center', }}
                >
                    <Searchbox setUsers={setUsers} />
                    <IconButton sx={{ p: '10px' }} aria-label="directions">
                        <FilterListOutlined onClick={() => setOpenArchived(true)} />
                    </IconButton>
                </Paper>
            </Grid>
            <Grid className="height-conversation scroll">
                <InfiniteScroll className="scroll"
                    dataLength={conversationData.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                /* endMessage={
                   <p style={{ textAlign: "center" }}>
                     <b>Yay! You have seen it all</b>
                   </p>
                 } */
                >
                    {conversationData.map((c: any, indx) => {
                        return (
                            <List
                                onClick={() => {

                                    setSelectedUserId(c.userId);
                                    handleConversationList();
                                   
                                }}
                                className={`message-block ${selectedUserId === c.userId && 'active'} ${indx % 2 === 0 ? " white-bg" : "blue-bg"
                                    }`}
                            >
                                <ListItemAvatar>
                                    <ListItemIcon>
                                        <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            badgeContent={getStatusIcon(c.type)}                                        >
                                            <Avatar style={{ width: "52px", height: "52px", }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </Badge>
                                    </ListItemIcon>
                                </ListItemAvatar>
                                <ListItemText className="user-name">
                                    <Grid container>
                                        <Grid item xs={12} style={{paddingLeft:'10px'}}>
                                            <Box style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                {c.block && (<Block style={{ fontSize: "13px", marginRight: "3px" }} color="error" />)}
                                                {c.archive === true && c.showArchive === true && (<LockOutlined style={{ fontSize: "13px", marginRight: "3px", color: blueTheme.palette.grey[500] }} />)}
                                                {c.unread && c.unread.length > 0 && (<span className="dot"></span>)}

                                            </Box>

                                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div style={{ fontSize: 14, fontWeight: 400 }}> {getNameOrMobileNumber(c)}</div>
                                                <div>

                                                    <Moment style={{ fontSize: 14, fontWeight: 400 }} format="hh:mm A" withTitle>{c.created.at}</Moment>
                                                </div>
                                            </Box>

                                            <Box className="textMessage"  component="div" sx={{
                                                // textOverflow: 'ellipsis',
                                                // overflow: 'hidden',
                                            }}>

                                                {c.lastMessage.message.substring(0, 60) + '...'}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </ListItemText>
                            </List>
                        );
                    })}


                </InfiniteScroll>
            </Grid>

            <Dialog fullWidth={true}
                maxWidth={'xs'}
                open={openArchived} onClose={() => setOpenArchived(false)}>
                <DialogTitle style={{ fontSize: "1.2rem", paddingLeft: "10px", paddingRight: "10px" }} >Show Archived  <Switch {...label} checked={isToggleEnabled} onChange={() => setToggleEnabled(!isToggleEnabled)} /></DialogTitle>

                <DialogContent style={{ paddingLeft: "10px", paddingRight: "10px" }} >
                    <MultipleSelectGroups />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" className={classes.cancelBtn} onClick={() => setOpenArchived(false)}>Cancel</Button>
                    <Button variant="contained" className={classes.submitBtn} onClick={() => {
                        showarchiveChat(isToggleEnabled);
                        setOpenArchived(false);
                    }
                    }>Apply</Button>


                </DialogActions>

            </Dialog>
        </Grid>
    );
};

export default ConversationList;