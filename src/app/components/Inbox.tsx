import { useState } from "react";
import { Box, TextField } from "@mui/material";
import Conversations from "./Conversations";
import MessageList from "./Messages";

export default function InboxPage() {
  // const [selectedId, setSelectedId] = useState<string | null>(null);
  const [input, setInput] = useState("");

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Conversations />
      <Box sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
          <MessageList conversationId="conv_1" />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <Button onClick={handleSend} sx={{ ml: 1 }} variant="contained" endIcon={<Send />}>
            Send
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
}
