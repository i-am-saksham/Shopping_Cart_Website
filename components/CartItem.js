// import toast from "react-hot-toast";
// import { remove } from "../redux/Slices/cartSlice";
// import useDispatch from "react";
// import { FcDeleteDatabase } from "react-icons/fc";
// // yhaa pe hme vohi data chahiye jo cart mai aaega isiliye humne cart.js mai props pass kiye the.
// const CartItem = ({item, itemIndex}) => {

//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   }

//   return (
//     <div>
//       <div>

//         <div>
//           <img src={item.image}/>
//         </div>

//         <div>
//           <h1>{item.title}</h1>
//           <h1>{item.description}</h1>
//           <div>
//               <p>{item.price}</p>
//               <div onClick={removeFromCart}>
//                 <FcDeleteDatabase/>
//               </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CartItem;


import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

// yhaa pe hme vohi data chahiye jo cart mai aaega isiliye humne cart.js mai props pass kiye the.
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="flex justify-between itmes-center gap-3 p-4 mt-10 ml-5 rounded-2xl bg-slate-50 w-[650px] border-b-8">

      <div className="flex gap-20">

        <div className="h-[180px] w-[150px]">
          <img src={item.image} className="h-full w-full "/>
        </div>

        <div className="w-[380px]">
          <h1 className="text-gray-700 font-semibold text-lg text-left mt-1 w-full">{item.title}</h1>
          <h1 className="text-grey-400 font-normal text-[10px] text-left w-full">{item.description}</h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
              onClick={removeFromCart}>
              <FcDeleteDatabase className="text-2xl"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
