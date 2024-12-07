import { useState, useCallback, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Search, Plus, ChevronDown, RefreshCw, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface VariableButtonProps {
  label: string;
  active?: boolean;
  icon?: "plus" | "chevron";
  onHover?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
}

const VariableButton = ({
  label,
  active = false,
  icon,
  onHover,
  onHoverEnd,
  onClick,
}: VariableButtonProps) => (
  <Button
    variant="ghost"
    className={`
      flex items-center gap-1 px-3 py-2 rounded-full border transition-all
      ${active
        ? "border-primary bg-primary/10 text-primary"
        : "border-border bg-card/50 text-muted-foreground hover:text-foreground"
      }
    `}
    onMouseEnter={onHover}
    onMouseLeave={onHoverEnd}
    onClick={onClick}
  >
    <span className="text-sm">{label}</span>
    {icon === "plus" && <Plus size={14} />}
    {icon === "chevron" && <ChevronDown size={14} />}
  </Button>
);

const EditVariablesSheet = () => {
  const [selectedVariables, setSelectedVariables] = useState<Set<string>>(new Set());
  const [hoveredVariable, setHoveredVariable] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (hoveredVariable === 'Co2 Distribution' && selectedVariables.size > 1) {
      timer = setTimeout(() => setShowInfo(true), 1500);
    } else {
      setShowInfo(false);
    }

    return () => clearTimeout(timer);
  }, [hoveredVariable, selectedVariables.size]);

  const handleVariableHover = useCallback((variable: string) => {
    setHoveredVariable(variable);
  }, []);

  const handleVariableHoverEnd = useCallback(() => {
    setHoveredVariable(null);
  }, []);

  const handleVariableToggle = useCallback((variable: string) => {
    setSelectedVariables((prev) => {
      const updated: Set<string> = new Set(prev); // Ensure assignment
      if (updated.has(variable)) {
        updated.delete(variable);
      } else {
        updated.add(variable);
      }
      return updated;
    });
  }, []);


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="gap-1 px-4 py-2">
          Edit Variables
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[100dvw] md:w-[540px] lg:w-[640px] bg-background border-l border-border p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="p-4 py-12 border-b border-border">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg">Edit Variables</SheetTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-secondary/50 hover:bg-secondary/70"
                >
                  Autofill
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-primary/10 hover:bg-primary/20 text-primary"
                >
                  <RefreshCw size={14} className="mr-2" />
                  Rerun
                </Button>
              </div>
            </div>

            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search variables..."
                className="w-full bg-secondary/50 border border-border rounded-md pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </SheetHeader>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto px-0 py-4">
            <Accordion type="single" collapsible defaultValue="variables">
              <AccordionItem value="variables" className="border-none">
                <div className="space-y-6 px-4 mb-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Variable category 1</h3>
                    <div className="flex flex-wrap gap-2">
                      <VariableButton
                        label="Carbon 1"
                        icon="plus"
                        onClick={() => handleVariableToggle('Carbon 1')}
                        active={selectedVariables.has('Carbon 1')}
                      />
                      <VariableButton
                        label="Co2 Distribution"
                        icon="chevron"
                        onHover={() => handleVariableHover('Co2 Distribution')}
                        onHoverEnd={handleVariableHoverEnd}
                        onClick={() => handleVariableToggle('Co2 Distribution')}
                        active={selectedVariables.has('Co2 Distribution')}
                      />
                      <VariableButton
                        label="Fleet sizing"
                        icon="chevron"
                        onClick={() => handleVariableToggle('Fleet sizing')}
                        active={selectedVariables.has('Fleet sizing')}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Variable Category 2</h3>
                    <div className="flex flex-wrap gap-2">
                      <VariableButton label="Parking Rate" icon="plus" />
                      <VariableButton label="Border Rate" active icon="chevron" />
                      <VariableButton label="Request rate" active icon="chevron" />
                      <VariableButton label="Variable 1" icon="plus" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Variable Category 3</h3>
                    <div className="flex flex-wrap gap-2">
                      <VariableButton label="Variable 1" icon="plus" />
                      <VariableButton label="Variable 1" active icon="chevron" />
                      <VariableButton label="Variable 1" active icon="chevron" />
                    </div>
                  </div>
                </div>
                {showInfo && (
                  <div className="mt-8 p-4 bg-card/50 border border-border transition-all ease-in-out duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-medium">Co2 Distribution</h3>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Switch is versatile, suitable for all ages. Use it as a scooter, bike, or skateboard.
                    </p>
                  </div>
                )}
              </AccordionItem>
            </Accordion>

            <div className="border-t border-border mt-0">
              <Accordion type="single" collapsible className="px-0 py-4 space-y-4">
                <AccordionItem value="primary" className="border-border border-px border-t border-b bg-card/50">
                  <AccordionTrigger className="px-4 py-3 text-primary hover:no-underline">
                    Primary Variables
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {/* Primary variables content */}
                    Switch is versatile, suitable for all ages. Use it as a scooter, bike, or skateboard.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="secondary" className="border-border border-px border-t border-b bg-card/50">
                  <AccordionTrigger className="px-4 py-3 text-primary hover:no-underline">
                    Secondary Variables
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {/* Secondary variables content */}
                    Switch is versatile, suitable for all ages. Use it as a scooter, bike, or skateboard.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditVariablesSheet;
