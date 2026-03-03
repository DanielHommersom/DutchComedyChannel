import Button from "@mui/material/Button";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumberOutlined";

interface TicketButtonProps {
  affiliateUrl: string;
  label?: string;
  fullWidth?: boolean;
}

export default function TicketButton({
  affiliateUrl,
  label = "Koop tickets",
  fullWidth = false,
}: TicketButtonProps) {
  return (
    <Button
      component="a"
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored" // "sponsored" is required for affiliate links (Google guidelines)
      variant="contained"
      color="primary"
      fullWidth={fullWidth}
      startIcon={<ConfirmationNumberIcon />}
      sx={{ fontWeight: 700, fontSize: "1rem" }}
    >
      {label}
    </Button>
  );
}
