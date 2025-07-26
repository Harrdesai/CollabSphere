// src/components/CalendarHeatmap.tsx
import CalendarHeatmap from "./calendarHeatmap";
import { Card, CardContent, CardFooter } from "./ui/card";

interface VisitingTrack {
  date: string;
}

interface ContributionCalenderProps {
  data: VisitingTrack[];
  noOfDaysUserVisited: number;
  longestStreak: number;
}

const ContributionCalender: React.FC<ContributionCalenderProps> = ({ data, noOfDaysUserVisited, longestStreak }) => {
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

  console.log(dataValues)

  const today = new Date();
  const startDate = new Date(dataValues[0].date);
  const noOfDaysFromUserRegistered = Math.ceil((
    today.getTime() - startDate.getTime()
  ) / (1000 * 60 * 60 * 24));
  return (
    <Card className="mt-2 bg-transparent shadow-none border-0 gap-0 cursor-pointer p-2 overflow-auto">
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
      <CardFooter>
        <p className="text-foreground">
          Longest streak of Activeness is {longestStreak} days and visited {noOfDaysUserVisited} out of {noOfDaysFromUserRegistered} days from user join.
        </p>
      </CardFooter>
    </Card>
  );
};

export default ContributionCalender;