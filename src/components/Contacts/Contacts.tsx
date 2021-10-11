import React from "react";
import "./Contacts.scss";
import { useState, useEffect } from "react";
import {
     Button, List,
    ListItemAvatar, ListItemIcon, Badge, Avatar, ListItemText
} from "@mui/material";

import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import Typography from '@mui/material/Typography';
import ThirdParty from "./ThirdParty.json";
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
 
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const useStyles: any = makeStyles((theme: any) => ({
    paper: {
        padding: theme.spacing(1), //grid padding
        textAlign: "center",
        color: theme.palette.text.secondary,

        boxShadow: "none",
        height: "calc(100vh - 315px)",
        overflow: "auto",
    },
    typography: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Work Sans",
        marginTop: 10,
        marginBottom: 20,
    },
}));
const Contacts = (props: any) => {
    const {
        finalUserDataa,
    } = props || {};

    const classes = useStyles();
    const [thirdPartyDetail, setThirdPartyDetail] = React.useState(
        ThirdParty.data[0].detail
    );
    const [selectedIndx, setSelectedIndx] = React.useState(0);
    const [userDataDetail, setUserDataDetail] = React.useState(finalUserDataa[0]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setUserDataDetail(finalUserDataa[0])
    }, [finalUserDataa])

    return (
        <>
      
        </>
    );
};

export default Contacts;
