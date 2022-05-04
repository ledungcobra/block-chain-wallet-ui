import moment from "moment";

export const calculateTimeDiffFromNow = (timestamp: number): string => {
    const now = moment.utc(+new Date());
    const before = moment.utc(timestamp);
    const diff = now.diff(before, "seconds");
    const diffMinutes = Math.floor(diff / 60);
    const diffHours = Math.floor(diff / 60 / 60);
    const diffDays = Math.floor(diff / 60 / 60 / 24);
    const diffWeeks = Math.floor(diff / 60 / 60 / 24 / 7);
    const diffMonths = Math.floor(diff / 60 / 60 / 24 / 30);
    const diffYears = Math.floor(diff / 60 / 60 / 24 / 365);

    let s = "";
    if (diffYears > 0) {
        s = diffYears + " years ago";
    } else if (diffMonths > 0) {
        s = diffMonths + " months ago";
    } else if (diffWeeks > 0) {
        s = diffWeeks + " weeks ago";
    } else if (diffDays > 0) {
        s = diffDays + " days ago";
    } else if (diffHours > 0) {
        s = diffHours + " hours ago";
    } else if (diffMinutes > 0) {
        s = diffMinutes + " minutes ago";
    } else {
        s = diff + " seconds ago";
    }
    if (s === "") {
        return "undefined";
    }
    return s;
};
