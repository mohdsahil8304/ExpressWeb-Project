const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const day = document.getElementById("day");
const todayData = document.getElementById("today_data");
const city_name = document.getElementById("city_name");
const tempStatus = document.getElementById("temp_status");
const hideData = document.querySelector(".middle_layer");
const temp_deg = document.getElementById("temp_deg");
// console.log(cityName);
const dd = new Date();
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
day.innerText = `${weekday[dd.getDay()]}`;
todayData.innerText = `${months[dd.getMonth()]} ${dd.getDate()}`;
// console.log(2 + 3);
const getInfo = async () => {
  //   event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Write the city name before use`;
    hideData.classList.add("data_hide");
  } else if (cityVal !== "") {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=10dd01f4a94daaf7ddb8abf7f53e73d0`;
      let data = await fetch(url);
      let realData = await data.json();
      // console.log(cityVal[0].toUpperCase() + cityVal.slice(1));
      // console.log(realData.name);
      //  second way
      // if (cityVal[0].toUpperCase() + cityVal.slice(1) === realData.name) {
      //   city_name.innerText = `${realData.name},${realData.sys.country}`;
      // } else {
      //   city_name.innerText = `Write the correct name `;
      // hideData.classList.add("data_hide");
      // }

      let tempstatus = realData.weather[0].main;
      if (tempstatus == "Clear") {
        tempStatus.innerHTML =
          '<span><i class="fas fa-sun" style="color:#FFC72C"></i></span>';
      } else if (tempstatus == "Clouds") {
        tempStatus.innerHTML =
          '<span><i class="fa fa-cloud" aria-hidden="true" color: #7a7a7a></i></span>';
      } else if (tempstatus == "Rainy") {
        tempStatus.innerHTML =
          '<i class="fas fa-cloud-rain" style="color: #525252"></i>';
      } else {
        tempStatus.innerHTML =
          '<i class="fas fa-sun" style="color: #fcc200"></i>';
      }
      hideData.classList.remove("data_hide");
      city_name.innerText = `${realData.name},${realData.sys.country}`;
      temp_deg.innerText = `${(realData.main.temp - 273.15).toFixed(0)}`;
    } catch {
      city_name.innerText = `Plz, enter the city name properly`;
      hideData.classList.add("data_hide");
    }
  }

  // else if (cityVal !== realData.name) {
  //   city_name.innerText = `Write the correct name`;
  // }

  //   try {
  //     let data = await fetch(url);
  //     let realData = await data.json();
  //     console.log(realData);
  //   } catch (error) {}
};
submitBtn.addEventListener("click", getInfo);
getInfo();

// `https://api.openweathermap.org/data/2.5/weather?q=${req.name}&appid=10dd01f4a94daaf7ddb8abf7f53e73d0`
// requests(
//     "https://api.openweathermap.org/data/2.5/weather?q=Agra&appid=10dd01f4a94daaf7ddb8abf7f53e73d0"
//   )f
//     .on("data", (chunk) => {
//       const objData = JSON.parse(chunk);
//       const arrData = [objData];
//       // console.log(arrData[0].main.temp);
//       const realtimedata = arrData
//         .map((val) => replaceVal(indexFile, val))
//         .join("");
//       res.write(realtimedata);

//       // console.log(realtimedata);
//     })
//     .on("end", (err) => {
//       if (err) return console.log("connection closed due to error", err);
//       res.end();
//     });
