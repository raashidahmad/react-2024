import React, { useState, useMemo, useEffect, useCallback } from "react";
import { List } from "./List";
import { FunctionContext } from "./FunctionContext";
import { ThemeProvider } from "./ThemeContext";
import { UseRefUsage } from "./UseRefUsage";
import { ReducerUsage } from "./UseReducerUsage";
import { Logout } from "./services/AuthService";
import { useNavigate } from "react-router";

export function ExpensiveCalculation() {
  const navigate = useNavigate();
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  
  const doubleNumber = useMemo(() => {
    return updateNumber(number)
  }, [number]);
  
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]); 

  const getitems = useCallback((inc) => {
    return [number + inc, number + 1 + inc, number + 2 + inc];
  }, [number]);

  useEffect(() => {
  }, [themeStyles]);

  const style = {
    "marginTop": "10px"
  };

  function logout() {
    Logout();
    navigate("/login");
  }
  

  return <>
    <h4>Change Counter</h4>
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
    </div>
    
    <ThemeProvider>
    <div style={style}>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      </div>
      <div style={style}></div>
      <div style={themeStyles}>{doubleNumber}</div>
      <FunctionContext />
    </ThemeProvider>

    <List getItems={getitems} />
    <UseRefUsage />
    <ReducerUsage />

    <div style={style}>
      <button onClick={logout}>Logout</button>
    </div>
    
  </>
}

function updateNumber(num) {
  for(var i = 0; i < 1000000000; i++) {
  }
  return num * 2;
}

/*
For future reference
const MyContext = React.createContext();
const MyProvider = (props) => {
    const [valueA, setValueA] = React.useState("foo");
    const [valueB, setValueB] = React.useState("bar");
    const providerValue = React.useMemo(() => ({
        valueA, setValueA,
        valueB, setValueB,
    }), [valueA, valueB]);
    return(
        <MyContext.Provider value={providerValue}>
            {props.children}
        </MyContext.Provider>
    );
}
*/