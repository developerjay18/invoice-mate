 export default function convertDateFormat(dateString: any) {
  const parts = dateString.split(/[/.\-]/);

  if (parts.length !== 3) {
    return `1/1/2000`;
  }

  if (dateString === "") {
    return `1/1/2000`;
  }

  const [day, month, year] = parts;

  return `${month}/${day}/${year}`;
}
