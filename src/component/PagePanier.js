import React from 'react'
import { useCartContext } from './CartContext';



const PagePanier = () => {

  const { cartItems } = useCartContext();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  return (

    <div className="">
      <h3>Résumé du panier</h3>
      <ul>
        {cartItems.map((item, index) => (
            <>
            <img src={item.image} alt="produit"/>
            <li key={index}>{item.title} : ${item.price}</li>
            </>
        ))}
      </ul>
      <p>Total : ${totalPrice.toFixed(2)}</p>
      </div>

      )
      }

export default PagePanier;