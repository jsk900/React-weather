import { useContext } from 'react';
import MyContext from './context/MyContext';
import DropDowns from './components/DropDowns';
import Weather from './components/Weather';

import './App.css';

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
