import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PriceDeatails from "../Components/PriceDetails";

const stripePromise = loadStripe(process.env.REACT_APP_SECRETE_KEY!);

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
  });

  //handleChange
  const handleUserInfoChange = (field: string, value: string) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value,
    }));
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="flex-[3] bg-white px-3 md:px-5 h-screen overflow-y-auto py-5">
        <h1 className="text-2xl font-bold">Personal Information</h1>
        <p className="text-sm mt-3 ">
          Use permanent address where you can receive mail
        </p>
        <div className="flex flex-wrap gap-5 py-5">
          <div className="flex-1">
            <label htmlFor="firstName" className="block">
              name
            </label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-2 py-1 focus:ring-2 focus:outline-none "
              value={userInfo.firstName}
              onChange={(e) =>
                handleUserInfoChange("firstName", e.target.value)
              }
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block">
              Last name
            </label>
            <input
              type="text"
              value={userInfo.lastName}
              onChange={(e) => handleUserInfoChange("lastName", e.target.value)}
              required
              className="border border-gray-400 rounded-md px-2 py-1 focus:ring-2 focus:outline-none"
            />
          </div>
        </div>
        <label htmlFor="email" className="block">
          Email Address
        </label>
        <input
          type="email"
          value={userInfo.email}
          className="border border-gray-400 rounded-md px-2 py-1 focus:ring-2 focus:outline-none  w-full md:w-1/2"
          onChange={(e) => handleUserInfoChange("email", e.target.value)}
          required
        />
        <label htmlFor="country" className="block mt-5">
          Country
        </label>
        <input
          type="text"
          value={userInfo.country}
          onChange={(e) => handleUserInfoChange("country", e.target.value)}
          required
          className="border border-gray-400 rounded-md px-2 py-1 focus:ring-2 focus:outline-none "
        />
        <label htmlFor="street" className="block mt-5">
          Street address
        </label>
        <textarea
          name="street"
          value={userInfo.street}
          onChange={(e) => handleUserInfoChange("street", e.target.value)}
          required
          className="w-full border border-gray-400 rounded-md px-2 py-1 focus:ring-2 focus:outline-none "
        ></textarea>
        <div className="flex flex-wrap gap-5 mt-5">
          <div className="flex-1">
            <label htmlFor="city" className="block">
              City
            </label>
            <input
              type="text"
              value={userInfo.city}
              onChange={(e) => handleUserInfoChange("city", e.target.value)}
              required
              className="border border-gray-400 rounded-md px-2 py-1 focus:ring-2 focus:outline-none "
            />
          </div>
          <div className="flex-1">
            <label htmlFor="state" className="block">
              State / Province
            </label>
            <input
              type="text"
              value={userInfo.state}
              onChange={(e) => handleUserInfoChange("state", e.target.value)}
              required
              className="border border-gray-400 rounded-md px-2 py-1 focus:ring-2 focus:outline-none "
            />
          </div>
        </div>
        <hr className="my-10" />
      </div>
      <PriceDeatails userInfo={userInfo} />
    </div>
  );
};

// Wrap the Checkout component with the Elements provider
const WrappedCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default WrappedCheckout;
