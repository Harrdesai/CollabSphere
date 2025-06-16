// src/page/HomePage.tsx
import moment from "moment";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/store/useAuthStore";
import useNoticeBoardStore from "@/store/useNoticeBoard.store";
import { useEffect, useState } from "react";
import NoticeDetailModal from "@/components/Notice/noticeDetail";

export interface NoticeProps {
  id: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

const HomePage = () => {
  const { authUser } = useAuthStore();
  const { fetchNotices } = useNoticeBoardStore();
  const ArrayOfTeamId = authUser?.teams?.map((team: any) => team.id);
  const [_, forceUpdate] = useState(0);

  useEffect(() => {
    if (ArrayOfTeamId) {
      fetchNotices(ArrayOfTeamId);
    }
  }, []);

  const { teamsNotices } = useNoticeBoardStore();
  const [ noticeDetailModalOpem, setNoticeDetailModalOpen ] = useState(false);
  const [ selectedNoticeDetail, setSelectedNoticeDetail ] = useState<NoticeProps | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => forceUpdate((prev) => prev + 1), 1000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const dateFormat = (date: any) => {
    const formattedDate = moment(date)
      .utcOffset(5.5)
      .format("MMM D, YYYY h:mm A");
    return formattedDate;
  };

  const countdown = (date: any) => {
    const targetDate = new Date(date).getTime();
    const currentTime = new Date().getTime();

    const diff = targetDate - currentTime;
    if (diff <= 0) return "Event has passed";

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    return `${d} d ${h} h ${m} m ${s} s`;
  };

  const handleNoticeDetail = (notice: NoticeProps) => {
    setSelectedNoticeDetail(notice);
    setNoticeDetailModalOpen(true);
  }

  return (
    <Card className="flex w-full flex-col items-center justify-center p-2">
      {/* <pre>{JSON.stringify(authUser, null, 2)}</pre> */}
      <Card className="flex w-full gap-2 p-2">
        <CardHeader>
          <CardTitle className="flex w-full text-3xl justify-center">
            Notice Baord
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Card className="flex flex-col w-full border-2 rounded-3xl p-2">
            {teamsNotices.map((team: any) => (
              <Card className="flex flex-col w-full p-0 border-0 shadow-none gap-2 m-0" key={team.id}>
                <CardTitle className="pl-4">
                  {team.title}
                </CardTitle>
                {team.notices?.map((notice: any) => (
                  <Card
                    onClick={() => handleNoticeDetail(notice)}
                    className="flex flex-col w-full p-2 pt-0 gap-2 m-0 border-2 rounded-2xl"
                    key={notice.id}
                  >
                    {notice.title}
                    <CardFooter className="flex pl-0 pr-0  justify-between text-xs">
                      <p>Expires in {countdown(notice.endDate)}</p>
                      <p>Published on {dateFormat(notice.startDate)}</p>
                    </CardFooter>
                  </Card>
                ))}
              </Card>
            ))}
          </Card>
        </CardContent>
      </Card>
      {JSON.stringify(teamsNotices, null, 2)}

      {/* Modal */}
      <NoticeDetailModal
        isOpen={noticeDetailModalOpem}
        onClose={() => setNoticeDetailModalOpen(false)}
        notice={selectedNoticeDetail ?? {} as NoticeProps}
      />
    </Card>
  );
};

export default HomePage;
