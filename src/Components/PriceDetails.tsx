import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSVG from "./LoadingSvg";

interface PriceDetailsProps {
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    street: string;
    city: string;
    state: string;
  };
}
const PriceDeatails: React.FC<PriceDetailsProps> = ({ userInfo }) => {
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();
  const { items, totalDiscount, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const stripe = useStripe();
  const elements = useElements();

  // if the user info is filled out
  const isUserInfoFilled = Object.values(userInfo).every(
    (value) => value !== ""
  );

  //handlePaymentSubmit
  const handlePaymentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const cardElement = elements.getElement(CardElement);
    try {
      const { token, error } = await stripe.createToken(cardElement!, {
        name: userInfo.firstName,
        address_line1: userInfo.street,
        address_city: userInfo.city,
        address_state: userInfo.state,
      });

      if (error) {
        setPaymentError(error.message as string);
        setIsProcessing(false);
      } else {
        console.log("Payment successful:", token);
        setPaymentError(null);
        setIsProcessing(false);

        // Navigate to the Success component
        navigate("/success", { state: { userInfo } });
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setPaymentError("An error occurred. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <>
      {/* Price Detailes */}
      <div className="flex-1 px-3 md:px-5">
        <h1 className="py-5 font-bold">Price Details</h1>
        <ul>
          <li className="flex justify-between">
            Price({items.length})<span>${totalPrice}</span>
          </li>
          <li className="flex justify-between ">
            Discount
            <span className="text-green-600">${totalDiscount}</span>
          </li>
          <li className="flex justify-between border-b border-dashed pb-2">
            Delivery
            <span className="text-green-600">FREE Delivery</span>
          </li>
          <li className="flex justify-between pt-5 font-bold">
            Total Amount
            <span>${totalPrice - totalDiscount}</span>
          </li>
          <li className="text-green-600 py-5">
            You will save ${totalDiscount} on this order
          </li>
        </ul>
        <div className=" bg-white flex border-y border-x-0 py-5 border-gray-300 mb-20">
          <div className="flex-1  flex flex-col justify-center gap-2">
            <p className="font-semibold tracking-wide">
              ${totalPrice - totalDiscount}
            </p>
          </div>
          <div className="flex-1  flex flex-col justify-center items-end  ">
            <button className="bg-amber-400 w-max p-2 px-2 rounded-sm text-sm">
              CONTACT NOW
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Payment Methods
          </h3>
          <p className="text-gray-600 text-sm py-2">Choose One</p>
        </div>
        <div className="flex flex-col gap-3 py-2">
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="payments"
              id="cash"
              checked={selectedPaymentMethod === "cash"}
              onChange={() => setSelectedPaymentMethod("cash")}
              className="h-4 w-4 border border-gray-300 text-indigo-600"
            />
            <div className="flex gap-10 justify-between items-center">
              <label htmlFor="push-everything" className=" text-sm font-medium">
                Cash
              </label>
              <p className="text-red-500">not available</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="payments"
              id="card-payment"
              className="h-4 w-4 border border-gray-300 text-indigo-600"
              checked={selectedPaymentMethod === "card"}
              onChange={() => setSelectedPaymentMethod("card")}
            />
            <label
              htmlFor="push-everything"
              className="block text-sm font-medium"
            >
              Card Payment
            </label>
          </div>
        </div>
        {paymentError ? <div className="text-red-500">{paymentError}</div> : ""}
        {selectedPaymentMethod === "card" && (
          <div className="py-3 border my-5">
            <CardElement />
          </div>
        )}
        {/* Show user info error message */}
        {!isUserInfoFilled && (
          <div className="text-red-500 mt-2">
            Please fill out all the required user information.
          </div>
        )}
        {/* payment button */}
        <button
          onClick={handlePaymentSubmit}
          className="bg-blue-500 text-white px-3 py-2 rounded-md mt-3 w-24"
          disabled={isProcessing || !isUserInfoFilled} // Disable the button while processing or if user info is not filled
        >
          {isProcessing ? <LoadingSVG /> : "Pay Now"}
        </button>
      </div>
    </>
  );
};

export default PriceDeatails;
