import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Clock from './components/Clock';
import List from './components/List'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  const [student, setStudent] = useState({})

  return (
    <div className="App">
        <h1> Introduction to ReactJS </h1>
  

        <div>
          <Link to='/login' > Login </Link>
          <Link to='/clock' > Clock </Link>
          <Link to='/list' > List </Link>
        </div>

        <Routes>

          <Route path='/login' element={<Login/>}  />
          <Route path='/clock' element={<Clock/>}  />
          <Route path='/list' element={<List setStudent={setStudent} />} />
          <Route path='/profile' element={<Profile student={student} />} />

        </Routes>
        {/* <List/>
        <Login/> */}
    </div>
  );
}

export default App;
