import { FETCH_PRODUCTS,FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";
import data from "../data.json"


export const fetchProductlist = () => (dispatch)=>{
    const res= data.products
    dispatch({
        type:FETCH_PRODUCTS,
        payload:res,
    });
};

export const filterProducts=(products,size)=>(dispatch)=>{
    dispatch({
        type:FILTER_PRODUCTS_BY_SIZE,
        payload:{
            items:(size==="")?products:products.filter((product)=>product.availableSizes.indexOf(size)>=0),
            size:size}
    })
}

export const sortProducts=(filteredItems,order)=>(dispatch)=>{   
    
    const sortedProducts=filteredItems.slice()
    if(order===""){
        sortedProducts.sort((a,b)=>(a._id>b._id)?1:-1)
    }
    else{
        if(order==="lowestToHighest"){
            sortedProducts.sort((a,b)=>(a.price>b.price)?1:-1)
        }else{
            sortedProducts.sort((a,b)=>(a.price<b.price)?1:-1)
        }
    }
    dispatch({
        type:ORDER_PRODUCTS_BY_PRICE,
        payload:{
            items:sortedProducts,
            sort:order}
    })
}
    


