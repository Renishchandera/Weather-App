import {memo} from 'react';
import style from './css/InfoBox.module.css';

const areEqual = (prevProp, nextProp) => {
    if(JSON.stringify(prevProp.result) === JSON.stringify(nextProp.result))
    {
        return true;
    }else
    {
        return false;
    }
}
function ErrorComponent({err})
{  
    console.log(err);
        return (
            <>
                <h3 className={style.errorHeading}>ERROR !!</h3>
              <h3>{err.message}</h3>  
            </>
        );
    
}

function InfoBox({result, loading})
{

    console.log("InfoBox Rendered")
    
    if(result.success === false)
    {
        return (
        <>
              <div>
            <h3 className={style.weatherInfo}>Weather Info</h3> 
            <ErrorComponent err={result}/>
            </div>
        </>
        );
    }else
    {
        return (
            <>
                <div>
                    <h3 className={style.weatherInfo} >Weather Info</h3> 
                     <h3 className={style.weatherInfo} >{result.city}</h3>
                     {loading && <div id={style.loader}></div>}
                        <ul className={style.weatherCardsContainer} >
                        <li key={"weather"}><div className={style.cardHeading}>Weather</div><span className={style.data}>{result.weather}</span></li>
                             <li key={"temp"}><div className={style.cardHeading}>Temperature</div><span className={style.data}>{result.temp}</span></li>
                             <li key={"tempMin"}><div className={style.cardHeading}>Minimum</div><span className={style.data}>{result.tempMin}</span></li>
                             <li key={"tempMax"}><div className={style.cardHeading}>Maximum</div><span className={style.data}>{result.tempMax}</span></li>
                             <li key={"feelsLike"}><div className={style.cardHeading}>Feels Like</div><span className={style.data}>{result.feelsLike}</span></li>
                             <li key={"humidity"}><div className={style.cardHeading}>Humidity</div><span className={style.data}>{result.humidity}</span></li>
                        </ul>
                </div>
            </>
        );
    }
    
  
}

export default memo(InfoBox);