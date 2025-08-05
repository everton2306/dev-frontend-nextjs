"use client";
import { useEffect, useState } from "react";
import { getProduct } from "../../../services/api";
import { useRouter } from "next/router";
import { Product } from "@/types/product";
import EditProduct from "@/components/EditProduct";
import useAuth from "@/hooks/useAuth";

export default function ProductEditPage() {
  useAuth();  
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProduct(Number(id)).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return <EditProduct product={product} />;
}
