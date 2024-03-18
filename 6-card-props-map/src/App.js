import Card from './components/Card'
import Sdata from './components/Sdata';
import Home from './components/Home';


function App() {

  return (
    <>
      <h1 className='heading_style'>List of top 5 Netflix Series in 2023</h1>

      {/* {Sdata.map((val, index) => {
        console.log(index);
        return (
          <Card
            key={val.id}
            sname={val.sname}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.links}
          />
        )

      })} */}
      <Home/>
    </>
  );
}

export default App;
