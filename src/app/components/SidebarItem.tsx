"use client";

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const StyledListItemButton = styled(ListItemButton)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    borderRadius: 8,
    marginBottom: 4,
    backgroundColor: selected ? `${theme.palette.primary.main}14` : undefined,
    color: selected ? theme.palette.primary.main : undefined,
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main}0A`,
      color: theme.palette.primary.main,
    },
    "& .MuiListItemIcon-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 40,
      color: selected
        ? theme.palette.primary.main
        : theme.palette.text.secondary,
    },
    "&:hover .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
  })
);

export default function SidebarItem({
  text,
  icon,
  selected,
  onClick,
}: SidebarItemProps) {
  return (
    <StyledListItemButton selected={selected} onClick={onClick}>
      <ListItemIcon sx={{ minWidth: 32 }}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </StyledListItemButton>
  );
}
