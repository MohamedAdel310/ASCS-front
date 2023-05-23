const apiURL = "https://myaz.cyclic.app/api/";

const today = () => {
  const today = new Date();
  const date = today.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [day, month, year] = date.split("/");

  return `${year}/${month}`;
};

export default async function fetchData(date) {
  console.log("fetch done");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc3ZjUzYzZmYzhmN2IxYzUzYzc3MSIsImlhdCI6MTY4MTM5ODAyOCwiZXhwIjoxNjg5MTc0MDI4fQ.IgULvpKaicCHhdS6TL3kfSoeAulggd1iPa7M-Yzfsr4";
  const headers = {
    "Authorization": `Bearer ${token}`,
  };
  console.log("date: ", date);
  console.log("today(): ", today());

  const response = await fetch(apiURL + `events/${date || today()}`, {
    headers,
  });
  // const json = await response.json();

  return await response.json();
}
