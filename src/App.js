import React from "react";
import Searcher from "./components/searcher";
import { useState } from "react";
import Axios from "axios";
import Country from "./components/country";

function App() {
  const [country, setCountry] = useState();

  const onChange = async (evt) => {
    /*   await Axios.get(`https://restcountries.eu/rest/v2/name/${evt.target.value}?fullText=true`)
      .then(({data}) => {
        setCountry(data);
      })
      .catch((err) => { 
      }); */

    let value = evt.target.value;

    
    await Axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(({ data }) => {
        const country = data.find((country) => country.name.toLowerCase() === value.toLowerCase());
        setCountry(country);
      })
      .catch((err) => {});
  };

  return (
    <div className="App">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column is-three-fifths">
            <Searcher onChange={onChange} />
            {country !== undefined ? (
              <Country country={country} />
            ) : (
              <div style={{ textAlign: "center" }}>
                <h3>Sin resultados</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
