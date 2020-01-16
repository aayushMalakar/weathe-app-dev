export const retreiveData = async () => {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=937fddca3f31f5821bd83e09952f992d"
  );
  const data = await res.json();
  console.log(data);
};
