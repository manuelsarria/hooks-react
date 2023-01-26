import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { MainApp } from './useContext/MainApp';
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook';
// import { Message } from './02-useEfect/Message';
// import { MultipleCustomhooks } from './03-examples/MultipleCustomhooks';
// import { TodoApp } from './useReducer/TodoApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEfect/simpleForm';
// import { HooksApp } from './HooksApp';
// import './useReducer/intro-reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
  <MainApp/>
  {/* </React.StrictMode> */}
  </BrowserRouter>
)
