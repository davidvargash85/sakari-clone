import { useState } from 'react';
import {
  Box,
  TextField,
} from '@mui/material';
import Conversations from './Conversations';

export default function InboxPage() {
  // const [selectedId, setSelectedId] = useState<string | null>(null);
  const [input, setInput] = useState('');

  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Conversations />
      <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
          {/* {messages.map((msg, index) => (
            <Box key={index} sx={{ textAlign: msg.from === 'user' ? 'left' : 'right', mb: 1 }}>
              <Paper
                sx={{
                  display: 'inline-block',
                  p: 1.5,
                  backgroundColor: msg.from === 'user' ? '#f5f5f5' : '#e3f2fd',
                }}
              >
                <Typography variant="body2">{msg.text}</Typography>
                <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                  {msg.time}
                </Typography>
              </Paper>
            </Box>
          ))} */}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
