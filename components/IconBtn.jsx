import { MouseEventHandler, ReactNode } from "react";

const IconBtn = ({ onClick, children }) => {
  return (
    <>
      <div
        className="p-2 bg-gray-200 rounded-md cursor-pointer dark:bg-gray-700"
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
};

export default IconBtn;
