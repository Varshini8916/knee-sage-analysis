
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type HeatmapData = {
  x: string;
  y: string;
  value: number;
}

const PerformanceHeatmap = () => {
  // Sample data for the heatmap (accuracy across different age groups and genders)
  const data: HeatmapData[] = [
    { x: "45-55", y: "Male", value: 0.88 },
    { x: "45-55", y: "Female", value: 0.92 },
    { x: "56-65", y: "Male", value: 0.90 },
    { x: "56-65", y: "Female", value: 0.94 },
    { x: "66-75", y: "Male", value: 0.89 },
    { x: "66-75", y: "Female", value: 0.91 },
    { x: "76+", y: "Male", value: 0.85 },
    { x: "76+", y: "Female", value: 0.87 },
  ];

  const xLabels = ["45-55", "56-65", "66-75", "76+"];
  const yLabels = ["Male", "Female"];

  // Function to determine the color based on the value
  const getColor = (value: number) => {
    if (value >= 0.93) return "bg-green-600";
    if (value >= 0.90) return "bg-green-500";
    if (value >= 0.87) return "bg-green-400";
    if (value >= 0.85) return "bg-green-300";
    return "bg-green-200";
  };

  // Function to find data value for a specific x and y coordinate
  const findValue = (x: string, y: string) => {
    const found = data.find(item => item.x === x && item.y === y);
    return found ? found.value : 0;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="text-sm text-gray-500 mb-2">Accuracy across demographics</div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex">
          <div className="w-16"></div>
          {xLabels.map(label => (
            <div key={label} className="flex-1 text-center font-medium text-xs">
              {label}
            </div>
          ))}
        </div>
        
        {yLabels.map(yLabel => (
          <div key={yLabel} className="flex flex-1 mb-1">
            <div className="w-16 flex items-center font-medium text-xs">
              {yLabel}
            </div>
            {xLabels.map(xLabel => {
              const value = findValue(xLabel, yLabel);
              return (
                <TooltipProvider key={`${xLabel}-${yLabel}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex-1 mx-0.5">
                        <div 
                          className={`rounded h-full ${getColor(value)} flex items-center justify-center text-white font-semibold text-xs`}
                        >
                          {(value * 100).toFixed(0)}%
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">Age: {xLabel}</p>
                      <p className="text-xs">Gender: {yLabel}</p>
                      <p className="text-xs font-bold">Accuracy: {(value * 100).toFixed(1)}%</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-auto pt-2">
        <div className="flex items-center">
          <div className="text-xs text-gray-600 mr-2">Accuracy:</div>
          <div className="flex">
            <div className="w-6 h-3 bg-green-200 rounded-l"></div>
            <div className="w-6 h-3 bg-green-300"></div>
            <div className="w-6 h-3 bg-green-400"></div>
            <div className="w-6 h-3 bg-green-500"></div>
            <div className="w-6 h-3 bg-green-600 rounded-r"></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-600 mt-1 w-30 ml-1">
            <span>85%</span>
            <span>95%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceHeatmap;
