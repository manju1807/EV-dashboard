import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { CustomTooltip } from './custom-tooltip';

const data = [
  { month: 'Apr', value: 40000 },
  { month: 'May', value: 20000 },
  { month: 'Jun', value: 45000 },
  { month: 'Jul', value: 90000 },
  { month: 'Aug', value: 60000 },
  { month: 'Sep', value: 35000 },
  { month: 'Oct', value: 55000 }
];

const DashboardChart: React.FC = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(72, 100%, 50%)" stopOpacity={1} />
              <stop offset="100%" stopColor="hsl(72, 100%, 50%)" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="hsl(240, 8%, 18%)"
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(240, 5%, 67%)', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(240, 5%, 67%)', fontSize: 12 }}
            tickFormatter={(value: number) => `$${value / 1000}K`}
            dx={-10}
          />
          <Tooltip content={<CustomTooltip />}
            cursor={false}
            wrapperStyle={{ outline: 'none' }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(72, 100%, 50%)"
            strokeWidth={2}
            dot={{
              fill: "hsl(72, 100%, 50%)",
              stroke: "hsl(72, 100%, 50%)",
              r: 4
            }}
            activeDot={{
              fill: "hsl(72, 100%, 50%)",
              stroke: "hsl(240, 14%, 7%)",
              strokeWidth: 2,
              r: 6
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
