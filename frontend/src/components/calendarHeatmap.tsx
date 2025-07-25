// src/components/CalendarHeatmap.tsx
type DataValue = {
  date: string;
  count: number;
};

interface CalendarHeatmapProps {
  dataValues: DataValue[];
}
export default function CalendarHeatmap({
    dataValues,
  }: CalendarHeatmapProps) {

  const monthsGrid = () => {
    const today = new Date();
    const endDate = new Date(today);
    endDate.setHours(0, 0, 0, 0);

    const startDate = new Date(today);
    startDate.setFullYear(today.getFullYear() - 1);
    startDate.setDate(startDate.getDate() + 1);
    startDate.setHours(0, 0, 0, 0);
    const daysOfWeek = startDate.getDay();
    const daysToSubtract = daysOfWeek === 0 ? 0 : daysOfWeek;
    startDate.setDate(startDate.getDate() - daysToSubtract);

    const monthsGrid = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const monthStart = new Date(currentDate);
      const monthDates = [];

      while (
        currentDate.getMonth() === monthStart.getMonth() &&
        currentDate <= endDate
      ) {
        monthDates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

        if (monthDates.length > 0) {
          monthsGrid.push(monthDates);
        }
    }
    
    return monthsGrid;
  };

  return (
      <div
        className="grid grid-flow-col gap-[2px]" 
        style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
      >

        {/* Loop through the grid data (each month) and map each day */}
        {monthsGrid().map((monthDates) => (
          monthDates.map((day) => {
            const visited = dataValues.find((item) => item.date.slice(0, 10) === day.toISOString().slice(0, 10))?.count === 1 
            return (
              
              <div
                key={monthDates.indexOf(day)}
                className="relative flex items-center justify-center"
              >
                <div
                  className={`h-3.5 w-3.5 cursor-pointer rounded border dark:border-neutral-800 ${visited ? "bg-green-300 dark:bg-green-600" : "bg-neutral-200 dark:bg-neutral-800"}`} 
                  title={ `${visited ? "Visited on" : "Day is"} ${new Date(day.toISOString()).toDateString()}`} 
                />
              </div>
            );
          })
          )
        )}
      </div>
  )
}