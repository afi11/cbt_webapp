export const addTimeInMinute = (timeStart, minute) => {
  var today = new Date();
  var tgl =
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate() + " ";
  var timeToStart = new Date(tgl + timeStart).getTime();
  var futureTime = new Date(timeToStart + minute * 60000);
  return (
    futureTime.getHours() +
    ":" +
    futureTime.getMinutes() +
    ":" +
    futureTime.getSeconds()
  );
};

export const getTimeNow = () => {
  var today = new Date();
  return today;
};

export const getTimeByClock = (clock) => {
  var today = new Date();
  var tgl =
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate() + " ";
  var timeFix = new Date(tgl + clock);
  return timeFix;
};

export const formatDateHuman = (tgl) => {
  var today = new Date(tgl);
  var date_human =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  return date_human;
};
