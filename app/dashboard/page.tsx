"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SportsTennis, Timeline, Error, BarChart } from "@mui/icons-material";
import StatCard from "@/app/ui/dashboard/StatCard";

// interface Stats {
//   matchesPlayed: number;
//   kills: number;
//   errors: number;
//   attempts: number;
// }

const VolleyballDashboard = () => {
  // Placeholder data - would normally come from your backend
  const stats = {
    matchesPlayed: 15,
    kills: 127,
    errors: 23,
    attempts: 245,
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Volleyball Statistics Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={8}>
          <StatCard
            title="Matches Played"
            value={stats.matchesPlayed}
            icon={SportsTennis}
            color="primary.main"
          />
        </Grid>

        <Grid size={8}>
          <StatCard
            title={"Kills"}
            value={stats.kills}
            icon={Timeline}
            color="success.main"
          />
        </Grid>

        <Grid size={8}>
          <StatCard
            title="Errors"
            value={stats.errors}
            icon={Error}
            color="error.main"
          />
        </Grid>

        <Grid size={8}>
          <StatCard
            title="Attempts"
            value={stats.attempts}
            icon={BarChart}
            color="secondary.main"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default VolleyballDashboard;
