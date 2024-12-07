import React from 'react';
import { ArrowUpIcon } from "lucide-react";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;

    return (
      <div className="bg-card/95 backdrop-blur-sm rounded-lg shadow-lg border border-border p-4 min-w-[200px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-semibold text-foreground">
            ${(value / 1000).toFixed(2)}k
          </span>
          <button className="ml-auto text-muted-foreground hover:text-foreground">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-.25-4.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm2.35-6.378c-.614.344-.985.771-.985 1.378a1 1 0 1 1-2 0c0-1.264.835-2.102 1.615-2.53.726-.392 1.135-.63 1.135-1.122 0-.69-.56-1.247-1.25-1.247-.691 0-1.25.557-1.25 1.247a1 1 0 1 1-2 0c0-1.799 1.452-3.247 3.25-3.247s3.25 1.448 3.25 3.247c0 1.524-1.222 2.268-1.9 2.65z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1 text-[#BFFF00]">
            <ArrowUpIcon className="w-4 h-4" />
            4.6%
          </span>
          <span className="text-muted-foreground">above target</span>
        </div>
      </div>
    );
  }
  return null;
};
