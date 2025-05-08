'use client';

import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Box>
  );
}
