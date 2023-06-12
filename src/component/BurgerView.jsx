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
      img: "/southwest_kick.jpg",
      prodt_weight: 140,
    },

    {
      _id: 2,
      product_name: "Hamburger",
      price: 4.5,
      img: "/hamburger.jpg",
      prodt_weight: 85,
    },
  ]

export default function BurgerView() {
  const [customer, setCustomer] = useState(user);
  const [products, setProducts] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get("http://abellmanuell.eu-4.evennode.com/api/products")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setProducts(res.data);
          setIsLoading(false);
          setIsError(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(false);
        throw err;
      });
  }, [products]);
/*
  useEffect(() => {
    axios.get("http://localhost:4000/api/user/1").then((res) => {
      if (res.status >= 200 && res.status <= 299) {
        setCustomer(res.data);
      }
    });
  }, []);
*/
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
