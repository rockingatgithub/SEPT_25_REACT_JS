import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Clock from './components/Clock';
import List from './components/List'
import Login from './components/Login';

function App() {

  const [clockToggle, setClockToggle] = useState(false)

  return (
    <div className="App">
        <h1> Introduction to ReactJS </h1>
        {/* <h3>Students List</h3> */}
        {/* <button onClick={ () => setClockToggle( prevToggle => !prevToggle )  } > Toggle Clock </button>
        { clockToggle && <Clock/>} */}

        <div>
          <Link to='/login' > Login </Link>
          <Link to='/clock' > Clock </Link>
          <Link to='/list' > List </Link>

        </div>

        <Routes>

          <Route path='/login' element={<Login/>}  />
          <Route path='/clock' element={<Clock/>}  />
          <Route path='/list' element={<List/>} />

        </Routes>
        {/* <List/>
        <Login/> */}
    </div>
  );
}

export default App;
