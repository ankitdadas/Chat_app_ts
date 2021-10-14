import "./ConversationsList.scss";
import React, { useContext, useState, useEffect } from "react";
import {
    WhatsApp, SmsOutlined, FilterListOutlined, Block,
    LockOutlined
} from '@mui/icons-material';
import {
    Box, Grid, Button, Typography, IconButton, List,
    ListItemAvatar, ListItemIcon, Badge, Avatar, ListItemText, Paper, Dialog,
    Select, OutlinedInput, MenuItem, Checkbox, DialogTitle, DialogContent,
    DialogActions, InputLabel, Divider
} from "@mui/material";
import Searchbox from './../SearchBox/SearchBox';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import InfiniteScroll from 'react-infinite-scroll-component';
import Moment from "react-moment";
import InboxContext from "../../contexts/inbox/inbox.context";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const ConversationList = ({ setSelectedUserId, selectedUserId, showarchiveChat }:
    { setSelectedUserId: any, selectedUserId: any, showarchiveChat: any }) => {
    const ConversationData = useContext(InboxContext);
    const [conversationData, setConversationData] = useState(ConversationData);
    const [openArchived, setOpenArchived] = useState(false);
    const [selectedArchivedUser, setSelectedArchivedUser] = useState('0');
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
                return <WhatsApp style={{ backgroundColor: "#3965FF", color: "#fff", borderRadius: "25px", fontSize: 14 }}></WhatsApp>;
            case "sms":
                return <SmsOutlined style={{ backgroundColor: "#3965FF", color: "#fff", borderRadius: "25px", fontSize: 14 }}></SmsOutlined>;
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
                    color="primary"
                >
                    <ModeEditOutlinedIcon />
                    <Typography className="compose-text">Compose</Typography>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={0}
                    component="form" style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10, marginTop: 0 }}
                    sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', }}
                >
                    <Searchbox setUsers={setUsers}></Searchbox>
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
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
                                    console.log(c.userId);
                                    setSelectedUserId(c.userId)
                                }}
                                className={`message-block ${selectedUserId === c.userId && 'active'} ${indx % 2 === 0 ? " white-bg" : "blue-bg"
                                    }`}
                            >
                                <ListItemAvatar>
                                    <ListItemIcon>
                                        <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            badgeContent={getStatusIcon(c.type)}                                        >
                                            <Avatar style={{ width: "40px" }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        </Badge>
                                    </ListItemIcon>
                                </ListItemAvatar>
                                <ListItemText className="user-name">
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Box style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                {c.block && (<Block style={{ fontSize: "13px", marginRight: "3px" }} />)}
                                                {c.archive === true && c.showArchive === true && (<LockOutlined style={{ fontSize: "13px",marginRight: "3px" }} />)}
                                                {c.unread && c.unread.length > 0 && (<span className="dot"></span>)}
                                                
                                            </Box>

                                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div style={{ fontSize: 14, fontWeight: 400 }}> {getNameOrMobileNumber(c)}</div>
                                                <div>

                                                    <Moment style={{ fontSize: 14, fontWeight: 400 }} format="hh:mm A" withTitle>{c.created.at}</Moment>
                                                </div>
                                            </Box>

                                            <Box className="textMessage" component="div" style={{ whiteSpace: 'nowrap', width: "100%", maxWidth: "210px", margin: "0px auto 0px 0px ", fontSize: "12px" }} sx={{
                                                textOverflow: 'ellipsis', my: 2,
                                                overflow: 'hidden',
                                            }}>
                                                {c.lastMessage.message}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </ListItemText>
                            </List>
                        );
                    })}


                </InfiniteScroll>
            </Grid>
            <Dialog open={openArchived} onClose={() => setOpenArchived(false)}>
                <DialogTitle>Archive  <Switch {...label} /></DialogTitle>
                <Divider />
                <DialogContent>
                    <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
                    <Select sx={{ m: 1, minWidth: 120 }}
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        label="Testing"
                    //input={<OutlinedInput label="Testing" />}

                    >

                        <MenuItem key={'Test'} value={'Test'}>
                            <Checkbox checked={false} />
                            <ListItemText primary={'Test'} />
                        </MenuItem>
                        <MenuItem key={'Test 1'} value={'Test 1'}>
                            <Checkbox checked={false} />
                            <ListItemText primary={'Test 1'} />
                        </MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        showarchiveChat();
                        setOpenArchived(false);
                    }
                    }>Apply</Button>
                    <Button onClick={() => setOpenArchived(false)}>Cancel</Button>

                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default ConversationList;