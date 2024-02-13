"use client";

import API from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function CartItems() {
  const { data: cartItem, isLoading } = useQuery({
    queryKey: ["cartItem"],
    queryFn: API.cart.getCart,
  });

  useEffect(() => {
    if (!cartItem) return;
  }, [cartItem]);

  const { mutate, isPending } = useMutation({
    mutationFn: API.cart.addItemToCart,
  });

  console.log("cartItem", cartItem);
  return <section>CartItem</section>;
}

export default CartItems;
