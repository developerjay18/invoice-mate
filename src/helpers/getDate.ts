export function getDate() {
  let currentDate = new Date();

  let day: any = currentDate.getDate();
  let month: any = currentDate.getMonth() + 1;
  let year: any = currentDate.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  let formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
