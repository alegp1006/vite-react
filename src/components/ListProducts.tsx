import { useCart } from "../hooks/useCart";
import { ProductCard } from "./ProductCard.tsx";
import "../styles/productList.css";
import type { Product } from "../models/product.ts";

interface Productprops {
  products: Product[];
}

export function ListProducts({ products }: Productprops) {
  const { removeProductFromCart, addToCart, cart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <ul className="product-list">
      {products ? (
        products.map((prod) => {
          const isProductInCart = checkProductInCart(prod);
          return (
            <li className="product-item" key={`${prod.id}-${prod.title}`}>
              <ProductCard
                id={prod.id}
                key={`${prod.id}-${prod.title}`}
                imagen={prod.images}
                category={prod.category}
                titulo={prod.title}
                precio={prod.price}
                rating={prod.rating}
                buttonText={isProductInCart ? "Añadido" : "Añadir"}
                buttonStyle={
                  isProductInCart ? "product-button-selected" : "product-button"
                }
                handleFunction={() => {
                  isProductInCart
                    ? removeProductFromCart(prod)
                    : addToCart(prod);
                }}
              />
            </li>
          );
        })
      ) : (
        <p>no hay productos para mostrar </p>
      )}
    </ul>
  );
}
