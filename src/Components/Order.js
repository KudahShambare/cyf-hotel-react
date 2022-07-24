import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    return setOrders(val => val + 1);
  };
  return (
    <li>
      Pizzas: {orders} <RestaurantButton orders={orderOne} />
    </li>
  );
};
export default Order;
