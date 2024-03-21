

import PriceOption from "./PriceOption";


const PriceOptions = () => {
  const price = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 30,
      "features": [
        "Access to cardio equipment",
        "Access to weight training area",
        "Locker room access"
      ]
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "price": 50,
      "features": [
        "Access to all basic membership features",
        "Group fitness classes included",
        "Access to sauna and steam room"
      ]
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "price": 80,
      "features": [
        "Access to all standard membership features",
        "Personal training session once a month",
        "Towel service included"
      ]
    },
    {
      "id": 4,
      "name": "Corporate Membership",
      "price": 120,
      "features": [
        "Access to all premium membership features",
        "Discounts on additional personal training sessions",
        "Access to exclusive corporate events"
      ]
    },
    {
      "id": 5,
      "name": "Corporate Membership",
      "price": 120,
      "features": [
        "Access to all premium membership features",
        "Discounts on additional personal training sessions",
        "Access to exclusive corporate events"
      ]
    },
    {
      "id": 6,
      "name": "Corporate Membership",
      "price": 120,
      "features": [
        "Access to all premium membership features",
        "Discounts on additional personal training sessions",
        "Access to exclusive corporate events"
      ]
    },
    {
      "id": 7,
      "name": "Corporate Membership",
      "price": 120,
      "features": [
        "Access to all premium membership features",
        "Discounts on additional personal training sessions",
        "Access to exclusive corporate events"
      ]
    },
    {
      "id": 8,
      "name": "Corporate Membership",
      "price": 120,
      "features": [
        "Access to all premium membership features",
        "Discounts on additional personal training sessions",
        "Access to exclusive corporate events"
      ]
    },
    {
      "id": 9,
      "name": "Corporate Membership",
      "price": 120,
      "features": [
        "Access to all premium membership features",
        "Discounts on additional personal training sessions",
        "Access to exclusive corporate events"
      ]
    }
  ]
  return (
    <div className="m-12 ">
      <h2 className="text-5xl text-center">Best Prices In The Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
      {
        price.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      </div>
     
    </div>
  );
};

export default PriceOptions;