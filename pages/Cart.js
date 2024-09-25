import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  // access or fetch the cart data
  // jo state pdi hai usiko he return krdo
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  // cart ki value add hoti rhegi
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (<div className="flex justify-evenly lg:gap-40 md:gap-20 ">


            <div className="w-[300px]">
              {/* display all the cart items */}
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="p-4 mt-10 ml-5 max-h-[500px]">
              <div className="">
                <div className="text-green-700 font-semibold text-xl">YOUR CART</div>
                <div className="text-green-700 font-semibold text-4xl leading-[40px]">SUMMARY</div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="pt-4">
                  <span>Total Items: <span className="font-semibold">{cart.length}</span> </span>
                </p>
                <p className="">Total Amount: <span className="font-semibold">${totalAmount.toFixed(2)}</span> </p>
                <button className="border border-green-700 font-semibold text-white bg-green-700 rounded-lg p-2 sm:w-[100px] md:w-[200px] lg:w-[300px]">
                  CheckOut Now
                </button>
              </div>
            </div>


          </div>) :
          (<div className="flex gap-10 justify-center items-center h-[610px]">
            <h1 className="font-semibold text-2xl text-red-500">Cart is Empty</h1>
            <Link to={"/"}>
              <button className="text-lg text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;
