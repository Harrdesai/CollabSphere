// src/page/HomePage.tsx
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import moment from "moment";

import { useAuthStore } from "@/store/useAuthStore";
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
  const [expanded, setExpanded] = useState(false);

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
    <Card className="flex w-full flex-row items-center gap-2 justify-center p-2 h-[88vh]">
      {/* <pre>{JSON.stringify(authUser, null, 2)}</pre> */}
      <Card className="flex w-2/3 gap-2 p-2 h-full">
        <CardHeader className="dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700  rounded-full">
          <CardTitle className="flex w-full text-3xl justify-center bg-clip-text text-neutral-800 dark:text-neutral-50">
            Notice Board
          </CardTitle>
        </CardHeader>
        <ScrollArea className="rounded-2xl max-h-[75vh] border">
          <Card className="flex flex-col w-full border-none p-0">
            {teamsData.map((team: any) => {
              const isExpandable = team.notices?.length > 3;
              const visibleNotices = expanded
                ? team.notices
                : team.notices?.slice(0, 3);

              return (
                <Card
                  className="flex flex-col w-full p-2 border-2 shadow-none gap-2 m-0"
                  key={team.id}
                >
                  <CardTitle className="pl-4 text-xl bg-accent w-fit rounded-full dark:bg-accent pr-4 pb-1">
                    {team.title}
                  </CardTitle>

                  {team.notices?.length > 0 && (
                    <CardDescription>
                      Here is a notice of {team.title}
                    </CardDescription>
                  )}

                  {visibleNotices?.map((notice: any, index: number) => {
                    const isThirdNotice =
                      index === 2 && !expanded && isExpandable;
                    return (
                      <div className="relative" key={notice.id}>
                        <Card
                          onClick={() => handleNoticeDetail(notice)}
                          className={`flex flex-col w-full p-2 pt-0 gap-2 m-0 border-2 rounded-2xl dark:bg-neutral-800 text-primary border-dashed ${
                            isThirdNotice ? "blur-sm" : ""
                          }`}
                        >
                          {notice.title}
                          <CardFooter className="flex pl-0 pr-0 justify-between text-xs">
                            <p>Expires in {countdown(notice.endDate)}</p>
                            <p>Published on {dateFormat(notice.startDate)}</p>
                          </CardFooter>
                        </Card>

                        {/* 🔽 Overlay Button only on 3rd card */}
                        {isThirdNotice && (
                          <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-t from-neutral-100/90 dark:from-neutral-800/90 to-transparent rounded-2xl">
                            <Button onClick={() => setExpanded(true)}>
                              Expand All
                            </Button>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Collapse button after all notices */}
                  {expanded && isExpandable && (
                    <Button
                      onClick={() => setExpanded(false)}
                      className="mt-2 self-center w-full"
                    >
                      Collapse
                    </Button>
                  )}
                </Card>
              );
            })}
          </Card>
        </ScrollArea>
        {/* {JSON.stringify(teamsData.map((team: any) => team.chats))} */}
      </Card>
      <Card className="flex w-1/3 gap-2 p-2">
        {teamsData.map((team: any) => (
          <Card
            key={team.id}
            className="flex flex-col w-full p-0 border-0 shadow-none gap-2 m-0"
          >
            <CardTitle className="text-md">{team.title}</CardTitle>
            {team.chats?.map((chat: any) => (
              <Card
                className="flex flex-col w-full p-2 pt-0 gap-2 m-0 border-2 rounded-2xl"
                key={chat.id}
              >
                <CardTitle className="text-sm mt-2 ">{chat.title}</CardTitle>
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
                        <Card className="flex p-2 pt-0 gap-0 max-w-[80%] dark:bg-neutral-800 text-primary border-dashed">
                          <CardTitle className="text-sm pl-0 dark:text-muted-foreground font-normal">{`${message.user.firstName} ${message.user.lastName}`}</CardTitle>
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