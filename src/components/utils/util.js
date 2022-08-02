export const removeCommas = (str) => {
  if (str.startsWith(",") && str.endsWith(",")) {
    return str.slice(1, -1);
  }

  if (str.startsWith(",")) {
    return str.slice(1);
  }

  if (str.endsWith(",")) {
    return str.slice(0, -1);
  }

  return str;
};

export const formatCurrency = (amount, currency = "EUR") => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: removeCommas(currency),
  }).format(amount);
};
