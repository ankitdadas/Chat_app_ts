import {
  InsertLinkSharp,
  AttachFileSharp, TextSnippet, VpnKey
} from '@mui/icons-material';
import { Hidden, IconButton, Tooltip, MenuItem } from "@mui/material";

export default function ChatButtons() {



  return (
    <><Hidden smUp={true}>
      <MenuItem >
        <Tooltip title="Tokens" placement="top">
          <IconButton> <VpnKey style={{ color: "#a6a7a6" }} />  </IconButton></Tooltip>
      </MenuItem>
      <MenuItem >
        <Tooltip placement="top" title="Links">
          <IconButton> <InsertLinkSharp style={{ color: "#a6a7a6" }} />  </IconButton></Tooltip>
      </MenuItem>
      <MenuItem >
        <Tooltip title="Attachments" placement="top"><IconButton> <AttachFileSharp style={{ color: "#a6a7a6" }} />  </IconButton></Tooltip>
      </MenuItem>
      <MenuItem >
        <Tooltip placement="top" title="Templates"><IconButton> <TextSnippet style={{ color: "#a6a7a6" }} />  </IconButton></Tooltip>
      </MenuItem>

    </Hidden>
      <Hidden smDown={true}>
        <Tooltip title="Tokens" placement="top">
          <IconButton> <VpnKey style={{ color: "#a6a7a6" }} />  </IconButton></Tooltip>
        <Tooltip placement="top" title="Links">
          <IconButton> <InsertLinkSharp style={{ color: "//#endregiona6a7a6" }} />  </IconButton></Tooltip>
        <Tooltip title="Attachments" placement="top"><IconButton> <AttachFileSharp style={{ color: "#a6a7a6" }} />  </IconButton></Tooltip>
        <Tooltip placement="top" title="Templates"><IconButton> <TextSnippet style={{ color: "#a6a7a6" }} />  </IconButton></Tooltip>
      </Hidden>

    </>
  );
}