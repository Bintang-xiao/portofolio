const button = document.querySelector("#search");
const input = document.querySelector("#city");
const result = document.querySelector("#result");
const cityName = document.querySelector("#city-name");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");

const API_KEY = "61a60cd891e88e1a9641e174ea2971c9";

button.addEventListener("click", async () => {
  const city = input.value;

  if (!city) {
    alert("Masukkan nama kota");
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await res.json();

    if (data.cod !== 200) {
      alert("Kota tidak ditemukan");
      return;
    }

    cityName.textContent = data.name;
    temp.textContent = `Suhu: ${data.main.temp}°C`;
    desc.textContent = data.weather[0].description;

    result.classList.remove("hidden");
  } catch (error) {
    alert("Gagal mengambil data");
  }
});
