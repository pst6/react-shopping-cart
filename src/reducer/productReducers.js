import { FETCH_PRODUCTS,FILTER_PRODUCTS_BY_SIZE,ORDER_PRODUCTS_BY_PRICE } from "../types";



export const productReducer=(state={},action)=>{
    switch (action.type) {
        case FETCH_PRODUCTS:
            return{
                ...state,
                items:action.payload,
                filteredItems:action.payload
            };
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                filteredItems:action.payload.items,
                

        }
        case ORDER_PRODUCTS_BY_PRICE:
            return{
                ...state,
                
                filteredItems:action.payload.items
            }
        
    
        default:
            return state;
    }
}

