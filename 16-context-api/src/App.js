
import { createContext } from 'react';
import CompA from './Component/CompA';

// create context which pass to compC
const FirstName = createContext();  // this is the way to create context
const LastName = createContext();

function App() {
  return (
    <>
      {/* Provider need a value to provide for consumer */}
      <FirstName.Provider value={'Sameer'}>
        <LastName.Provider value={'Shahzada'}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>


    </>
  );
}

export default App;
export { FirstName, LastName };