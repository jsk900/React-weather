import { useContext } from 'react';
import MyContext from '../context/MyContext';

//Grab all relevant data and functionality from our context.
//Populate all our drop downs with country, state and city lists.
//Use onChange handlers to grab the selected items.
//Populate the relevant react states with the selections.

const Dropdowns = () => {
  const context = useContext(MyContext);
  const {
    setCountrySelect,
    countries,
    states,
    setStateSelect,
    cities,
    setCitySelect,
  } = context;

  return (
    <div className='select-container'>
      <div className='custom-select'>
        <select
          onChange={(e) =>
            setCountrySelect({
              country:
                e.target.childNodes[e.target.selectedIndex].getAttribute(
                  'name'
                ),
              flag: e.target.childNodes[e.target.selectedIndex].getAttribute(
                'flag'
              ),
              countryCode: e.target.value,
            })
          }>
          <option value='default'>Please select a country</option>
          {countries.current.map((country, index) => (
            <option
              key={index}
              flag={country.flag}
              name={country.name}
              value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
        <span className='custom-arrow'></span>
      </div>

      {states && states.length > 0 && (
        <div className='custom-select'>
          <select
            //defaultValue={stateSelect}
            onChange={(e) =>
              setStateSelect({
                state:
                  e.target.childNodes[e.target.selectedIndex].getAttribute(
                    'name'
                  ),
                stateCode: e.target.value,
              })
            }>
            <option value='default'>Please select a state</option>
            {states.map((state, index) => (
              <option key={index} name={state.name} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
          <span className='custom-arrow'></span>
        </div>
      )}

      {cities && cities.length > 0 && (
        <div className='custom-select'>
          <select
            //defaultValue={citySelect}
            onChange={(e) => setCitySelect(e.target.value)}>
            <option value='default'>Please select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <span className='custom-arrow'></span>
        </div>
      )}
    </div>
  );
};

export default Dropdowns;
