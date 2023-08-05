import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { decrementCounter, incrementCounter } from './actions';
import Clock from './components/Clock';
import Form from './components/Form'
import Login from './components/Login';
import Profile from './components/Profile';
import { UserContext } from './context';

function App(props) {
  return (
    <div className="App">

        <div>
          <Link to='/signin' > Signin </Link>
          <Link to='/signup' > Signup </Link>
          <Link to='/clock' > Clock </Link>
        </div>

        <Routes>

          <Route path='/clock' element={<Clock/>}  />
          <Route path='/signin' element={<Form />}>
            {/* Below route shows how to include params in a react route. */}
            {/* <Route path=':id' element={<List setStudent={setStudent} />} ></Route> */}
          </Route>
          <Route path='/signup' element={<Form signup />}/>
          <Route path='/profile' element={
            <UserContext.Provider value={{ name: "ReactDOM", version: "18.0.2" }} >
              <Profile />
            </UserContext.Provider>
          } />

        </Routes>
    </div>
  );
}

export default App;
