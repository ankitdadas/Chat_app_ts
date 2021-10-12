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
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const useStyles: any = makeStyles((theme: any) => ({
   
     
}));
const Contacts = (props: any) => {
    const [selectedIndx, setSelectedIndx] = React.useState(0);
    const [open, setOpen] = React.useState(false);
  {/*   const {
        finalUserDataa,
    } = props || {};  /*}

    const classes = useStyles();
   // const [thirdPartyDetail, setThirdPartyDetail] = React.useState(
  //      ThirdParty.data[0].detail
  //  );
 //   
  //  const [userDataDetail, setUserDataDetail] = React.useState(finalUserDataa[0]);
    

  {/*  useEffect(() => {
  //      setUserDataDetail(finalUserDataa[0])
    }, [finalUserDataa])  */}

    return (
        <>
        <Box   className="user-block" >
          <Grid container>
            <Grid item xs={12} style={{ textAlign: "right", marginBottom: "15px" }}>
              <IconButton style={{ position: "relative", zIndex: 999 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3L18.7071 2.2929C18.5196 2.10536 18.2652 2 18 2C17.7348 2 17.4804 2.10536 17.2929 2.2929L18 3ZM20.8284 5.82843L21.5355 6.53554C21.926 6.14501 21.926 5.51185 21.5355 5.12132L20.8284 5.82843ZM10.9289 15.7279V16.7279C11.1941 16.7279 11.4485 16.6226 11.636 16.435L10.9289 15.7279ZM8.1005 12.8995L7.39339 12.1924C7.20585 12.3799 7.1005 12.6343 7.1005 12.8995H8.1005ZM8.1005 15.7279H7.1005C7.1005 16.2802 7.54821 16.7279 8.1005 16.7279V15.7279ZM21 21V22C21.5523 22 22 21.5523 22 21H21ZM3 21H2C2 21.5523 2.44772 22 3 22V21ZM3 3V2C2.44772 2 2 2.44772 2 3H3ZM17.2929 3.70711L20.1213 6.53554L21.5355 5.12132L18.7071 2.2929L17.2929 3.70711ZM20.1213 5.12132L10.2218 15.0208L11.636 16.435L21.5355 6.53554L20.1213 5.12132ZM8.8076 13.6066L18.7071 3.70711L17.2929 2.2929L7.39339 12.1924L8.8076 13.6066ZM10.9289 14.7279H8.1005V16.7279H10.9289V14.7279ZM9.1005 15.7279V12.8995H7.1005V15.7279H9.1005ZM21 20H3V22H21V20ZM4 21V3H2V21H4ZM3 4H12V2H3V4ZM20 12V21H22V12H20Z" fill="#324552"/>
</svg>

              </IconButton>
            </Grid>
            <Box className="profileCard" style={{ position: "relative" }}>
             {/* {userDataDetail && (  */}
                <Grid item xs={12}>
                  <Paper className="profileCardInner" style={{background:"#fff"}}>
                    <Box className="userAvtarHolder">
                      <IconButton className="arrowIcon left" >  <ArrowBackIosIcon />  </IconButton>
  
                      <Avatar
                        variant="circular"
                        className="profileCardImage"
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
  
                      <IconButton className="arrowIcon right"  >  <ArrowForwardIosIcon /> </IconButton>
                    </Box>
                    <Box >
                      <Grid container>
                        <Grid xs={12} item style={{ textAlign: "center" }}>
                          <Typography style={{
                               textAlign: "center",
                               fontSize: 20,
                               fontFamily: "Work Sans",
                               marginTop: 10,
                               marginBottom: 20,
                          }} >
                              Profile data to be show
                           {/*  {`${userDataDetail.contact.firstName} ${userDataDetail.contact.lastName}`} */}
                          </Typography>
                        </Grid>
                        <Grid xs={12} item >
                        <Box
                          className="profileCardText"
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <MailOutlineSharpIcon />
                          Email ID
                         {/*  {`${userDataDetail.contact.email} `}  */}
                        </Box>
  
                        <Box
                          className="profileCardText"
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <LocalPhoneOutlinedIcon />
                          MObile Number
                          {/* `${ userDataDetail.contact.mobile.number} `  */} 
                        </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Grid>
              {/* )}  */}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Paper className="contactCrollPanel" style={{background:"#EAF0FF",}} elevation={0} >
            {/* {thirdPartyDetail &&
            //    thirdPartyDetail.length > 0 &&
            //   thirdPartyDetail.map((t, indx) => {
            //      console.log(t.logo);
            //      return ( */ }
                    <Accordion >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "space-between",
                          minHeight: "40px",
                          margin:"5px 0px !important"
                        }}
                      >
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            width: "100%",
                            
                          }}
                        >
                          <img
                            width="30"
                            // alt={t.Integration}
                            // src={t.logo}
                            src="https://uilogos.co/img/logotype/circle.png"
                            style={{ marginRight: "15px" }}
                          />
                          <Typography>

                              typography
                              
                             {/* {`${t.Integration}`}  */}
                          </Typography>
                        </div>
                       
                          <SettingsOutlinedIcon style={{ color: "#AAB2B8" }} /> 
                           
                        </AccordionSummary>
                      <AccordionDetails>
                        <Grid wrap="nowrap" spacing={0} container>
                          <Grid xs={1} style={{ minWidth: "40px" }}></Grid>
                          <Grid className="message-spacing">
                          <div> Gender </div>
                            <div>Age</div>
                            <div>Color</div>
                            <div>Country</div>
                           {/* <div> {t.gender} </div>
                            <div>{t.age}</div>
                            <div>{t.color}</div>
                            <div>{t.country}</div>  */}
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
               {/*   );
                 })}  */}
            </Paper>
          </Grid>
        </Box>
      </>
    );
};

export default Contacts;



