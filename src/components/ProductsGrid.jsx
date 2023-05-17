
import { DropDown } from "./DropDown";
import { Loading } from "./loading";
import { ProductItems } from "./ProductItems";



export const ProductsGrid = ({returnFunction, itemsListDrop = {}, data = {}}) => {


  return (
    <div className="grid-princial-cont container mt-2">

      <div className="head-grid d-flex justify-content-between">
      <div>
        {itemsListDrop ? <DropDown returnFunction={returnFunction} {...itemsListDrop} /> 
                       : <DropDown itemsList = {['todo']} />}
      </div>
        <div className="elements-count">
          <span>Elementos encontrados: { data.elementsCount }</span>
        </div>
      </div>

      <div className="grid-content d-flex flex-wrap justify-content-around mt-2 ">
            {
              (data.isLoading) ? (
                  <Loading/>
              ): (
                  data.products.map((product) => (
                      <ProductItems key={product.id} {...product} />
                    ))
              )
            }

      </div>
    </div>
  );
};
