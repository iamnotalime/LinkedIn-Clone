
import React, {useEffect}  from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import Feed from './Feed';
import { login, logout, selectUser } from './features/counter/userSlice';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      }else{
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      {/* Header */}
      <Header/> 
      {!user ? (<Login/>) : (
        <div className="app__body">
        <Sidebar/>
        <Feed />
        <Widgets/>
         {/* Widgets */}
      </div>
      )}
    </div>
  );
}

export default App;
