import React, { useState, useEffect } from "react";
import { Box, Drawer, Hidden, IconButton } from "@mui/material";
import Conversation from "../../components/ConversationsList/ConversationsList";

import Chat from "./../../components/Chat/Chat";
import ConversationData from "../../components/ConversationsList/ConversationsList.json";
import Contacts from './../../components/Contacts/Contacts';
import MuiBox, { BoxProps as MuiAppBarProps } from '@mui/material/Box';
import InboxContext, { InboxInterface } from './../../contexts/inbox/inbox.context';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
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
    const [conversationList, setConversationList] = useState(sampleAppContext.filter(p => p.showArchive === true) || []);
    const [selectedUser, setSelectedUser] = useState(sampleAppContext[0])
    const [isMobile, setIsMobile] = useState(false)
    const [showConversationList, setShowConversationList] = useState(true)
    //choose the screen size 
    const handleResize = () => {

        if (window.innerWidth < 760) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    const setShowAndHideConversationList: any = (val: boolean) => {
        setShowConversationList(val);
      
        setOpen(!val);
    }
    // create an event listener
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
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
        if (tempConversionIndex < conversationList.length - 1)
            setSelectedUser(conversationList[tempConversionIndex + 1]);
        else if (tempConversionIndex < conversationList.length && conversationList.length > 1) {
            setSelectedUser(conversationList[tempConversionIndex - 1]);
        }

        setConversationList([...conversationList].filter(p => p.showArchive === true));
    }
    const showarchiveChat: any = () => {


        setConversationList([...sampleAppContext].map((q: any) => {

            return { ...q, showArchive: true }
        })
        );
    }
    const updateExpanded: any = (indx: any, contactIndx: any, expanded: boolean) => {
        const tempConversionIndex = conversationList.findIndex(c => c.userId === selectedUser.userId);
        conversationList[tempConversionIndex].contacts[contactIndx].contact.thirdPartyDetails[indx].expanded = expanded;
        setConversationList([...conversationList]);

    }

    return (
        <InboxContext.Provider value={conversationList}>
            <React.Fragment>
                {
                    isMobile === true ?
                        <AppBox open={open}
                            className="ChatMainPageHolder"
                        //style={{ width: `calc(100% - ${drawerWidth}px - 70px)` }}
                        >
                            {showConversationList === true ? <Conversation handleConversationList={() => setShowAndHideConversationList(false)} showarchiveChat={showarchiveChat} setSelectedUserId={selectedUserDetail} selectedUserId={selectedUser.userId} /> :
                                <Chat open={open} conversationList={sampleAppContext} updateBlockStatus={updateBlockStatus} selectedUser={selectedUser} handleDrawerClose={() =>
                                    setOpen(false)
                                } handleDrawerOpen={() => setOpen(true)} handleConversationList={() => setShowAndHideConversationList(true)} archiveChat={archiveChat} />}
                        </AppBox>
                        :
                        <React.Fragment>
                            <AppBox open={open}
                                className="ChatMainPageHolder"
                            //style={{ width: `calc(100% - ${drawerWidth}px - 70px)` }}
                            >
                                <Hidden smDown={true}> <Conversation handleConversationList={() => setShowAndHideConversationList(false)} showarchiveChat={showarchiveChat} setSelectedUserId={selectedUserDetail} selectedUserId={selectedUser.userId} />  </Hidden>
                                <Chat open={open} conversationList={sampleAppContext} updateBlockStatus={updateBlockStatus} selectedUser={selectedUser} handleDrawerClose={() =>
                                    setOpen(false)
                                } handleConversationList={() => setShowAndHideConversationList(true)} handleDrawerOpen={() => setOpen(true)} archiveChat={archiveChat} />
                            </AppBox>
                            <Hidden smDown={true}>

                                {
                                    open && (
                                        <>



                                            {/* =========== this is for desktop ==============*/}
                                            <Hidden mdDown={false}>
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
                                            </Hidden>



                                            {/* =========== this is for Mobile and Ipad ==============*/}
                                            <Hidden mdUp={true}>
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
                                                    // variant="persistent"
                                                    anchor="right"
                                                >
                                                    <Box onClick={() => setOpen(false)}>
                                                        <IconButton >
                                                            <CloseIcon />
                                                        </IconButton>
                                                    </Box>
                                                    <Contacts updateExpanded={updateExpanded} selectedUser={selectedUser} />
                                                </Drawer>
                                            </Hidden>
                                        </>
                                    )
                                }
                            </Hidden>
                        </React.Fragment>
                }
            </React.Fragment>
        </InboxContext.Provider>
    );
}
export default Inbox;