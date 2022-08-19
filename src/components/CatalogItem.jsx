import { Button } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { productsState } from "../atoms/products";
import { cartState } from '../atoms/cart';
import { copyDeep } from '../utils/copyDeep';
import { StyledProductItems } from './styled/StyledProductItems'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { rubFormat } from '../utils/rubFormat';

const CatalogItem = (props) => {
  const {
    number,
    productProps,
  } = props

  const [products, setProducts] = useRecoilState(productsState)
  const [cart, setCart] = useRecoilState(cartState)

  const AddToCart = () => {
    const newCart = copyDeep(cart)
    const finded = newCart.find((el) => el.article === productProps.article)
    if (!finded) {
      setCart([...cart, { ...productProps, qty: 1 }])
    } else {
      finded.qty++
      setCart(newCart)
    }
    decrementQtyProduct()
  }

  const decrementQtyProduct = () => {
    const newProducts = copyDeep(products)
    const finded = newProducts.find((el) => el.article === productProps.article)
    finded.available--
    setProducts(newProducts)
  } 

  return (
    <StyledProductItems>
      <div>
        <p>index: {number} </p>
        <hr style={{ margin: '15px 0' }} />
        <img
          style={{ maxWidth: '150px', borderRadius: '5px' }}
          src={`/images/${productProps.image}`}
          alt="картинка" 
        />
        <p>Название: {productProps.name}</p>
        <p>Цвет: {productProps.color}</p>
        <p>Цена: {rubFormat(productProps.price)}</p>
        <p>Склад: {productProps.available}шт</p>
      </div>
      <div>

        <Button
            variant="outlined"
            color="info"
            endIcon={<AddShoppingCartIcon />}
            onClick={AddToCart}
          disabled={productProps.available === 0}
          >
            Купить
          </Button>

      </div>
    </StyledProductItems>
  )
}

export default CatalogItem;