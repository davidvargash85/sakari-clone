"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { MessageAvatar } from "./Avatar";

interface Message {
  id: string;
  message: string;
  createdAt: string;
  outgoing: boolean;
  status: "delivered" | "received" | "error";
  initials: string;
}

interface MessageListProps {
  conversationId: string;
}

const MessageBubble = styled(Paper)<{ outgoing: boolean }>(
  ({ theme, outgoing }) => ({
    padding: theme.spacing(1.5),
    borderRadius: 12,
    maxWidth: "75%",
    backgroundColor: outgoing
      ? theme.palette.primary.main
      : theme.palette.grey[100],
    color: outgoing ? "#fff" : theme.palette.text.primary,
    wordBreak: "break-word",
    borderTopRightRadius: outgoing ? 0 : 12,
    borderTopLeftRadius: outgoing ? 12 : 0,
  })
);

const MessageList = ({ conversationId }: MessageListProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `/api/messages?conversationId=${conversationId}`
        );
        const json = await res.json();
        if (json.success) {
          setMessages(json.data);
        }
      } catch (err) {
        console.error("Failed to load messages", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [conversationId]);

  if (loading) {
    return (
      <Box p={3}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box px={2} py={3} display="flex" flexDirection="column" gap={1}>
      {messages.map((msg) => (
        <Box
          key={msg.id}
          display="flex"
          justifyContent={msg.outgoing ? "flex-end" : "flex-start"}
          alignItems="flex-start"
          gap={2}
        >
          {!msg.outgoing && <MessageAvatar initials={msg.initials} />}
          <Box
            display="flex"
            flexDirection="column"
            alignItems={msg.outgoing ? "flex-end" : "flex-start"}
          >
            <MessageBubble outgoing={msg.outgoing} elevation={1}>
              <Typography variant="body2">{msg.message}</Typography>
            </MessageBubble>
            <Typography
              variant="caption"
              color="text.secondary"
              textAlign={msg.outgoing ? "right" : "left"}
              display="block"
              mt={0.5}
            >
              {new Date(msg.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
          </Box>
          {msg.outgoing && <MessageAvatar initials={msg.initials} />}
        </Box>
      ))}
    </Box>
  );
};

export default MessageList;
