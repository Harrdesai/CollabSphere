import moment from "moment";

const userActiveness = (dateOfJoined: string, noOfDaysUserActive: number) => {
  const today = new Date();
  const joinedDate = new Date(dateOfJoined);
  const noOfDaysUserOld = Math.floor(
    (today.getTime() - joinedDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const result = Math.floor((noOfDaysUserActive * 100) / noOfDaysUserOld);
  return {
    noOfDaysUserOld,
    userActiveness: result,
  };
};

  const dateFormat = (date: any) => {
    const formattedDate = moment(date)
      .utcOffset(5.5)
      .format("MMM D, YYYY h:mm A");
    return formattedDate;
  };

export { userActiveness, dateFormat };