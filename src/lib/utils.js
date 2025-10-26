/**
 * @param { string } dateString
 * @returns {string}
 */
export const formatDate = (dateString) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /** @typedef { "st" | "nd" | "rd" | "th" } Cardinal */
  /** @type Object.<number, Cardinal> */
  const cardinalKeys = {
    1: "st",
    2: "nd",
    3: "rd",
  };

  const d = new Date(dateString);
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  const [unit, deca] = date
    .toString()
    .split("")
    .reverse()
    .map((d) => parseInt(d, 10));

  /** @type { Cardinal } */
  let dateSuffix = "th";
  if (deca !== 1 && unit in cardinalKeys) {
    dateSuffix = cardinalKeys[unit];
  }

  return `${months[month]} ${date}${dateSuffix},  ${year}`;
};