import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SidebarHeader() {
  const router = useRouter();

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ mx: 2, cursor: "pointer" }}
      onClick={() => router.push("/")}
    >
      <img
        src="https://assets.sakari.io/images/sakari-icon.svg"
        alt="Sakari icon"
        height={30}
      />
      <img
        src="https://assets.sakari.io/images/wordmark-w200.png"
        alt="Sakari wordmark"
        style={{
          height: "39.9px",
          objectFit: "contain",
        }}
      />
    </Stack>
  );
}
