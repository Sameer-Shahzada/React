import React from 'react'
import Card from './Card';
import Sdata from './Sdata'
const Home = () => {
  return (
    <>

       {Sdata.map((val, index) => {
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

      })} 
    
    </>
  )
}
export default Home
