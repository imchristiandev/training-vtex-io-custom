import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm';
/* import { useCssHandles } from 'vtex.css-handles';
import { useCheckoutURL } from 'vtex.checkout-resources/Utils';
 */

const ProductAfterBuy = () => {
  const CSS_HANDLES = [
    "lastProduct",
    "lastProduct__info",
    "lastProduct__image",
    "lastProduct__data",
    "lastProduct__resume"
  ]

  const product: any = useProduct()
  const brand: string = product.product.brand;
  const name: string = product.product.productName;
  const itemId: string = product.selectedItem.itemId;
  const imageUrl: string = product.selectedItem.images[0].imageUrl;
  const quantity: string = product.selectedQuantity;
  const {
    orderForm: { items, totalizers }
  } = useOrderForm();
  const totalPrice: number = totalizers[0].value / 100;
  console.log("precio total", totalPrice)
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={handles.lastProduct}>
      <div className={handles.lastProduct__info}>
        <div className={handles.lastProduct__image}>
          <img src={imageUrl} alt={name} />
        </div>
        <div className={handles.lastProduct__data}>
          <h3>{brand}</h3>
          <h2>{name}</h2>
          <p>SKU: {itemId}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div className={handles.lastProduct__resume}>
        <div>Subtotal: {items.length} $ {totalPrice} </div>
        Buttons
      </div>
    </div>
  )
}

export default ProductAfterBuy;