export const number = (value) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value || 0);

export const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);

export const hours = (value) => `${number(value)} hrs`;

export const shortDate = (value) =>
  new Date(value).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

export const titleCase = (value = "") =>
  value.replaceAll("_", " ").replace(/\b\w/g, (m) => m.toUpperCase());
