import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
// import propsearchReducer from '../features/propsearch/propsearchSlice'
import propertiesReducer from '../features/properties/propertiesSlice';
import consReducer from "../features/cons/consSlice"
import directionsReducer from '../features/directions/directionsSlice'
import contypesReducer from '../features/contypes/contypesSlice'

export const store = configureStore({
  reducer: {
    login:loginReducer,
    properties:propertiesReducer,
    cons:consReducer,
    directions:directionsReducer,
    contypes:contypesReducer
  },
});
