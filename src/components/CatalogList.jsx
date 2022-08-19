import React, { useState } from 'react';
import CatalogItem from './CatalogItem';
import { TextField } from "@mui/material";

import { useRecoilState } from 'recoil';
import { productsState } from "../atoms/products";
//import { cartState } from '../atoms/cart';

import { StyledProductList } from '../components/styled/StyledProductList'

const CatalogList = ({ productProps, title }) => {

   const [products] = useRecoilState(productsState)
//   const [cart, setCart] = useRecoilState(cartState)
   const [sertchColors, setSertchColors] = useState('')

   const filterColor = products.filter((el) => {
      return el.color.toLowerCase().includes(sertchColors.toLowerCase())
   })

   console.log('products', products);
   console.log('filterColor', filterColor);

   return (
      <div>
         <TextField
            style={{ marginLeft: '5px' }}
            label="Фильтр"
            variant="standard"
            //value={sertchProdect}
            onChange={e => setSertchColors(e.target.value)}
         />

         <StyledProductList>
            {filterColor.map((product, index) =>
               <CatalogItem
                  number={index + 1}
                  productProps={product}
                  key={product.article}
               />
            )}
         </StyledProductList>

         <h3 style={{ textAlign: 'center' }}>{title}</h3>
         {/*          <StyledProductList>
            {productProps.map((product, index) =>
               <CatalogItem
                  number={index + 1}
                  productProps={product}
                  key={product.article}
               />
            )}
         </StyledProductList> */}
      </div>
   )
}

export default CatalogList;