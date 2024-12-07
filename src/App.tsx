import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { History, Share2, Home, Bell, ShoppingBag, User, Settings } from "lucide-react";
import DashboardChart from "./components/dashboard-chart";

export default function App() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-16 bg-card border-r border-border flex flex-col items-center py-4 gap-6">
        <Button variant={'default'} className="p-2 text-muted-foreground hover:text-foreground">
          <Home size={20} />
        </Button>
        <Button className="p-2 text-muted-foreground hover:text-foreground">
          <Bell size={20} />
        </Button>
        <Button className="p-2 text-muted-foreground hover:text-foreground">
          <ShoppingBag size={20} />
        </Button>
        <Button className="p-2 text-muted-foreground hover:text-foreground">
          <User size={20} />
        </Button>
        <div className="mt-auto">
          <Button className="p-2 text-muted-foreground hover:text-foreground">
            <Settings size={20} />
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            {/* Navigation Tabs */}
            <div className="flex gap-2">
              <Button variant="secondary" className="bg-secondary text-foreground">
                Charging Stations
              </Button>
              <Button variant="ghost" className="text-muted-foreground">
                Fleet Sizing
              </Button>
              <Button variant="ghost" className="text-muted-foreground">
                Parking
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-secondary/50 border border-border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {/* Title Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-md">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold">Charging Station</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="gap-2">
                <History size={16} />
              </Button>
              <Button variant="secondary" className="gap-2">
                Edit Variables
              </Button>
              <Button variant="ghost" className="gap-2">
                <Share2 size={16} />
              </Button>
            </div>
          </div>

          {/* Best Scenario Results */}
          <section className="mb-8">
            <h2 className="text-primary text-lg font-medium mb-4">Best Scenario Results</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-card/50">
                <p className="text-muted-foreground">
                  The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card/50">
                <p className="text-muted-foreground">
                  The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                </p>
              </div>
            </div>
          </section>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Graph Section */}
            <div className="lg:col-span-2">
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
            </div>

            {/* KPI Cards */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
              <div className="grid gap-4">
                {[
                  { title: "Infrastructure Units", value: "€421.07" },
                  { title: "Charging Growth", value: "33.07" },
                  { title: "Localization change", value: "21.9%" },
                  { title: "Fleet growth", value: "7.03%" }
                ].map((kpi) => (
                  <div key={kpi.title} className="bg-card rounded-lg border border-border p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-muted-foreground">{kpi.title}</span>
                      <Button variant="ghost" size="icon" className="h-4 w-4 text-muted-foreground">
                        ⓘ
                      </Button>
                    </div>
                    <div className="text-2xl font-semibold">{kpi.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}