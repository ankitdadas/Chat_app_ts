import {
  InsertLinkSharp,
  AttachFileSharp, TextSnippet, VpnKey
} from '@mui/icons-material';
import { Hidden, IconButton, Tooltip, MenuItem } from "@mui/material";
import blueTheme from "../Config/Theme";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({ 
    navlink:{
      "& svg":{
          fill: blueTheme.palette.grey[300]
      },
      "&:hover" :{
          "& svg":{
              fill: blueTheme.palette.grey[400]
          },
      }, 
  },
 
}));



export default function ChatButtons() {



  const classes = useStyles();
  return (
    <><Hidden smUp={true}>
      <MenuItem style={{ paddingLeft:"5px",  paddingRight:"5px",}}>
        <Tooltip title="Tokens" placement="top">
          <IconButton className={classes.navlink}> <VpnKey  />  </IconButton></Tooltip>
      </MenuItem>
      <MenuItem style={{ paddingLeft:"5px",  paddingRight:"5px",}}>
        <Tooltip placement="top" title="Links">
          <IconButton className={classes.navlink}> <InsertLinkSharp  />  </IconButton></Tooltip>
      </MenuItem>
      <MenuItem style={{ paddingLeft:"5px",  paddingRight:"5px",}}>
        <Tooltip title="Attachments" placement="top"><IconButton className={classes.navlink}> <AttachFileSharp  />  </IconButton></Tooltip>
      </MenuItem>
      <MenuItem style={{ paddingLeft:"5px",  paddingRight:"5px",}}>
        <Tooltip placement="top" title="Templates"><IconButton className={classes.navlink}> <TextSnippet  />  </IconButton></Tooltip>
      </MenuItem>

    </Hidden>
      <Hidden smDown={true}>
        <Tooltip title="Tokens" placement="top">
          <IconButton className={classes.navlink}> <VpnKey  />  </IconButton>
          </Tooltip>
        <Tooltip placement="top" title="Links">
          <IconButton className={classes.navlink}> <InsertLinkSharp  />  </IconButton>
          </Tooltip>
        <Tooltip title="Attachments" placement="top">
          <IconButton className={classes.navlink}> <AttachFileSharp  />  </IconButton>
          </Tooltip>
        <Tooltip placement="top" title="Templates">
          <IconButton className={classes.navlink}> <TextSnippet  />  </IconButton>
          </Tooltip>
      </Hidden>

    </>
  );
}
