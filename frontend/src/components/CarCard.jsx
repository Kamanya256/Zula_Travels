import React from "react";

function CarCard({ car }) {
    return (
        <div className="car-card">
            <img src={car.image} alt={car.model} />

            <div className="car-card-body">
                <h3>{car.make} {car.model}</h3>

                <ul>
                    <li>Seats: {car.seats}</li>
                    <li>Transmission: {car.transmission}</li>
                </ul>

                <div className="car-card-footer">
                    <span className="price">${car.price} / day</span>
                    <button>Hire Now</button>
                </div>
            </div>
        </div>
    );
}

export default CarCard;
