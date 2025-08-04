import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div>
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${car.price}</span>/ curso
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Tipo</span>
                <span>{car.type}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Modalidad</span>
                <span>{car.mode}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Tiempo</span>
                <span>{car.time}</span>
              </div>

              
            </div>

          </div>
          {car.mode2 && (
            <>
           <br/>
           <div className="pick-description">
            <div className="pick-description__price">
              <span>${car.price2}</span>/ curso
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Tipo</span>
                <span>{car.type2}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Modalidad</span>
                <span>{car.mode2}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Tiempo</span>
                <span>{car.time2}</span>
              </div>

              
            </div>

          </div>
          </>
          )}
          
          </div>
        </div>
      ))}
      
    </>
  );
}

export default CarBox;
