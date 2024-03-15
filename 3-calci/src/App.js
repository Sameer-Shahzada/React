import {add, sub, mult, division } from './component/Calc';


function App() {
  return (
    <>
      <ul>
            <li>Add of two numbers is {add(4,5)}</li>
            <li>Substraction of two number is {sub(5,4)}</li>
            <li>Multiplication of two number is {mult(5,5)}</li>
            <li>Division of two number is {division(10,5)}</li>
        </ul>
    </>
  );
}

export default App;
