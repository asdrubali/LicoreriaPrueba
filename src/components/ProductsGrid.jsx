
import { ProductItem } from "./ProductItem";
import { Loading } from "./loading";

export const ProductsGrid = ({ products, isLoading, elementsCount }) => {
    return (
      <>
        <div 
          className="cont container" 
        >
          <div className="row elements-cant">
            <span >Elementos Encontrados: {elementsCount}</span>
          </div>
          {/* mt-3 products-grid row d-flex justify-content-center align-items-center */}
          <div className="grid-products mt-2">
            {
              (isLoading) ? (
                  <Loading/>
              ): (
                  products.map((product) => (
                      <ProductItem key={product.id} {...product} />
                    ))
              )
            }
          </div>
        </div>
      </>
    );
}
