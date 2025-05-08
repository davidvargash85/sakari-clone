// components/ConversationItem.tsx
"use client";

import {
  Box,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ConversationSummary } from "@/app/types";
import { MessageAvatar } from "./Avatar";

interface ConversationProps extends ConversationSummary {
  selected: boolean;
  onClick: () => void;
}

const StyledListItem = styled(ListItemButton)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: selected
      ? `${theme.palette.action.selected} !important`
      : "inherit",
    "&:hover": {
      backgroundColor: selected ? "#adc9f4" : theme.palette.action.hover,
    },
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  })
);

const ConversationItem = ({
  id,
  name,
  initials,
  lastMessage,
  time,
  selected,
  onClick,
}: ConversationProps) => {
  return (
    <StyledListItem selected={selected} onClick={onClick} key={id}>
      <ListItemAvatar sx={{ position: "relative" }}>
        <MessageAvatar initials={initials} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={600} color="text.primary">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color={selected ? "theme.palette.grey[500]" : "text.secondary"}
            >
              {time}
            </Typography>
          </Box>
        }
        secondary={
          <Typography
            variant="body2"
            color={selected ? "theme.palette.grey[500]" : "text.secondary"}
            noWrap
          >
            {lastMessage}
          </Typography>
        }
      />
    </StyledListItem>
  );
};

export default ConversationItem;
