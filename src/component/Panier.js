import React from 'react';
import { useCartContext } from './CartContext';
import '../styles/App.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Panier = () => {
    
  const { cartItems } = useCartContext();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <aside className="panier">
      <h3>Résumé du panier</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title} : ${item.price}</li>
        ))}
      </ul>
      <p>Total : ${totalPrice.toFixed(2)}</p>
      <Link to="/panier"><Button>Afficher le panier</Button></Link>
    </aside>
  );
};

export default Panier;