import "./location.css";
import { useEffect, useState } from "react";

const Location = () => {
  const api = "https://restcountries.eu/rest/v2/all";
  const [values, setValues] = useState([]);
  const [switchcolor, setswitchcolor] = useState("locationHead");
  const [bodydiv, setBodydiv] = useState("");
  const [changeingValue, setChangingValue] = useState("");
  const headColoSwitct =
    switchcolor === "locationHead" ? "locationHeadSwitch" : "locationHead";
  const bodyDivSwitch = bodydiv === "" ? "bgdiv" : "";
  const vilter = values.filter((val) => {
    if (changeingValue === "") return val;
    if (val.name.toLowerCase().includes(changeingValue.toLowerCase()))
      return val;
  });

  useEffect(() => {
    console.log(1);
    return fetch(api, {})
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, []);

  return (
    <div className={bodydiv}>
      <div className={switchcolor}>
        <h2>Where in the world?</h2>
        <i
          className="fas fa-moon-stars"
          id="colorSwitxh"
          onClick={() => {
            setswitchcolor(headColoSwitct);
            setBodydiv(bodyDivSwitch);
          }}
        >
          <span>Dark Mode</span>
        </i>
      </div>
      <section>
        <div className="secDiv1">
          <form>
            <input
              className="searchIm"
              type="text"
              placeholder="search for a country"
              value={changeingValue}
              onChange={(e) => setChangingValue(e.target.value)}
            />
          </form>
        </div>
      </section>
      <section className="section2">
        {vilter.map((countries, index) => {
          return (
            <div key={index} className="secDiv2">
              <img src={countries.flag} alt="" />
              <div>
                <h2>{countries.name}</h2>
                <h4>
                  population: <span>{countries.population}</span>
                </h4>
                <h4>
                  Region: <span>{countries.region}</span>
                </h4>
                <h4>
                  capital: <span>{countries.capital}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Location;
