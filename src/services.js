export const retreiveData = async city => {
  // const res = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=937fddca3f31f5821bd83e09952f992d`
  // );
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9a79961db574319474622ee9696d967b`
  );
  const data = await res.json();
  return data;
};
