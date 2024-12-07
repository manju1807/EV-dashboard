import React from 'react'
import DashboardChart from '../dashboard-chart'

const GraphComponent: React.FC = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Graphs</h2>
        <select
          className="bg-secondary/50 border border-border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option>Unsatisfied Demand %</option>
        </select>
      </div>
      <DashboardChart />
    </div>
  )
}

export default GraphComponent