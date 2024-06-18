import { memo, useCallback, useMemo,useEffect, useState, useRef } from 'react';
import './App.css';
import './css/AppName.css';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import Footer from './Footer';

const AppName = memo(() => {
  return (
    <>
      <h1>Weather App</h1>
    </>
  );
});


function App() {

  const [result, setResult] = useState({ success: true });
  const [loading, setLoading] = useState(false);
  const [background, setBG] = useState("./images/haze.jpeg");

  const updateResult = useCallback((result) => {
    setResult(result);
  }, []);

  useEffect(() => {
    if (result.success && result.weather) {
      setBG(`./images/${result.weather}.jpeg`);
    }
  }, [result]);


  return (
    <>
    {console.log("APP RENDERED")}
     <div  className={"background"}>
      <AppName/>
      <SearchBox weatherInfo={updateResult} setLoading={setLoading} />
      <InfoBox result={result} loading={loading}/>
      < Footer />
     </div>
    </>
  );
}

export default memo(App);
