import React, {createContext, useContext, useEffect, useState} from 'react'
import { BASE_URL } from '../Components/config';

const AppContext = createContext();

export const UseAppContext = () =>{
    return useContext(AppContext);
}

export const AppProvider = ({children}) =>{
    const[allCategories, setAllCategories] = useState([]);
    const[getproducts, setGetAllProduct] = useState([]);

    useEffect(() =>{
        getCategory();
        getProducts();
      }, []);

      const getCategory = async() =>{
      
        try {
          const res = await fetch(BASE_URL + "products/categories");
          const catData =await res.json()
          setAllCategories(catData)
        } catch (error) {
          console.log(error, "error")
        }
       
      }
    
      const getProducts = async() =>{
        try {
          const res = await fetch(BASE_URL + "products/");
          const prodData =await res.json()
        //  console.log(prodData, "prodData")
          setGetAllProduct(prodData)
        } catch (error) {
          console.log(error, "error")
        }
      };

      return(
        <AppContext.Provider value={{allCategories,getproducts}}>  
            {children}
        </AppContext.Provider>
      )
};
