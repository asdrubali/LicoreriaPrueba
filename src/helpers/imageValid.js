

export const imageValid = ( img ) => {

    const defaultImage = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

    const image = new Image();

    image.src = img;
    
    const imgVal = image.complete && image.naturalWidth !== 0;

    return imgVal ? img : defaultImage;
}
