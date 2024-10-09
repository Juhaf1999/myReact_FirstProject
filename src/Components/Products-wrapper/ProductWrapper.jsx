import React from 'react'
import "./productsWrapper.css";
import Productcard from '../Product card/Productcard';
import {UseAppContext} from "../../Context/AppContext";
import { Link } from "react-router-dom";


const ProductWrapper = () => {
  const {getproducts} = UseAppContext();

  return (
    <div className='prod-wrapper'>
       <div> Product- All</div>

       <div className='main-prod-card'>
        {getproducts.map((prodDatas) =>{
          return  <Link to={`product/${prodDatas.id}`}key={prodDatas.id} >
          <Productcard  prodDatas={prodDatas}/>
          </Link>

        })}
       </div>
    </div>
  ) 
}

export default ProductWrapper