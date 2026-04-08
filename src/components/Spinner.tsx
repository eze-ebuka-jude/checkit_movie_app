"use client"

import { ImSpinner9 } from "react-icons/im";

const Spinner = ({ size = "w-8 h-8", color = "border-blue-500" }) => (
  <div className="flex  flex-col justify-center items-center gap-5 w-full! h-screen">
    <div
      className={`${size} ${color} animate-spin rounded-full mt-8! text-white! font-bold  border-4  border-t-transparent`}
      role="status"
    >
      <span className=" text-white! font-bold text-5xl!">
        <ImSpinner9 />
      </span>
    </div>

    <div><span className=" text-white! font-bold">Loading...</span></div>
  </div>
);

export default Spinner