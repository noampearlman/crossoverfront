import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import propsearchReducer from '../features/propsearch/propsearchSlice'
import conlistReducer from "../features/conlist/conlistSlice"
export const store = configureStore({
  reducer: {
    login:loginReducer,
    propsearch:propsearchReducer,
    conlist:conlistReducer
  },
});
