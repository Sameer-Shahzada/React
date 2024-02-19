import React, { useEffect, useState } from 'react'
// import './covid.css';
const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCovidData();
  }, []);

  console.log(data.recovered);
  return (
    <>
      <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
          <li className='card'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'><span>Our</span></p>
                <p className='card_total card_small'>INDIA</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'><span>Total</span>Recovered</p>
                <p className='card_total card_small'>{data.recovered}</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'><span>Total</span>Confirmed</p>
                <p className='card_total card_small'>{data.confirmed}</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'><span>Total</span>Deaths</p>
                <p className='card_total card_small'>{data.deaths}</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'><span>Total</span>Active</p>
                <p className='card_total card_small'>{data.active}</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'><span>Last</span>Updated</p>
                <p className='card_total card_small'>{data.lastupdatetime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Covid
