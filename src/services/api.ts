import { Product } from "@/types/product";

const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}

export async function createProduct(product: Product): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return res.json();
}

export async function updateProduct(id: number, product: Product): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return res.json();
}

export async function deleteProduct(id: number): Promise<void> {
  await fetch(`${BASE_URL}/products/${id}`, { method: 'DELETE' });
}
