"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Drawer,
  List,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PhoneIcon from "@mui/icons-material/Phone";
import GroupIcon from "@mui/icons-material/Group";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupsIcon from "@mui/icons-material/Groups";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SidebarHeader from "@/app/components/SidebarHeader";
import SidebarItem from "@/app/components/SidebarItem";

const menuItems = [
  { text: "Inbox", icon: <InboxIcon />, route: "/inbox" },
  { text: "Calls", icon: <PhoneIcon />, route: "/calls" },
  { text: "Contacts", icon: <GroupIcon />, route: "/contacts" },
  { text: "Campaigns", icon: <CampaignIcon />, route: "/campaigns" },
  { text: "Senders", icon: <SendIcon />, route: "/senders" },
  { text: "Groups", icon: <GroupsIcon />, route: "/groups" },
  { text: "Integrations", icon: <ShareIcon />, route: "/integrations" },
  { text: "Tools", icon: <SettingsIcon />, route: "/tools" },
  {
    text: "Feature Requests",
    icon: <TipsAndUpdatesIcon />,
    route: "/feature-requests",
    isConfig: true,
  },
  {
    text: "Support Center",
    icon: <HelpOutlineIcon />,
    route: "/support",
    isConfig: true,
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    route: "/settings",
    isConfig: true,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{ width: 240, flexShrink: 0, height: "100vh" }}
    >
      <Box
        sx={{
          width: 240,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box>
          <SidebarHeader />
          <List>
            {menuItems
              .filter((e) => !e.isConfig)
              .map(({ text, icon, route }) => (
                <SidebarItem
                  key={text}
                  selected={pathname === route}
                  onClick={() => router.push(route)}
                  icon={icon}
                  text={text}
                />
              ))}
          </List>
        </Box>
        <List>
          {menuItems
            .filter((e) => e.isConfig)
            .map(({ text, icon, route }) => (
              <SidebarItem
                key={text}
                selected={pathname === route}
                onClick={() => router.push(route)}
                icon={icon}
                text={text}
              />
            ))}
        </List>
      </Box>
    </Drawer>
  );
}
