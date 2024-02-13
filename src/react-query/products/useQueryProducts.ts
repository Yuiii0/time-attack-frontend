import API from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useQueryProducts() {
  return useQuery({
    queryKey: ["products", { isList: true, type: "total" }],
    queryFn: API.products.getProducts,
  });
}

export function useQueryProduct(id: string) {
  return useQuery({
    queryKey: ["product", { isList: false, id: id }],
    queryFn: () => API.products.getProduct(id),
  });
}
