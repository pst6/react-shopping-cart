import { FETCH_PRODUCTS } from "../types";
// import data from "../data.json"


export function fetchProducts() {
    return({
        type:FETCH_PRODUCTS
    })
    
}