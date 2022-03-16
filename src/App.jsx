import { useContext } from 'react';
import MyContext from './context/MyContext';
import DropDowns from './components/DropDowns';
import Weather from './components/Weather';

import './App.css';

//Grab the citySelect state from the context
//Only render the Weather component if the user has selected a city
const App = () => {
  const { citySelect } = useContext(MyContext);

  return (
    <main>
      <DropDowns />
      {citySelect && <Weather />}
    </main>
  );
};

export default App;
