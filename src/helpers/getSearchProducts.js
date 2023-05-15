
export const getSearchProducts = async ( param ) => {

  let url = `http://localhost:3000/api/products/`;
  
    
    const res = await fetch(url);
    const {products, elements} = await res.json();
    const _products = products.map((product) => {
      return {
        title: product.name,
        price: product.price,
        img: product.img,
        stock: product.stock,
        id: product.id,
      };
    });
  
    return {
      elements,
      products: _products,
    };
  };
  