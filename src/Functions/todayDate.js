export default function todayDate() {
  const today = new Date();
  const date = today.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [day, month, year] = date.split("/");

  return `${year}/${month}/${day}`;
}
