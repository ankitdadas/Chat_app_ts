import React, { useState } from "react";
import { Drawer, Hidden } from "@mui/material";
import Conversation from "../../components/ConversationsList/ConversationsList";

import Chat from "./../../components/Chat/Chat";
import ConversationData from "../../components/ConversationsList/ConversationsList.json";
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
    const [open, setOpen] = React.useState(false);
    const [conversationList, setConversationList] = useState(sampleAppContext.filter(p => p.showArchive === true) || []);
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
        const tempConversionIndex = conversationList.findIndex(c => c.userId === selectedUser.userId);
        conversationList[tempConversionIndex].archive = true;
        conversationList[tempConversionIndex].showArchive = false;
        console.log(conversationList);
        setConversationList([...conversationList].filter(p => p.showArchive === true));
        if (tempConversionIndex < conversationList.length - 1)
            setSelectedUser(conversationList[tempConversionIndex + 1]);
        else if (tempConversionIndex < conversationList.length && conversationList.length > 1) {
            setSelectedUser(conversationList[tempConversionIndex - 1]);
        }
    }
    const showarchiveChat: any = (isToggleEnabled: boolean) => {
      

            if (isToggleEnabled) {
                setConversationList([...sampleAppContext].map((q: any) => {

                    return { ...q, showArchive: true }
                })
                );

            } else {
                setConversationList([...sampleAppContext].filter((q: any) => (q && q.showArchive == true))
                );
            }


        }
        const updateExpanded: any = (indx: any, contactIndx: any, expanded: boolean) => {
            const tempConversionIndex = conversationList.findIndex(c => c.userId === selectedUser.userId);
            conversationList[tempConversionIndex].contacts[contactIndx].contact.thirdPartyDetails[indx].expanded = expanded;
            setConversationList([...conversationList]);

        }
        return (
            <InboxContext.Provider value={conversationList}>
                <React.Fragment>
                    <AppBox open={open}
                        className="ChatMainPageHolder"
                    //style={{ width: `calc(100% - ${drawerWidth}px - 70px)` }}
                    >
                        <Hidden smDown={true}> <Conversation showarchiveChat={showarchiveChat} setSelectedUserId={selectedUserDetail} selectedUserId={selectedUser.userId} />  </Hidden>
                        <Chat open={open} conversationList={sampleAppContext} updateBlockStatus={updateBlockStatus} selectedUser={selectedUser} handleDrawerClose={() =>
                            setOpen(false)
                        } handleDrawerOpen={() => setOpen(true)} archiveChat={archiveChat} />
                    </AppBox>
                    <Hidden smDown={true}>

                        {
                            open && (
                                <Drawer
                                    className="rightSidebarHolder"
                                    sx={{
                                        width: "100%",
                                        maxWidth: drawerWidth,
                                        flexShrink: 0,
                                        "& .MuiDrawer-paper": {
                                            width: "100%",
                                            maxWidth: drawerWidth,
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
                    </Hidden>
                </React.Fragment>
            </InboxContext.Provider>
        );
    }
    export default Inbox;