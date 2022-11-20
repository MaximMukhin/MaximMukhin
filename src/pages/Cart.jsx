import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import { productsState } from '../atoms/products';
import { copyDeep } from '../utils/copyDeep';
import CartItem from '../components/CartItem';
import { StyledProductList } from '../components/styled/StyledProductList';
import { rubFormat } from '../utils/rubFormat';
import { Page } from '../components/Page';

const Cart = () => {

   const [products, setProducts] = useRecoilState(productsState)
   const [cart, setCart] = useRecoilState(cartState)

   //   const changeQty = (index, dir) => {
   //      const newCart = copyDeep(cart)
   //      const qty = newCart[index].qty
   //      if (qty > 1 && dir === -1) {
   //         newCart[index].qty += dir
   //         setCart(newCart)
   //      } else if (dir === 1) {
   //         newCart[index].qty += dir
   //         setCart(newCart)
   //      }
   //   }

   const changeQtyCartIncrement = (index, productCart) => {
      const newCart = copyDeep(cart)
      newCart[index].qty++
      setCart(newCart)

      const newProducts = copyDeep(products)
      const finded = newProducts.find((el) => el.article === productCart.article)
      finded.available--
      setProducts(newProducts)
   }

   const changeQtyCartDecrement = (index, productCart) => {
      const newCart = copyDeep(cart)
      newCart[index].qty--
      setCart(newCart)

      const newProducts = copyDeep(products)
      const finded = newProducts.find((el) => el.article === productCart.article)
      finded.available++
      setProducts(newProducts)
   }

   const removeCartItem = (index, productCart) => {
      const newCart = copyDeep(cart)
      newCart.splice(index, 1)
      setCart(newCart)
      returnQtyProduct(productCart)
   }

   const clgState = (index, productCart) => {
      console.log(index, productCart.article);
      const findArticle = products.find((el) => el.article === productCart.article)
      console.log('findArticle', findArticle);
      console.log('products', products)
   }

   const returnQtyProduct = (productCart) => {
      const newProduct = copyDeep(products)
      console.log('newProduct', newProduct)
      const finded = newProduct.find((el) => el.article === productCart.article)
      finded.available += productCart.qty
      setProducts(newProduct)
      console.log('setProducts(newProduct)', newProduct)
      console.log('finded', finded);
      console.log('productCart', productCart);
   }

   const sumCart = cart.reduce((sum, cartItem) => {
      return sum + cartItem.price * cartItem.qty
   }, 0)

   return (
      <Page>
         {cart.length !== 0
            ? <div>
               <h3 style={{ textAlign: 'center' }}>Cart</h3>
               <p style={{
                  border: '2px solid grey',
                  margin: ' 0px  5px',
               }}
               >
                  {rubFormat(sumCart)}
               </p>
               <StyledProductList>
                  {cart.map((productCart, index) =>
                     <CartItem
                        clgState={clgState}
                        changeQtyCartIncrement={changeQtyCartIncrement}
                        changeQtyCartDecrement={changeQtyCartDecrement}
                       // decrement={() => changeQty(index, -1)}
                       // increment={() => changeQty(index, 1)}
                        removeCartItem={removeCartItem}
                        number={index}
                        productCart={productCart}
                        key={index}
                     />
                  )}
               </StyledProductList>
            </div>

            : <div
               style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '900'
               }}>
               Корзина пустая
            </div>
         }
      </Page>
   )
}

export default Cart;