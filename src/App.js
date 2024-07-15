import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();
  
  useEffect(()=> {
     const unsubscribe = auth.onAuthStateChanged((authUser)=> {
       if(authUser){
          dispatch({
            type: "SET_USER",
            user: authUser,
          })
       }else{
          dispatch({
            type: "SET_USER",
            user: null,
          });
       }
     })
     return ()=> {
       unsubscribe();
     }
  },[]);
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header /> 
                <Checkout />
              </>
            }
          />
          <Route exact path="/login" element={
            <>
              <Login/>
            </>
          } />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
