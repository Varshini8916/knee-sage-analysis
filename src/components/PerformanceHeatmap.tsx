
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type HeatmapData = {
  x: string;
  y: string;
  value: number;
}

const PerformanceHeatmap = () => {
  // Sample data for the heatmap (accuracy across different age groups and genders)
  const [data] = useState<HeatmapData[]>([
    { x: "45-55", y: "Male", value: 0.88 },
    { x: "45-55", y: "Female", value: 0.92 },
    { x: "56-65", y: "Male", value: 0.90 },
    { x: "56-65", y: "Female", value: 0.94 },
    { x: "66-75", y: "Male", value: 0.89 },
    { x: "66-75", y: "Female", value: 0.91 },
    { x: "76+", y: "Male", value: 0.85 },
    { x: "76+", y: "Female", value: 0.87 },
  ]);

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
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Model Performance Heatmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-500 mb-2">Performance across different demographics (Accuracy)</div>
        <div className="flex flex-col mt-4">
          <div className="flex mb-2">
            <div className="w-20"></div>
            {xLabels.map(label => (
              <div key={label} className="flex-1 text-center font-medium text-sm">
                {label}
              </div>
            ))}
          </div>
          
          {yLabels.map(yLabel => (
            <div key={yLabel} className="flex mb-2">
              <div className="w-20 flex items-center font-medium text-sm">
                {yLabel}
              </div>
              {xLabels.map(xLabel => {
                const value = findValue(xLabel, yLabel);
                return (
                  <TooltipProvider key={`${xLabel}-${yLabel}`}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex-1 mx-1">
                          <div 
                            className={`rounded h-12 ${getColor(value)} flex items-center justify-center text-white font-semibold`}
                          >
                            {(value * 100).toFixed(1)}%
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Age: {xLabel}</p>
                        <p>Gender: {yLabel}</p>
                        <p>Accuracy: {(value * 100).toFixed(1)}%</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex items-center">
            <div className="text-sm text-gray-600 mr-2">Accuracy:</div>
            <div className="flex">
              <div className="w-8 h-4 bg-green-200 rounded-l"></div>
              <div className="w-8 h-4 bg-green-300"></div>
              <div className="w-8 h-4 bg-green-400"></div>
              <div className="w-8 h-4 bg-green-500"></div>
              <div className="w-8 h-4 bg-green-600 rounded-r"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-1 w-40 ml-1">
              <span>85%</span>
              <span>90%</span>
              <span>95%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceHeatmap;
