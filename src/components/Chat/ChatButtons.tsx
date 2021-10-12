import * as React from 'react';

import {
  InsertLinkSharp,
  AttachFileSharp, TextSnippet, VpnKey
} from '@mui/icons-material';
import { IconButton } from "@mui/material";

export default function ChatButtons() {



  return (
    <>
      <IconButton> <VpnKey style={{ color: "#000" }} />  </IconButton>
      <IconButton> <InsertLinkSharp style={{ color: "#000" }} />  </IconButton>
      <IconButton> <AttachFileSharp style={{ color: "#000" }} />  </IconButton>
      <IconButton> <TextSnippet style={{ color: "#000" }} />  </IconButton>
    </>
  );
}