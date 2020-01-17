export const retreiveData = async () => {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9a79961db574319474622ee9696d967b"
  );
  const data = await res.json();
  return data;
};
