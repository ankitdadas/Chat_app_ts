import * as React from 'react';
 
import { InsertLinkSharp,
  AttachFileSharp, TextSnippet, VpnKey
} from '@mui/icons-material';
import { IconButton,  Tooltip} from "@mui/material";
import TokenIcon from "../Common/TokenIcon/TokenIcon";

export default function ChatButtons() {

 

  return (
    <>
      <IconButton> <TokenIcon />  </IconButton>
      <IconButton> <InsertLinkSharp style={{color:"#000"}} />  </IconButton>
      <IconButton> <AttachFileSharp style={{color:"#000"}} />  </IconButton>
      <IconButton> <TextSnippet style={{color:"#000"}} />  </IconButton>      
    </>
  );
}