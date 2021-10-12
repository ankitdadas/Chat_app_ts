import {
  InsertLinkSharp,
  AttachFileSharp, TextSnippet, VpnKey
} from '@mui/icons-material';
import { IconButton, Tooltip } from "@mui/material";

export default function ChatButtons() {



  return (
    <>
      <Tooltip title="Tokens" placement="top">
        <IconButton> <VpnKey style={{ color: "#000" }} />  </IconButton></Tooltip>
      <Tooltip placement="top" title="Links">
        <IconButton> <InsertLinkSharp style={{ color: "#000" }} />  </IconButton></Tooltip>
      <Tooltip title="Attachments" placement="top"><IconButton> <AttachFileSharp style={{ color: "#000" }} />  </IconButton></Tooltip>
      <Tooltip placement="top" title="Templates"><IconButton> <TextSnippet style={{ color: "#000" }} />  </IconButton></Tooltip>
    </>
  );
}