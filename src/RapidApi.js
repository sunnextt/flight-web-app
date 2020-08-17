import React from "react";
import Title from "./flightcomponent/Title";
import Forming from "./flightcomponent/Form";
import Status from "./flightcomponent/Status"


class RapidApi extends React.Component {
  state = {
    airline: undefined,
    model: undefined,
    status: undefined,
    airportCountryCode: undefined,
    arrivalIata: undefined,
    arrivalIcao: undefined,
    arrivalScheduledTimeLocal: undefined,
    arrivalaMunicipalityName: undefined,

    departureIata: undefined,
    departureIcao: undefined,
    departureCountryCode: undefined,
    airportMunicipalityName: undefined,
    departureScheduledTimeLocal: undefined,
    error: undefined,
  };

  getFlight = (e) => {
    e.preventDefault();
    //  const airlineInput = e.target.elements.name.airline;
    const flightNumberInput = e.target.elements.flight_number.value;
    const dateInput = e.target.elements.date.value;

    fetch(
      `https://aerodatabox.p.rapidapi.com/flights/number/${flightNumberInput}/${dateInput}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
          "x-rapidapi-key":
            "46a3fc47cemsh4f502523cbc8e3bp145ea6jsn850c136e612b",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          airline: response[0].airline.name,
          model: response[0].aircraft.model,
          status: response[0].status,
          airportCountryCode: response[0].arrival.airport.countryCode,

          arrivalIata: response[0].arrival.airport.iata,
          arrivalIcao: response[0].arrival.airport.icao,
          arrivalScheduledTimeLocal: response[0].arrival.scheduledTimeLocal,
          arrivalaMunicipalityName:
            response[0].arrival.airport.municipalityName,

          departureIata: response[0].departure.airport.iata,
          departureIcao: response[0].departure.airport.iata,
          departureCountryCode: response[0].departure.airport.countryCode,
          airportMunicipalityName:
            response[0].departure.airport.municipalityName,
          departureScheduledTimeLocal: response[0].departure.scheduledTimeLocal,
        });
      })
      .catch((err) => {
        //    console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Title />
        <Forming getFlight={this.getFlight} />
        <Status
          airline={this.state.airline}
          model={this.state.model}
          status={this.state.status}
          airportCountryCode={this.state.airportCountryCode}
          arrivalIata={this.state.arrivalIata}
          arrivalIcao={this.state.arrivalIcao}
          arrivalScheduledTimeLocal={this.state.arrivalScheduledTimeLocal}
          arrivalaMunicipalityName={this.state.arrivalaMunicipalityName}
          departureIata={this.state.departureIata}
          departureIcao={this.state.departureIcao}
          departureCountryCode={this.state.departureCountryCode}
          airportMunicipalityName={this.state.airportMunicipalityName}
          departureScheduledTimeLocal={this.state.departureScheduledTimeLocal}
        />
      </div>
    );
  }
}


export default RapidApi;
