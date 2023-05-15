import PropTypes from 'prop-types';
import { imageValid } from '../helpers/imageValid';
import { useState } from 'react';



export const ProductItem = ({ title, price, img, stock, id }) => {

  const imgDefault = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

  const handErrorImg = (event) => {
    event.target.src = imgDefault
  }

  return (
    <div 
    className='card container'
    key={ id }
    > 
      <div className='img-cont-card row'>
          <img 
            className = ''
            src={ img } 
            alt = { title }
            onError={ handErrorImg }
          />
      </div>
      <div className = 'data-cont-card row mt-1'>
        <div className = 'card-title'>
            <h2 className='' >{ title }</h2>
          </div>
          <div className = 'card-price'>
            <t className='data-cont'>{ price }./S</t>
          </div>
      </div>
    </div>
  )
}


ProductItem.prototypes ={
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}