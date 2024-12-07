import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KPICardProps {
  title: string;
  value: string;
  description: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, description }) => {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-base text-foreground font-medium">{title}</h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-muted-foreground hover:text-muted-foreground"
        >
          <Info className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm text-muted-foreground/80 mb-4">{description}</p>
      <p className="text-right text-[28px] font-semibold tracking-tight">{value}</p>
    </div>
  );
};

const KPISection = () => {
  const kpis = [
    {
      title: "Infrastructure Units",
      value: "€421.07",
      description: "This describes variable two and what the shown data means."
    },
    {
      title: "Charging Growth",
      value: "33.07",
      description: "This describes variable two and what the shown data means."
    },
    {
      title: "Localization change",
      value: "21.9%",
      description: "This describes variable two and what the shown data means."
    },
    {
      title: "Fleet growth",
      value: "7.03%",
      description: "This describes variable two and what the shown data means."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Key Performance Indicators</h2>
        <Button
          variant="secondary"
          size="sm"
          className="h-8 px-3 py-1 rounded-md text-sm font-medium bg-secondary/50 hover:bg-secondary/70"
        >
          Variables +
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {kpis.map((kpi) => (
          <KPICard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            description={kpi.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KPISection;