import { useState } from "react";
import { useFetchProducts } from "./hooks/useFetchProducts";
import { Slide } from "./components/Slide";
import { Header } from "./components/Header";
import { ProductsGrid } from "./components/ProductsGrid";
import { NavBar } from "./components/NavBar";


export const ProductsApp = () => {

  const [param, setParam] = useState({
        group: '',
        category: ''
  });

  const datosNav = [
    {
      name: 'Bebidas Con Alcohol',
      itemsList: ['Cervezas', 'Rones', 'Espumantes', 'Gin', 'Piscos', 'Tequilas', 'Vinos', 'Vodkas', 'Whisky', 'Mas']
    },
    {
      name: 'Bebidas Sin Alcohol',
      itemsList: ['Aguas','Energizantes','Jugos','Tonicas','Gaseosas']
    },
    {
      name: 'Otros',
      itemsList: ['Snacks', 'Extras']
    }
  ]

  const onFindProducts = (params) => {
    setParam(params)
  };
   
  const dataProducts = useFetchProducts(param); 


  const findItemsList = (nameToFind) => {
    const result = datosNav.find((item) => {
      if (item.name == nameToFind || item.itemsList.includes(nameToFind)) {
          return item;
      }
    });
    return result ? result : null;
  };

  return (
    <>
    <div className="container principal-cont" >
      <Header/>
      <Slide/>
      <NavBar returnFunction = {onFindProducts} groups = { datosNav } />
      <ProductsGrid returnFunction = {onFindProducts} itemsListDrop={ findItemsList(param.group) } data ={ dataProducts }  /> 
    </div>
    </>
  );
};
