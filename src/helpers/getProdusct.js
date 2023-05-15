
export const getProducts = async ({ group, category }) => {

  const groupVal = group.replace(/\s+/g, '') 

  let url = "";

  if (!group) {
    url = `https://autumn-wind-2697.fly.dev/api/products/`;
  }else if( !category ){
    url = `https://autumn-wind-2697.fly.dev/api/products/${groupVal}`;
  }else{
    url = `https://autumn-wind-2697.fly.dev/api/products/${groupVal}/${category}`;
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
    };
  });

  return {
    elements,
    products: _products,
  };
};
