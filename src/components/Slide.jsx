
export const Slide = () => {
  return (
    <div className="principal-slide" >
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./src/images/imgLicor1.JPG" className="d-block w-100"/>
              </div>
              <div className="carousel-item">
                <img src="./src/images/imgLicor2.JPG" className="d-block w-100"/>
              </div>
              <div className="carousel-item">
                <img src="./src/images/imgLicor3.JPG" className="d-block w-100"/>
              </div>
            </div>
        </div>
    </div>
  )
}
