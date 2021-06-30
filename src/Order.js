import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order() {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(val => {
      return val + 1;
    });
  }
  return (
    <li>
      Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
}
export default Order;
