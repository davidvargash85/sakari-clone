import { useEffect, useState } from "react";
import { Box, Typography, List, Paper, CircularProgress } from "@mui/material";
import { ConversationSummary } from "../types";
import ConversationItem from "./ConversationItem";

const Conversations = () => {
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await fetch("/api/conversations");
        const json = await res.json();
        setConversations(json.data);
        setSelectedId(json.data[0]?.id || null);
      } catch (err) {
        console.error(err);
        setError("Failed to load conversations");
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ width: 300, borderRight: "1px solid #ccc" }}>
      <Paper variant="outlined">
        <List disablePadding>
          {conversations.map((conv) => (
            <ConversationItem
              key={conv.id}
              id={conv.id}
              name={conv.name}
              initials={conv.initials}
              lastMessage={conv.lastMessage}
              time={conv.time}
              selected={conv.id === selectedId}
              onClick={() => setSelectedId(conv.id)}
            />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Conversations;
