import { createContext, useContext, useState, type ReactNode } from "react";

// 1. Definimos la interfaz del objeto principal
interface Product {
  id: number;
  name: string;
}

// 2. Definimos la interfaz del Contexto (datos + funciones)
interface CartContextType {
  items: Product[];
  addItem: (product: Product) => void;
  clearCart: () => void;
}

// 3. Creamos el contexto con un valor inicial 'null'
const CartContext = createContext<CartContextType | null>(null);

// 4. Creamos el Provider
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    setItems((prev) => [...prev, product]);
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 5. Custom Hook para consumir el contexto de forma segura
export const useCart = () => {
  const context = useContext(CartContext);

  // Si el hook se usa fuera del Provider, lanzamos un error descriptivo
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }

  return context;
};
