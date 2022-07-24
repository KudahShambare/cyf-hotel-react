import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    return setOrders(val => val + 1);
  };
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton orders={orderOne} />
    </li>
  );
};
export default Order;
