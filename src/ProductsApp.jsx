import { useState } from "react";
import { ProductsGrid } from "./components/ProductsGrid";
import { NavBar } from "./components/NavBar";
import { useFetchProducts } from "./hooks/useFetchProducts";


export const ProductsApp = () => {

  const [param, setParam] = useState({
        group: '',
        category: ''
  });

  const onFindProducts = (params) => {
    setParam(params)
  };
  
  const dataProducts = useFetchProducts(param); 

  
  const datosNav = [
      {
        groupName: 'Bebidas Con Alcohol',
        itemsList: ['Cervezas', 'Rones', 'Espumantes', 'Gin', 'Piscos', 'Tequilas', 'Vinos', 'Vodkas', 'Whisky', 'Otros']
      },
      {
        groupName: 'Bebidas Sin Alcohol',
        itemsList: ['Aguas','Energizantes','Jugos','Tonicas','Gaseosas']
      },
      {
        groupName: 'Otros',
        itemsList: ['Snacks', 'Extras']
      }
    ]

  

  return (
    <>
      {/* <Slide/> */}
      <NavBar returnFunction = {onFindProducts}  _data = { datosNav } />
      <ProductsGrid { ...dataProducts } />
      {/* <NavBar returnFunction = {onFindProducts} { ...dataP } /> */}
      {/* <NavBar returnFunction = {onFindProducts}/> */}
      {/* <SearchTool returnFunction = {onFindProducts} /> */}
    </>
  );
};
