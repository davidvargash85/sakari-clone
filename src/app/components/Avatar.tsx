import { Avatar } from "@mui/material";

interface AvatarProps {
    initials: string;
}

export const MessageAvatar = ({ initials }: AvatarProps ) => {
  return (
    <Avatar
      sx={{
        backgroundColor: "white",
        color: "text.primary",
        border: "1px solid",
        borderColor: "grey.300",
        fontWeight: 600,
        width: 48, // or 56
        height: 48, // or 56
        fontSize: "1rem", // optional, adjust as needed
      }}
    >
      {initials}
    </Avatar>
  );
};
