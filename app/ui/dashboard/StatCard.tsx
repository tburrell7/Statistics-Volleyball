import { SvgIconComponent } from "@mui/icons-material";
import { Icon, Card, CardContent, Box, Typography } from "@mui/material";
import { title } from "process";

interface StatCardProps {
  title: string;
  value: number;
  icon: SvgIconComponent;
  color: string;
}

export default function StatCard(props: StatCardProps) {
  const { title, value, icon, color } = props;
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ mt: 1 }}>
              {value}
            </Typography>
          </Box>
          <Icon sx={{ color: color }} />
        </Box>
      </CardContent>
    </Card>
  );
}
