import { useCart } from "../hooks/useCart";
import { ProductCard } from "./ProductCard.tsx";
import "../styles/productList.css";
import type { Product } from "../models/product.ts";

interface Productprops {
  products: Product[];
}

export function ListProducts({ products }: Productprops) {
  const { addToCart } = useCart();
  return (
    <ul className="product-list">
      {products ? (
        products.map((prod) => (
          <li className="product-item" key={`${prod.id}-${prod.title}`}>
            <ProductCard
              id={prod.id}
              key={`${prod.id}-${prod.title}`}
              imagen={prod.images}
              category={prod.category}
              titulo={prod.title}
              precio={prod.price}
              rating={prod.rating}
              handleFunction={() => {
                addToCart(prod);
              }}
            />
          </li>
        ))
      ) : (
        <p>no hay productos para mostrar </p>
      )}
    </ul>
  );
}
