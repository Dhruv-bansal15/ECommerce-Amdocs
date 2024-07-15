import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your shopping cart is empty</h2>
            <p>
              You have no items in your shopping list. To buy one or more items,
              click on 'Add to Cart' next to each item on home page.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping cart</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
