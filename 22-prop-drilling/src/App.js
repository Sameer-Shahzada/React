import {React , useState} from "react";
import ChildA from './components/ChildA';

function App() {
  // declare a variable
  const name = 'Md. Sameer Shahzada';
  const [login, setLogin] = useState({
    userId: "",
    // token: "",
  })
  return (
    <div className="parent">
      <div>
        <label
          htmlFor="userId"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          User ID
        </label>
        <input
          type="text"
          name="userId"
          id="userId"
          value={login.userId}
          onChange={(e) => setLogin({
            ...login, userId: e.target.value.toUpperCase(),
          })}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {console.log(login.userId)}
      </div>
      <ChildA name={name} value={login.userId} />   {/* sending props to Child A */}
    </div>
  );
}

export default App;
