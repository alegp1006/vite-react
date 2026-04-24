import type { Product } from "../models/product";

export async function getProducts() {
  try {
    const res = await fetch(
      "https://dummyjson.com/products/?limit=0&delay=2000",
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    const product = data.products;

    return product?.map((p: Product) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      price: p.price,
      rating: p.rating,
      stock: p.stock,
      tags: p.tags,
      reviews: p.reviews,
      image: p.images,
    }));
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error to get products: ${err.message}`);
    }

    // Si no es un Error (caso raro), lanzamos algo genérico
    throw new Error("An unknown error occurred");
  }
}
