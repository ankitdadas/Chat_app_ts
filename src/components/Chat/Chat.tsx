import "./Chat.scss";
import React, { useState } from "react";
import {
    Box, AppBar, Toolbar, Typography, IconButton, List,
    ListItemAvatar, Divider, TextareaAutosize, Avatar, ListItemText, Tooltip
} from "@mui/material";
import {
    Check, Block, ArrowBackIos, ArrowForwardIos, SendOutlined, InsertLinkSharp,
    AttachFileSharp, TextSnippet, VpnKey
} from '@mui/icons-material';

const Chat = (props: any) => {
    const {
        open,
        handleDrawerOpen,
        handleDrawerClose,
        archiveChat,
        updateBlockStatus,
        selectedUser
    } = props || {}
    console.log(selectedUser);
    return (

        <Box className="chat-grid">
            <AppBar color="default" elevation={0} position="absolute">
                <Toolbar
                    style={{
                        textAlign: "right",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >

                    <IconButton >
                        <Check onClick={archiveChat} />
                    </IconButton>

                    {
                        selectedUser.block === false &&
                        <IconButton>
                            <Block onClick={() => {
                                updateBlockStatus()
                            }} />
                        </IconButton>
                    }
                    <Tooltip placement="bottom" title={open === true ? "Hide Right Panel" : "Show Right Panel"}>
                        <IconButton>
                            {open === true ? <ArrowBackIos onClick={handleDrawerClose} /> : <ArrowForwardIos onClick={handleDrawerOpen} />}
                        </IconButton>
                    </Tooltip>

                </Toolbar>
            </AppBar>

            <Box className="chatBoxHolder" style={{ height: "calc(100vh - 160px)" }}>



                {
                    selectedUser.messages && selectedUser.messages.map((cht: any) => {
                        console.log(selectedUser.userId === cht.userId)
                        return (
                            <Box className={`chatSection ${selectedUser.userId === cht.userId && 'right'} `}>
                                <List className={`chatBox  `}>
                                    <Box className="messageInfoBox">
                                        <ListItemAvatar>
                                            {" "}
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://material-ui.com/static/images/avatar/1.jpg"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            <div className="messageInfoUser">
                                                <span>{cht.userId}</span>
                                                <span>9.30 AM</span>
                                            </div>
                                        </ListItemText>
                                    </Box>
                                    <Box className="messageBoxBlue" borderRadius={2}>
                                        {cht.message}
                                    </Box>
                                    <Box style={{ textAlign: "right" }}>
                                        <Check className="tickGreen" />
                                    </Box>
                                </List> </Box>)
                    })
                }




            </Box>

            {
                selectedUser.block === false && (
                    <Box className="bottomChatSectionHolder">
                        <Divider style={{ maxWidth: "100%" }} />
                        <Box
                            className="bottomChatSectionInner"
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "flex-end",
                                padding: "10px 10px 0px",
                            }}
                        >
                            <Box
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "flex-start",
                                }}
                            >
                                <IconButton>
                                    <VpnKey />
                                </IconButton>
                                <IconButton>
                                    <Tooltip placement="top" title="Links">
                                        <InsertLinkSharp />
                                    </Tooltip>
                                </IconButton>
                                <IconButton>
                                    <Tooltip placement="top" title="Attachments">
                                        <AttachFileSharp />
                                    </Tooltip>
                                </IconButton>
                                <IconButton>
                                    <TextSnippet />
                                </IconButton>
                            </Box>
                            <Box
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginRight: 10,
                                    position: "relative",
                                }}
                                sx={{ flexGrow: 1 }}
                            >
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={2}
                                    maxRows={3}
                                    placeholder="Minimum 3 rows"
                                    style={{
                                        width: "100%",
                                        border: 0,
                                        background: "#f1f1f1",
                                        padding: "8px 15px 15px ",
                                        maxWidth: "95%",
                                    }}
                                />
                                <Typography className="helper-text">
                                    3 segments (23 characters remaining)
                                </Typography>
                            </Box>
                            <Box
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "flex-start",
                                }}
                            >
                                <IconButton>
                                    <Tooltip placement="top" title="Send">
                                        <SendOutlined></SendOutlined>
                                    </Tooltip>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                )
            }

        </Box>

    );
};

export default Chat;
