import { FETCH_PRODUCTS } from "../types";
import data from '../data.json'

const initialState={
    products:data.products,
}
const productReducer=(state={initialState},action)=>{
    switch (action.type) {
        case FETCH_PRODUCTS:
            return{
                products:state.initialState
            }
    
        default:
            return state;
    }
}
export default productReducer
