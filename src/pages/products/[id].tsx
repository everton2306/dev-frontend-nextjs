"use client";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import ProductDetails from "@/components/ProductDetails";
import { useRouter } from "next/router";
import { Product } from "@/types/product";
import useAuth from "@/hooks/useAuth";

export default function ProductPage() {
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

  return <ProductDetails product={product} />;
}
