import React from "react";
import Title from "./flightcomponent/Title";
import Form from "./flightcomponent/Form";

// const weather_key = "e828ee842490dc75f6cac72c52adb85a";
const api_key = "53a2bae04fb280e70ff48a5aa95df3c5";




class FetchApi extends React.Component {

getFlight = async (e) => {
  e.preventDefault();
  const api_call = await fetch(
    // `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${weather_key}`
    `http://api.aviationstack.com/v1/flights?access_key=${api_key}`
  );
  const data = await api_call.json();
  console.log(data);
};

//   render() {
//     return (
//       <div>
//         <Title />
//         <Form getFlight={this.getFlight} />
//       </div>
//     );
//   }
// }

// class FetchApi extends React.Component {
//   async getFlight(e) {
//     e.preventDefault();
//     const response = await fetch(
//       `http://api.aviationstack.com/v1/flights?access_key=53a2bae04fb280e70ff48a5aa95df3c5`
//     );
//     const responseData = await response.json();
//     console.log(responseData);
//     return responseData;
//   }

  render() {
    return (
      <div>
        <Title />
        <Form getFlight={this.getFlight} />
      </div>
    );
  }
}

export default FetchApi;
