// src/lib/helper.ts
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
  
  const actionLabelConvert = (action: string) => {
    switch (action) {
      case "INVITATION_SENT":
        return "Invitation Sent";
      case "INVITATION_REVOKED":
        return "Invitation Revoked";
      case "INVITATION_EXPIRED":
        return "Invitation Expired";
      case "INVITATION_REJECTED":
        return "Invitation Rejected";
      case "INVITATION_ACCEPTED":
        return "Invitation Accepted";
      case "ROLE_ASIGNED":
        return "Role Asigned";
      case "ROLE_REMOVED":
        return "Role Removed";
      case "TEAM_CREATED":
        return "Team Created";
      case "TEAM_DELETED":
        return "Team Deleted";
      case "MEMBER_REMOVED":
        return "Member Removed";
      case "LEAVED_TEAM":
        return "Leaved Team";
      case "JOINING_REQUEST_SENT":
        return "Joining Request Sent";
      case "JOINING_REQUEST_RECEIVED":
        return "Joining Request Received";
      case "JOINING_REQUEST_REVOKED":
        return "Joining Request Revoked";
      case "JOINING_REQUEST_REJECTED":
        return "Joining Request Rejected";
      case "JOINING_REQUEST_ACCEPTED":
        return "Joining Request Accepted";
      default:
        return "";
    }
  }

  const designationLabelConvert = (designation: string) =>{
    switch (designation) {
      case "FULLSTACK_DEVELOPER":
        return "Fullstack Developer";
      case "FRONTEND_DEVELOPER":
        return "Frontend Developer";
      case "BACKEND_DEVELOPER":
        return "Backend Developer";
      case "UI_DESIGNER":
        return "UI Designer";
      case "UX_DESIGNER":
        return "UX Designer";
      case "PRODUCT_DESIGNER":
        return "Product Designer";
      case "DATA_SCIENTIST":
        return "Data Scientist";
      case "DATA_ANALYST":
        return "Data Analyst";
      case "DATA_ENGINEER":
        return "Data Engineer";
      case "DATABASE_DESIGNER":
        return "Database Designer";
      case "TEAM_LEADER":
        return "Team Leader";
      default:
        return "";
    }
  }

export { userActiveness, dateFormat, actionLabelConvert, designationLabelConvert };