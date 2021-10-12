import React, { useState } from "react";
import {  Drawer } from "@mui/material";
import Conversation from "../../components/ConversationsList/ConversationsList";

import Chat from "./../../components/Chat/Chat";
import ConversationData from "../../components/ConversationsList/Conversion.json";
import Contacts from './../../components/Contacts/Contacts';
import MuiBox, { BoxProps as MuiAppBarProps } from '@mui/material/Box';
import InboxContext, { InboxInterface } from './../../contexts/inbox/inbox.context';
import { styled } from '@mui/material/styles';
const drawerWidth = 335;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBox = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));


const Inbox = (props: any) => {
    const sampleAppContext: InboxInterface[] = ConversationData.data || [];
    const [open, setOpen] = React.useState(true);
    const [conversationList, setConversationList] = useState(sampleAppContext || []);
    const [selectedUser, setSelectedUser] = useState(sampleAppContext[0])

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
    const updateExpanded: any = (indx: any, contactIndx: any, expanded: boolean) => {
        const tempConversionIndex = conversationList.findIndex(c => c.userId === selectedUser.userId);
        conversationList[tempConversionIndex].contacts[contactIndx].contact.thirdPartyDetails[indx].expanded = expanded;
        setConversationList([...conversationList]);

    }
    return (
        <InboxContext.Provider value={conversationList}>
            <React.Fragment>
                <AppBox open ={open}
                    className="ChatMainPageHolder"
                    //style={{ width: `calc(100% - ${drawerWidth}px - 70px)` }}
                >
                    <Conversation setSelectedUserId={selectedUserDetail} selectedUserId={selectedUser.userId} />
                    <Chat open={open} updateBlockStatus={updateBlockStatus} selectedUser={selectedUser} handleDrawerClose={() =>
                        setOpen(false)
                    } handleDrawerOpen={() => setOpen(true)} archiveChat={archiveChat} />
                </AppBox>

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
                            <Contacts updateExpanded={updateExpanded} selectedUser={selectedUser} />
                        </Drawer>
                    )
                }
            </React.Fragment>
        </InboxContext.Provider>
    );
}
export default Inbox;