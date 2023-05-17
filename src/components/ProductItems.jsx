import PropTypes from 'prop-types';

export const ProductItems = ({ title, price, img, stock, id }) => {

  const imgDefault = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

  const handErrorImg = (event) => {
    event.target.src = imgDefault
  }

  {/* style="width: 12rem;" */}

  return (
      <div 
        className="card mb-3"
        key={id}
      >
        <img
          src={ img }
          className="card-img-top"
          alt = { title }
          onError={ handErrorImg }
        />
        <div className="card-body">
          <div className='title-cont' >
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="desc-cont" >
            <p className="card-text">Price: {price}S./</p>
            <a 
              className="btn btn-dark"
            >Agregar</a>
          </div>
        </div>
      </div>
  )
}

ProductItems.prototypes ={
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}