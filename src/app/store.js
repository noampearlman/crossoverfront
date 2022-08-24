import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
// import propsearchReducer from '../features/propsearch/propsearchSlice'
import propertiesReducer from '../features/properties/propertiesSlice';
import consReducer from "../features/cons/consSlice"
export const store = configureStore({
  reducer: {
    login:loginReducer,
    // propsearch:propsearchReducer,
    properties:propertiesReducer,
    cons:consReducer
  },
});
