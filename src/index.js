import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Connector from './features/connector/Connector';
import Propsearch from './features/propsearch/Propsearch';
import Property from './features/property/Property';
import Propspage from './features/propspage/Propspage';
import {getPropsAsync} from './features/properties/propertiesSlice'
import { getConsAsync } from './features/cons/consSlice';
import { getDirsAsync } from './features/directions/directionsSlice';
import { getTypesAsync } from './features/contypes/contypesSlice';
import Propexplain from './explainations/propexplain/Propexplain';
import Homeexplain from './explainations/homeexplain/Homeexplain';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

store.dispatch(getPropsAsync())
store.dispatch(getConsAsync())
store.dispatch(getDirsAsync())
store.dispatch(getTypesAsync())
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <App></App> */}
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Homeexplain/>} />
            <Route path="con/" element={<Connector/>} />
            <Route path="prs/" element={<Propsearch/>} />
            {/* <Route path="addcon/" element={"addcon"} /> */}
            {/* <Route path="addprop/" element={"addprop"} /> */}
            <Route path="prop/" element={<Propspage/>} >
              <Route path="" element={<Propexplain/>} />
              <Route path=":propId" element={<Property />} />
            </Route>
            
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);