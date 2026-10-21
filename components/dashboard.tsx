"use client"

// The page body: the shared shell around this registry's view.
// One of the files that differ between the per-registry dashboard repos.
import { DashboardShell } from "@/components/dashboard-shell"
import { FarmerOverviewDashboard } from "@/components/farmer-overview-dashboard"

export function Dashboard() {
  return (
    <DashboardShell>
      {(filters, onMapFilterChange) => <FarmerOverviewDashboard filters={filters} onMapFilterChange={onMapFilterChange} />}
    </DashboardShell>
  )
}
