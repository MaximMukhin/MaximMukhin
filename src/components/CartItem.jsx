import { Button, IconButton } from '@mui/material';
import React from 'react';
import { cartState } from '../atoms/cart';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { StyledProductItems } from './styled/StyledProductItems';
import { rubFormat } from '../utils/rubFormat';
import { useRecoilState } from 'recoil';
import { productsState } from '../atoms/products';

//import { copyDeep } from '../utils/copyDeep';

const CartItem = ({
   productCart,
   number,
   removeCartItem,
   decrement,
   increment,
   clgState,
   changeQtyCartIncrement,
   changeQtyCartDecrement,
}) => {
   const [products, /* setProducts */] = useRecoilState(productsState)
   const [cart, /* setCart */] = useRecoilState(cartState)

   const disabledIncrement = () => {
      const find = products.find((el) => el.article === productCart.article)
      if (find.available !== 0) {
         return false
      }
      if (find.available === 0) {
         return true
      }
   }

   const disabledDecrement = () => {
      const find = cart.find((el) => el.article === productCart.article)
      if (find.qty > 1) {
         return false
      }
      if (find.qty <= 1) {
         return true
      }
   }

   return (
      <StyledProductItems>
         <div>
            <div >
            <p>index: {number}</p>
            <hr style={{ margin: '15px 0' }} />
            <img
               style={{ maxWidth: '100px', borderRadius: '5px' }}
               src={`/images/${productCart.image}`} alt="картинка"
            />
            <p>Артикул: {productCart.article}</p>
            <p>Название: {productCart.name}</p>
            <p>Цвет: {productCart.color}</p>
               <p>Цена: {rubFormat(productCart.price)}</p>
               <p>Общая цена: {rubFormat(productCart.price * productCart.qty)}</p>
               <p>Количество:

                  <IconButton
                     aria-label="-"
                     color="info"
                     onClick={() => changeQtyCartDecrement(number, productCart)}
                     disabled={disabledDecrement()}
                  >
                     <IndeterminateCheckBoxIcon />
                  </IconButton>

                  {productCart.qty}

                  <IconButton
                     aria-label="+"
                     color="info"
                     onClick={() => changeQtyCartIncrement(number, productCart)}
                     disabled={disabledIncrement()}
                  >
                     <AddBoxIcon />
                  </IconButton>
            </p>
         </div>
         <hr style={{ margin: '5px 0' }} />
         <div>

               <Button
                  style={{ marginRight: '10px' }}
                  variant="outlined"
                  color="error"
                  endIcon={<DeleteIcon />}
                  onClick={() => removeCartItem(number, productCart)}
               >
                  Удалить
               </Button>

               <Button
                  variant="outlined"
                  color="info"
                  onClick={() => clgState(number, productCart)}
               >
                  Стейт
               </Button>
            </div>
      </div>
      </StyledProductItems>

   )
}

export default CartItem;