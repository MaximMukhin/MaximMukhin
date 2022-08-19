// import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../atoms/products";
import '../styles/App.css'
import CatalogList from "../components/CatalogList";
import Navigation from "../components/Navigation";
//import { copyDeep } from "../utils/copyDeep";

function Catalog() {

   const [products, /* setProducts */] = useRecoilState(productsState)

   //  useEffect(() => {
   //     fetch('http://localhost:3000/products.json').then((res) => {
   //        res.json().then((data) => {
   //           console.log(data);
   //           setProducts(data)
   //        })
   //     })
   //  }, [setProducts])

   return (
      <div>
         <Navigation />


         <CatalogList
            title={'Catalog'}
            productProps={products}
         />
         <hr style={{ margin: '15px 0' }} />
      </div>
   )
}

export default Catalog;
