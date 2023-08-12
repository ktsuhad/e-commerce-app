import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store/Store";
import { addTocart } from "../Feature/cartSlice";
import { ProductType } from "../Types/types";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch(); //dispatch

  //handleAddToCart function
  const handleAddToCart = (product:any) => {
    dispatch(addTocart(product));
  };

  return (
    <div className="w-64">
      <Link
        to={`/productdetails/${product.id}`}
        className="bg-slate-100 w-full h-56 flex items-center justify-center rounded-md relative"
      >
        <img src={product.images[0]} alt="" className="w-32 h-auto" />
        <span className="text-sm absolute top-2 right-2 bg-white rounded-full hover:bg-teal-500 hover:text-white flex px-2 py-1.5">
          <FavoriteBorderOutlined />
        </span>
      </Link>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="font-bold">{product.title}</h1>
          <span className="font-bold">$ {product.price}</span>
        </div>
        <p className="text-ellipsis whitespace-nowrap overflow-hidden text-sm text-gray-500">
          {product.description}
        </p>
        {/* <StarRating /> */}
        <div className="flex justify-center">
          <Button
            variant="contained"
            fullWidth
            size="small"
            style={{ backgroundColor: "green", marginTop: "5px" }}
            onClick={()=>handleAddToCart(product)} //calling handleAddToCart function
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
