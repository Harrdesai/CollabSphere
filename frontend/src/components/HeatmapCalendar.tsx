// src/components/CalendarHeatmap.tsx
import CalendarHeatmap from "./calendarHeatmap";
import { Card, CardContent } from "./ui/card";

interface VisitingTrack {
  date: string;
}

interface ContributionCalenderProps {
  data: VisitingTrack[];
}

const ContributionCalender: React.FC<ContributionCalenderProps> = ({ data }) => {
  // Check if data is available and has length
  if (!data || data.length === 0) {
    return (
      <Card className="mt-2 cursor-pointer rounded-3xl p-4">
        <CardContent className="overflow-auto">
          <div className="text-center">No visiting data available</div>
        </CardContent>
      </Card>
    );
  }

  const dataValues = data?.map((track) => ({
    date: track.date,
    count: 1,
  }));

  return (
    <Card className="mt-2 bg-transparent shadow-none border-0 cursor-pointer p-2 overflow-auto">
      <CardContent className="overflow-auto pl-0">
        <div className="flex max-w-7xl">
          <span className="text-foreground flex flex-col justify-around py-2 pr-3 text-right text-xs font-semibold">
            <span className="pb-2">Mon</span>
            <span className="pb-2">Wed</span>
            <span className="pb-3">Fri</span>
          </span>
          <div className="pr-4 pb-2">
            <CalendarHeatmap
              dataValues={dataValues}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributionCalender;