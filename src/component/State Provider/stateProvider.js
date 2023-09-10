import { createContext, useContext, useReducer } from "react";

export const stateProvider=createContext("");

export const StateProvider=({reducer,initialState,children})=>(
 <stateProvider.Provider value={useReducer(reducer,initialState)}>
    {children}
 </stateProvider.Provider>
)

export const useStateValue=()=>useContext(stateProvider)