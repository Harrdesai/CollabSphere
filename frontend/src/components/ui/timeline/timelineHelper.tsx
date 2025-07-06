import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Loader2 } from 'lucide-react'; // Spinner icon

type TimelineEvent = {
  id: string;
  createdAt: string;
  designation: string;
  action: string;
  user: {
    firstName: string;
    lastName: string;
  };
};

type TimelineDetails = {
  startDate: string;
  endDate: string;
  timeline: TimelineEvent[];
};

type TimelineViewerProps = {
  timelineDetails: TimelineDetails;
  actionLabelConvert: (action: string) => string;
};

const TimelineViewer: React.FC<TimelineViewerProps> = ({ timelineDetails, actionLabelConvert }) => {
  const [groupedTimeline, setGroupedTimeline] = useState<Record<string, Record<string, TimelineEvent[]>>>({});
  const [loading, setLoading] = useState(true);

  const now = moment();
  const [selectedYear, setSelectedYear] = useState(now.format('YYYY'));
  const [selectedMonth, setSelectedMonth] = useState(now.format('MMMM'));

  useEffect(() => {
    if (!timelineDetails?.timeline) return;

    setLoading(true);

    // Simulate processing delay if needed
    const timeout = setTimeout(() => {
      const grouped: Record<string, Record<string, TimelineEvent[]>> = {};

      timelineDetails.timeline.forEach((event) => {
        const date = moment(event.createdAt);
        const year = date.format('YYYY');
        const month = date.format('MMMM');

        if (!grouped[year]) grouped[year] = {};
        if (!grouped[year][month]) grouped[year][month] = [];

        grouped[year][month].push(event);
      });

      setGroupedTimeline(grouped);
      setLoading(false);
    }, 0); // You can set this to 200–300ms if you want artificial delay

    return () => clearTimeout(timeout);
  }, [timelineDetails]);

  const monthsForSelectedYear = Object.keys(groupedTimeline[selectedYear] || {});
  const eventsToShow = groupedTimeline[selectedYear]?.[selectedMonth] || [];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <ScrollArea className="rounded-2xl max-h-[75vh] border-0 p-2">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          Timeline: {timelineDetails?.startDate} to {timelineDetails?.endDate}
        </p>

        <div className="flex gap-2 mt-2">
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {Object.keys(groupedTimeline).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            {monthsForSelectedYear.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>

      {eventsToShow.length > 0 ? (
        eventsToShow.map((event) => (
          <Card className="flex flex-col w-full border-none p-2 mb-2" key={event.id}>
            <Collapsible>
              <CollapsibleTrigger className="font-semibold text-primary">
                {moment(event.createdAt).format('MMM D, YYYY')} - {event.designation}
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
                <p>Action: {actionLabelConvert(event.action)}</p>
                <p>Name: {event.user.firstName} {event.user.lastName}</p>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))
      ) : (
        <p className="text-muted-foreground">No events in {selectedMonth} {selectedYear}</p>
      )}
    </ScrollArea>
  );
};

export default TimelineViewer;