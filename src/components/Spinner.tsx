"use client"

const Spinner = ({ size = "w-8 h-8", color = "border-blue-500" }) => (
  <div
    className={`${size} ${color} animate-spin rounded-full mt-8! flex justify-center text-white! font-bold items-center w-full! border-4  border-t-transparent`}
    role="status"
  >
    <span className="sr-only text-white! font-bold">Loading...</span>
  </div>
);

export default Spinner