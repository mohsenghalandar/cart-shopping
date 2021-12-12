import { act } from '@testing-library/react';
import React from 'react';
import { useReducer } from 'react';
//export data we need/
export const cartcontext = React.createContext();
//use Reducer part
const initaialstate = {
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false,
}
const sumItems = (items) => {
    const itemsCounter =items.reduce((total,product)=>total+product.quantity,0);
    const total = items.reduce((total,product)=> total+product.price * product.quantity,0).toFixed(2);

    return {itemsCounter : itemsCounter,total:total}
}
const cartReducer = (state,action) => {
    switch(action.type){
        //
        case "ADD_ITEM" : if (!state.selectedItems.find(item => item.id === action.playload.id))
        {
            state.selectedItems.push({
                ...action.playload,
                quantity:1,
            });

            state.checkout=false ;
        }
        
        return ({...state,selectedItems:[...state.selectedItems],...sumItems(state.selectedItems)})
        //
        case "REMOVE_ITEM" : const newSelecteditems = state.selectedItems.filter(item => item.id !== action.playload.id);
        return {...state,selectedItems:[...newSelecteditems],...sumItems(state.selectedItems)}
        

        //
        case "INCREASE" : 
        const indexI = state.selectedItems.findIndex(item => item.id === action.playload.id)
                        state.selectedItems[indexI].quantity++ ;
                         
                        return {...state,...sumItems(state.selectedItems)}
                        
        
        case "DECREASE" : 
        const indexD = state.selectedItems.findIndex(item => item.id === action.playload.id)
                        state.selectedItems[indexD].quantity-- ;
                        
                        return{...state,...sumItems(state.selectedItems)}
            

        //

        case "CHECKOUT":
        return{
            selectedItems : [],
            itemsCounter : 0,
            total : 0 ,
            checkout : true,}
        //
        case "CLEAR" :
            
            return{
                selectedItems : [],
                itemsCounter : 0 ,
                total : 0 ,
                checkout : false ,
                
            }
    }
}

const CartContextProvider = (props) => {
    const [state,dispatch] = useReducer(cartReducer,initaialstate);
    return (
        <cartcontext.Provider value={{state:state,dispatch:dispatch}}>
            {props.children}
        </cartcontext.Provider>
    );
};

export default CartContextProvider;