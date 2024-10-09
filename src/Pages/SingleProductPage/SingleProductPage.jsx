import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UseAppContext } from '../../Context/AppContext';
import SingleProd from '../../Components/Single-Prod/SingleProd';


const SingleProductPage = () => {

    const { productId } = useParams();
    const {getproducts} = UseAppContext();
    const [LoadedProduct,setLoadedProduct] = useState(null);

    useEffect(() => {
      if (getproducts.length > 0) {
      const filterproduct = getproducts.filter((product) =>{
            if (product?.id === +productId) {
                return product;
            }
        });
        //console.log(filterproduct, "filterproduct");
        setLoadedProduct(filterproduct[0])
      }
      
    }, [getproducts])
    

  return (
    LoadedProduct? <SingleProd LoadedProduct={LoadedProduct}/> : <div>Loading............</div>
  )
}

export default SingleProductPage