
export const getProducts = async ({ group, category }) => {

  const groupVal = group?.replace(/\s+/g, '')

  // let url = 'http://localhost:3000/api/products/';

  let url = 'https://autumn-wind-2697.fly.dev/api/products/';

  if (groupVal === 'Todo' ) {
    url = url ;
  }else if( !category ){
    url = url + groupVal;
  }else{
    url = url + groupVal + '/' + category;
  }
  
  const res = await fetch(url);
  const {products, elements} = await res.json();
  const _products = products.map((product) => {
    return {
      title: product.name,
      price: product.price,
      img: product.img,
      stock: product.stock,
      id: product.id,
      category: product.category
    };
  });


  return {
    elements,
    products: _products,
  };
};
