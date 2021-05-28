export const convertCurrency = (labelValue) => {
  return Math.abs(labelValue) >= 1.0e9
    ? labelValue >= 0
      ? "$" + Math.round((Math.abs(labelValue) / 1.0e9) * 10) / 10 + "B"
      : "-$" + Math.round((Math.abs(labelValue) / 1.0e9) * 10) / 10 + "B"
    : Math.abs(labelValue) >= 1.0e6
    ? labelValue >= 0
      ? "$" + Math.round((Math.abs(labelValue) / 1.0e6) * 10) / 10 + "M"
      : "-$" + Math.round((Math.abs(labelValue) / 1.0e6) * 10) / 10 + "M"
    : Math.abs(labelValue) >= 1.0e3
    ? labelValue >= 0
      ? "$" + Math.round((Math.abs(labelValue) / 1.0e3) * 10) / 10 + "K"
      : "-$" + Math.round((Math.abs(labelValue) / 1.0e3) * 10) / 10 + "K"
    : labelValue >= 0
    ? "$" + Math.abs(labelValue)
    : "-$" + Math.abs(labelValue);
};

export const convertDateFormat = (period) => {
  const date_len = period.length;
  const year = period.slice(date_len - 4, date_len);
  const dates = period.slice(0, date_len - 4).split("-");
  const days = dates.map(
    (item) =>
      item.trim().split(" ")[1].slice(0, 3) + "' " + item.trim().split(" ")[0]
  );
  return days[0] + " - " + days[1] + ", " + year;
};
