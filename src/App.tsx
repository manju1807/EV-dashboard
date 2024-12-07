import KPISection from "@/components/kpi-section";
import BestScenario from "./components/best-scenario";
import Sidebar from "./components/layout/sidebar";
import Navbar from "./components/layout/navbar";
import TitleSection from "./components/layout/title-section";
import GraphComponent from "./components/layout/dashboard-graph";

export default function App() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto p-6">
          <TitleSection />
          < BestScenario />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <GraphComponent />
            </div>
            <div className="lg:col-span-2">
              <KPISection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}