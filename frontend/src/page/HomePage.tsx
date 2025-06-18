// src/page/HomePage.tsx
import moment from "moment";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import NoticeDetailModal from "@/components/Modals/Notice/noticeDetail";

export interface NoticeProps {
  id: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

const HomePage = () => {
  const { authUserDetails, getUserDetails } = useAuthStore();

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  const [_, forceUpdate] = useState(0);
  const [noticeDetailModalOpem, setNoticeDetailModalOpen] = useState(false);
  const [selectedNoticeDetail, setSelectedNoticeDetail] =
    useState<NoticeProps | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => forceUpdate((prev) => prev + 1), 1000);
    return () => clearInterval(intervalId);
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
  };

  if (!authUserDetails) {
    return <div>Loading...</div>;
  }
  const teamsData = authUserDetails.teams;
  return (
    <Card className="flex w-full flex-row items-center gap-2 justify-center p-2 mt-2">
      {/* <pre>{JSON.stringify(authUser, null, 2)}</pre> */}
      <Card className="flex w-2/3 gap-2 p-2">
        <CardHeader>
          <CardTitle className="flex w-full text-3xl justify-center">
            Notice Baord
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Card className="flex flex-col w-full border-2 rounded-3xl p-2">
            {teamsData.map((team: any) => (
              <Card
                className="flex flex-col w-full p-0 border-0 shadow-none gap-2 m-0"
                key={team.id}
              >
                <CardTitle className="pl-4">{team.title}</CardTitle>
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
        {JSON.stringify(teamsData.map((team: any) => team.chats))}
      </Card>
      <Card className="flex w-1/3 gap-2 p-2">
        {teamsData.map((team: any) => (
          <Card
            key={team.id}
            className="flex flex-col w-full p-0 border-0 shadow-none gap-2 m-0"
          >
            {team.title}
            {team.chats?.map((chat: any) => (
              <Card
                className="flex flex-col w-full p-2 pt-0 gap-2 m-0 border-2 rounded-2xl"
                key={chat.id}
              >
                {chat.title}
                {chat.messages?.map((message: any) => (
                  <Card
                    className="flex w-full p-0 m-0 border-0 shadow-none rounded-2xl"
                    key={message.id}
                  >
                    {message.userId === authUserDetails.userId ? (
                      <div className="flex justify-end w-full" key={message.id}>
                        <Card className="flex p-2 pt-0 gap-0 max-w-[80%]">
                          {message.message}
                          <CardFooter className="flex pl-0 pr-0 mt-2 justify-end text-xs w-full">
                            {dateFormat(message.createdAt)}
                          </CardFooter>
                        </Card>
                      </div>
                    ) : (
                      <div
                        className="flex justify-start w-full"
                        key={message.id}
                      >
                        <Card className="flex p-2 pt-0 gap-0 max-w-[80%]">
                          <p className="font-semibold text-sm">{`${message.user.firstName} ${message.user.lastName}`}</p>
                          {message.message}
                          <CardFooter className="flex pl-0 pr-0 mt-2 justify-end text-xs w-full">
                            {dateFormat(message.createdAt)}
                          </CardFooter>
                        </Card>
                      </div>
                    )}
                  </Card>
                ))}
              </Card>
            ))}
          </Card>
        ))}
      </Card>
      {/* Modal */}
      <NoticeDetailModal
        isOpen={noticeDetailModalOpem}
        onClose={() => setNoticeDetailModalOpen(false)}
        notice={selectedNoticeDetail ?? ({} as NoticeProps)}
      />
    </Card>
  );
};

export default HomePage;
