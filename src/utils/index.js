export const convertCurrency = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Number(labelValue) / 1.0e9).toFixed(1) + "B"
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? (Number(labelValue) / 1.0e6).toFixed(1) + "M"
    : Math.abs(Number(labelValue)) >= 1.0e3
    ? (Number(labelValue) / 1.0e3).toFixed(1) + "K"
    : Math.abs(Number(labelValue));
};
