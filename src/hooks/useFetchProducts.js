import { useEffect, useState } from "react"
import { getProducts } from "../helpers/getProdusct";

export const useFetchProducts = ( param ) => {

    const [data, setProducts] = useState({
        products: [],
        isLoading: true,
        elementsCount: 0,
    })
    
    useEffect(() => {
      setProducts({
        ...data,
        isLoading: true
      });
      getProducts(param)
        .then((newProducts) => {
            const _data = {
              products: newProducts.products,
              elementsCount: newProducts.elements,
              isLoading: false,
          }
            setProducts(_data);
      });
    }, [param]);
    
    return { ...data }
}