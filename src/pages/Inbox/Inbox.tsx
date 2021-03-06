import React, { useState, useEffect, FunctionComponent } from "react";
import { Box, Drawer, Grid } from "@mui/material";
import Conversation from "../../components/ConversationsList/ConversationsList";

import Chat from "./../../components/Chat/Chat";
import ConversationData from "../../components/ConversationsList/Conversion.json";
import UserData from '../../components/ConversationsList/Conversion.json';
import Contacts from './../../components/Contacts/Contacts';

import InboxContext, { InboxInterface } from './../../contexts/inbox/inbox.context';

const Inbox = (props: any) => {
    const sampleAppContext: InboxInterface[] = ConversationData.data || [];
    const [open, setOpen] = React.useState(true);
    const [conversationList, setConversationList] = useState(sampleAppContext || []);
    const [selectedUser, setSelectedUser] = useState(sampleAppContext[0])


    const drawerWidth = 340;
    const updateBlockStatus: any = () => {
        const tempConversionIndex = conversationList.findIndex(c => c.userId === selectedUser.userId);
        conversationList[tempConversionIndex].block = true;
        setConversationList([...conversationList]);
    }
    const selectedUserDetail: any = (userId: any) => {
        const tempConversion = conversationList.find(c => c.userId === userId)!;
        setSelectedUser(tempConversion)
    }
    const archiveChat: any = () => {
        const selectedIndx = conversationList.findIndex(c => c.userId !== selectedUser.userId)!;
        const tempConversionList = conversationList.filter(c => c.userId !== selectedUser.userId)!;

        setConversationList([...tempConversionList]);
        if (tempConversionList.length > 0)
            setSelectedUser(conversationList[selectedIndx])
    }
    return (
        <InboxContext.Provider value={conversationList}>
            <React.Fragment>
                <Box
                    className="ChatMainPageHolder"
                    style={{ width: `calc(100% - ${drawerWidth}px - 60px)` }}
                >
                    <Conversation setSelectedUserId={selectedUserDetail} selectedUserId={selectedUser.userId} />
                    <Chat updateBlockStatus={updateBlockStatus} selectedUser={selectedUser} archiveChat={archiveChat} />
                </Box>

                {
                    open && (
                        <Drawer
                            className="rightSidebarHolder"
                            sx={{
                                width: drawerWidth,
                                flexShrink: 0,
                                "& .MuiDrawer-paper": {
                                    width: drawerWidth,
                                    boxSizing: "border-box",
                                },
                            }}
                            open={open}
                            variant="persistent"
                            anchor="right"
                        >

                            <span> Hello Brother</span>
                            {/* <Contacts finalUserDataa={finalUserDataa} />  */}
                        </Drawer>
                    )
                }
            </React.Fragment>
        </InboxContext.Provider>
    );
}
export default Inbox;