import { useContext } from "react";
import CartContext from "../context/CartProviders";
import { UseCartContextType } from "../context/CartProviders";

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart;