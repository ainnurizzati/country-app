import React, { useEffect, useState } from "react";
import styles from "./Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState("");

  useEffect(() => {
    setLoading(true);
    const urlCountry = "https://restcountries.com/v3.1/all";
    // const urlRegion = `https://restcountries.com/v3.1/region/${region}`;

    fetch(urlCountry)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    data.map((item) => {
      console.log(`name`, item.name.common);
      console.log(`pop`, item.population);
    });
  }, []);

  // console.log(`data`, data);

  return (
    <html>
      <head></head>
      <body>
        <div className="navbar">
          <div className="logo">
            <p>Where in the world?</p>
          </div>
          <div className="mode">
            <span>logo</span>
            <p>Dark Mode</p>
          </div>
        </div>
        <div className="container">
          <div className="search-bar">
            <input type="search" placeholder="Search for a country" />
          </div>
          <div className="filter-region">
            <label for="cars">Filter by Region</label>
            <select
              name="region"
              id="region"
              value={region}
              onChange={(e) => setRegion(e.currentTarget.value)}
            >
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className="container-display">
          {data.map((item) => {
            return (
              <div className="display-card">
                <div className="card-flag">
                  <img src={item.flags.svg}></img>
                </div>
                <div className="card-name">{item.name.common}</div>
                <div className="card-details">
                  <div className="details-population">
                    Population: {item.population}
                  </div>
                  <div className="details-region">Region: {item.region}</div>
                  <div className="details-capital">Capital: {item.capital}</div>
                </div>
              </div>
            );
          })}
        </div>
      </body>
    </html>
  );
}

export default Home;
