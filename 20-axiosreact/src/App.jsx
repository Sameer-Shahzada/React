import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
  // useState to store response data
  const [mydata, setMydata] = useState([]);
  const [isError, setError] = useState('');
  // define useEffect hook to execute once at the time of application loading 
  // useEffect(() => {
  //   // Note - call API with axios syntax using promises
  //   // axios
  //   //   .get('https://jsonplaceholder.typicode.com/posts')
  //   //   .then((response) => {
  //   //     console.log('Api response - ' ,response);
  //   //     setMydata(response.data)
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //     setError(error.message);
  //   //   });

  // },[]);

  // Note - call API with axios syntax using async await

  // create a async function 
  const getAPIdata = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setMydata(res.data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getAPIdata();
  }, [])

  return (
    <>
      <h1>Axios Learning</h1>
      {isError != '' && <h2>{isError}</h2>}
      <div className='grid'>

        {
          // iterate api actual data in useState empty array
          mydata.slice(0, 15).map((post) => {
            // object destructuring 
            const { id, title, body } = post
            return <div className='card' key={id}>
              <h2>{id}</h2>
              <h3>{title.slice(0, 15).toUpperCase()}</h3>
              <p>{body.slice(0, 100)}</p>
            </div>
          })
        }
      </div>


    </>
  )
}

export default App
