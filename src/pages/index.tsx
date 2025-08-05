"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Product } from "../types/product";

import ProductsList from "@/components/ProductsList";
import SidebarLayout from "@/components/SidebarLayout";
import useAuth from "@/hooks/useAuth";

export default function Home() {
  useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 p-4">
        <p className="text-lg text-gray-600 font-semibold animate-pulse">
          Carregando...
        </p>
      </div>
    );

  return (
    <SidebarLayout>
      <ProductsList products={products} />
    </SidebarLayout>
  );
}
