import React, { useState, useEffect } from "react";
import axios from "axios";

import BurgerHeader from "./burgerview/BurgerHeader";
import BurgerList from "./burgerview/BurgerList";
import LoadingSpinner from "./general/LoadingSpinner";
import Error from "./general/Error";
import Login from "./Login";

// REQUEST SERVER
const user = {
  _id: 0,
  username: "",
  wallet_balance: 0.0,
  item_cart: 0,
  prodt_weight: "140",
};

const data = [
    {
      _id: 1,
      product_name: "Southwest Kick",
      price: 8.99,
      img: "https://github.com/abellmanuell/food-shack/tree/main/public/southwest_kick.jpg",
      prodt_weight: 140,
    },

    {
      _id: 2,
      product_name: "Hamburger",
      price: 4.5,
      img: "https://github.com/abellmanuell/food-shack/tree/main/public/hamburger.jpg",
      prodt_weight: 85,
    },
  ]

export default function BurgerView() {
  const [customer, setCustomer] = useState(user);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
          setProducts(data),
          setIsLoading(false);
          setIsError(true);

  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isError) {
    return <Error />;
  }

  return (
    <section className="w-[90vw] mx-auto my-6 max-w-[1170px] min-w-[320px]">
      <BurgerHeader {...customer} />
      <BurgerList products={products} setProducts={setProducts} />
    </section>
  );
}
