import { useState, useRef, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import MyContext from './MyContext';

//We get all the countries from our library country-state-city and
//put it into our reference variable countries
//Create selection states for country, state and city
//Create states for state lists and for city lists.

//Use an effect to rebuild the states list everytime our country selection
//changes.
//Use an effect to rebuild the cities list everytime the state selection changes.
//Use an effect to fetch data from the weather api.

//Make all relevant data and functionality available to the provider so it
//can provide it to the context through the value prop.

const MyProvider = ({ children }) => {
  const countries = useRef(Country.getAllCountries());

  const [countrySelect, setCountrySelect] = useState({
    country: '',
    flag: '',
    countryCode: '',
  });

  const [states, setStates] = useState([]);
  const [stateSelect, setStateSelect] = useState({ state: '', stateCode: '' });
  const [cities, setCities] = useState([]);
  const [citySelect, setCitySelect] = useState('');

  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${citySelect},${stateSelect.stateCode},${countrySelect.countryCode}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    setStates(State.getStatesOfCountry(countrySelect.countryCode));
    setData({ results: null, loading: true, error: null });
  }, [countrySelect]);

  useEffect(() => {
    setCities(
      City.getCitiesOfState(countrySelect.countryCode, stateSelect.stateCode)
    );
    setData({ results: null, loading: true, error: null });
  }, [countrySelect, stateSelect]);

  useEffect(() => {
    fetch(URL)
      .then((Sally) => Sally.json())
      .then((results) => setData({ results, loading: false, error: null }))
      .catch((error) => setData({ results: null, loading: false, error }));
  }, [URL]);

  return (
    <MyContext.Provider
      value={{
        countries,
        countrySelect,
        setCountrySelect,
        states,
        setStates,
        stateSelect,
        setStateSelect,
        cities,
        setCities,
        citySelect,
        setCitySelect,
        data,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
