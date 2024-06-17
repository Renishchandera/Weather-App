import {memo, useCallback, useMemo, useState} from 'react';
import './App.css';
import './css/AppName.css';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import Footer from './Footer';

const AppName = memo(() =>
{
  return (
    <>
      <h1>Weather App</h1>
    </>
  );
});

function App() {

  const [result, setResult] = useState({success: true});


  

  return (
    <>
      <AppName/>
      <SearchBox weatherInfo={setResult}/>
      <InfoBox result={result}/>
      < Footer />
    </>
  );
}

export default (App);
