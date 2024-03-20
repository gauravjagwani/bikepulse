import React from "react";
import { ChEye, CgShoppingBag, CgEye } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";

const AddtoCartBtn = ({
  id,
  currency,
  name,
  description,
  images,
  price,
  price_id,
}) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();
  const bike = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    images: images,
    price: price,
    price_id: price_id,
  };
  return (
    <div
      className="btn-icon btn-accent hover:bg-[#14397c]"
      onClick={() => {
        addItem(bike);
        toast({
          title: `${name} has been added to Cart`,
        });
      }}
    >
      <CgShoppingBag />
    </div>
  );
};

export default AddtoCartBtn;
